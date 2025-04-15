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

// Define the prop types for our controlled editor
export interface RichTextEditorProps {
  value: Descendant[];
  onChange: (value: Descendant[]) => void;
}

// Define formatting types
type Format = "bold" | "italic" | "underline";

// Toggle formatting marks
const toggleMark = (editor: Editor, format: Format) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

// Check if formatting is active
const isMarkActive = (editor: Editor, format: Format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

// Toolbar button component
const FormatButton = ({ format, label }: { format: Format; label: string }) => {
  const editor = useSlate();
  const active = isMarkActive(editor, format);
  return (
    <button
      onMouseDown={(e) => {
        e.preventDefault();
        toggleMark(editor, format);
      }}
      style={{
        fontWeight: active ? "bold" : "normal",
        background: active ? "#eee" : "#fff",
        border: "1px solid #ccc",
        borderRadius: 4,
        padding: "4px 8px",
        cursor: "pointer",
        marginRight: "4px",
      }}
    >
      {label}
    </button>
  );
};

// The floating toolbar itself
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
      style={{
        position: "absolute",
        zIndex: 1000,
        padding: "8px",
        backgroundColor: "#222",
        borderRadius: "4px",
        opacity: 0,
        color: "white",
        display: "flex",
        transition: "opacity 0.2s",
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <FormatButton format="bold" label="B" />
      <FormatButton format="italic" label="I" />
      <FormatButton format="underline" label="U" />
    </div>,
    document.body
  );
};

// How to render each text leaf with formatting
const renderLeaf = (props: RenderLeafProps) => {
  let { children } = props;
  if (props.leaf.bold) children = <strong>{children}</strong>;
  if (props.leaf.italic) children = <em>{children}</em>;
  if (props.leaf.underline) children = <u>{children}</u>;
  return <span {...props.attributes}>{children}</span>;
};

// Main controlled component
const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate editor={editor} initialValue={value} onChange={onChange}>
      <HoveringToolbar />
      <Editable
        renderLeaf={renderLeaf}
        placeholder="Type something..."
        style={{
          border: "1px solid #ccc",
          padding: "12px",
          borderRadius: "4px",
          minHeight: "100px",
        }}
      />
    </Slate>
  );
};

export default RichTextEditor;
