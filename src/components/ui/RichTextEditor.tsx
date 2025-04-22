import React, { useMemo, useRef, useEffect } from "react";
import {
  Slate,
  Editable,
  withReact,
  useSlate,
  useFocused,
  RenderLeafProps,
} from "slate-react";
import { createEditor, Transforms, Editor, Descendant, Range, Text as SlateText } from "slate";
import { withHistory } from "slate-history";
import ReactDOM from "react-dom";


// Props
export interface RichTextEditorProps {
  value: Descendant[];
  onChange: (value: Descendant[]) => void;
}

// Formatting types
type Format = "bold" | "italic" | "underline" | "link";

// Mark toggle logic
const toggleMark = (editor: Editor, format: Format) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isMarkActive = (editor: Editor, format: Format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const toggleLink = (editor: Editor, url: string) => {
  const { selection } = editor;

  if (!selection || Range.isCollapsed(selection)) return;

  const [match] = Editor.nodes(editor, {
    match: (n) => SlateText.isText(n) && !!n.link,
    universal: true,
  });

  if (match) {
    // Link already exists — remove it
    Editor.removeMark(editor, "link");
  } else {
    // Add new link
    Editor.addMark(editor, "link", url);
  }
};

export const isLinkActive = (editor: Editor) => {
  const marks = Editor.marks(editor);
  return marks ? !!marks.link : false;
};

// Format button
const FormatButton = ({ format, label }: { format: Format; label: string }) => {
  const editor = useSlate();
  const active = isMarkActive(editor, format);
  return (
    <button
      onMouseDown={(e) => {
        e.preventDefault();
        toggleMark(editor, format);
      }}
      className={`px-2 py-1 mr-1 text-sm bg-gray-800 ${
        active ? "font-bold text-white" : "text-gray-400"
      }`}
    >
      {label}
    </button>
  );
};

// Link Button
const LinkButton = () => {
  const editor = useSlate();
  const active = isLinkActive(editor);

  return (
    <button
      onMouseDown={(e) => {
        e.preventDefault();
        const url = window.prompt("Enter URL:");
        if (url) {
          toggleLink(editor, url);
        } else {
          toggleLink(editor, ""); // Removes link if input is empty
        }
      }}
      className={`px-2 py-1 mr-1 text-sm bg-gray-800 ${
        active ? "font-bold text-white" : "text-gray-400"
      }`}
    >
      🔗
    </button>
  );
};

const CitationButton = () => {
  const editor = useSlate();

  return (
    <button
      onMouseDown={(e) => {
        e.preventDefault();
        const citationText = window.prompt("Enter citation text:");
        if (!citationText) return;

        const citationNumber = getNextCitationNumber(editor);
        insertCitation(editor, citationNumber, citationText);
      }}
      className="px-2 py-1 mr-1 text-sm bg-gray-800 text-gray-400"
    >
      📘
    </button>
  );
};

// These will be implemented in Step 2
const getNextCitationNumber = (editor: Editor): number => {
  let count = 1;

  for (const [node] of Editor.nodes(editor, {
    match: (n) => SlateText.isText(n) && !!n.citation,
    universal: true,
  })) {
    count++;
  }

  return count;
};

export const insertCitation = (editor: Editor, number: number, value: string) => {
  if (!editor.selection || Range.isCollapsed(editor.selection)) return;

  const end = Range.end(editor.selection);
  Transforms.select(editor, { anchor: end, focus: end });

  // Create a new Text node just for the citation number
  const citationNode: SlateText = {
    text: String(number),
    superscript: true,
    citation: value,
  };

  // Insert as a separate node (not part of current typing context)
  Transforms.insertNodes(editor, citationNode);

  // Clear any active marks so user doesn't keep typing in superscript/citation mode
  Editor.removeMark(editor, "superscript");
  Editor.removeMark(editor, "citation");
};


// Toolbar
const HoveringToolbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const editor = useSlate();
  const focused = useFocused();

  useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) return;

    if (
      !selection ||
      !focused ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      el.style.opacity = "0";
      el.style.top = "-1000px";
      return;
    }

    const domSelection = window.getSelection();
    if (!domSelection || domSelection.rangeCount === 0) return;

    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();

    el.style.opacity = "1";
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight - 8}px`;
    el.style.left = `${rect.left + window.pageXOffset + rect.width / 2 - el.offsetWidth / 2}px`;
  });

  return ReactDOM.createPortal(
    <div
      ref={ref}
      className="absolute z-[1000] flex items-center space-x-1 bg-gray-800 text-white px-2 py-1 rounded transition-opacity duration-200 opacity-0"
      onMouseDown={(e) => e.preventDefault()}
    >
      <FormatButton format="bold" label="B" />
      <FormatButton format="italic" label="I" />
      <FormatButton format="underline" label="U" />
      <LinkButton /> 
      <CitationButton />
      
    </div>,
    document.body
  );
};

// Text formatting
const renderLeaf = (props: RenderLeafProps) => {
  let { children, leaf } = props;

  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.superscript) {
    children = <sup>{children}</sup>;
  }

  if (leaf.link) {
    children = (
      <a
        href={leaf.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {children}
      </a>
    );
  }

  return <span {...props.attributes}>{children}</span>;
};

// Main editor
const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate editor={editor} initialValue={value} onChange={onChange}>
      <HoveringToolbar />
      <Editable
        renderLeaf={renderLeaf}
        placeholder="Type something..."
        className="border border-gray-300 rounded p-3 min-h-[100px] focus:outline-none"
      />
    </Slate>
  );
};

export default RichTextEditor;
