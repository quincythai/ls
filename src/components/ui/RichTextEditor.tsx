import React, { useMemo, useRef, useEffect } from "react";
import {
  Slate,
  Editable,
  withReact,
  useSlate,
  useFocused,
  RenderLeafProps,
} from "slate-react";
import { createEditor, Editor, Descendant, Range } from "slate";
import { withHistory } from "slate-history";
import ReactDOM from "react-dom";

// Props
export interface RichTextEditorProps {
  value: Descendant[];
  onChange: (value: Descendant[]) => void;
}

// Formatting types
type Format = "bold" | "italic" | "underline";

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
    </div>,
    document.body
  );
};

// Text formatting
const renderLeaf = (props: RenderLeafProps) => {
  let { children } = props;
  if (props.leaf.bold) children = <strong>{children}</strong>;
  if (props.leaf.italic) children = <em>{children}</em>;
  if (props.leaf.underline) children = <u>{children}</u>;
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
        className="border-2 border-gray-300 rounded-lg p-3 min-h-[100px] focus:outline-none"
      />
    </Slate>
  );
};

export default RichTextEditor;
