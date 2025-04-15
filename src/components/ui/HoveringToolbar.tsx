// FloatingToolbar.tsx
import { useEffect, useRef, MouseEvent } from "react";
import { Editor, Range } from "slate";
import { useSlate, useFocused } from "slate-react";

interface FormatButtonProps {
  format: string;
  label: string;
}

const FormatButton = ({ format, label }: FormatButtonProps) => {
  const editor = useSlate();
  const isActive = isMarkActive(editor, format);

  return (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault();
        toggleMark(editor, format);
      }}
      style={{
        fontWeight: isActive ? "bold" : "normal",
        background: isActive ? "#f3f3f3" : "#fff",
        padding: "4px 8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "pointer",
        marginRight: 4,
      }}
    >
      {label}
    </button>
  );
};

export const FloatingToolbar = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const editor = useSlate();
  const inFocus = useFocused();

  useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) return;

    if (
      !selection ||
      !inFocus ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      el.style.opacity = "0";
      el.style.top = "-9999px";
      el.style.left = "-9999px";
      return;
    }

    const domSelection = window.getSelection();
    if (!domSelection) return;

    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = "1";
    el.style.top = `${rect.top + window.scrollY - 40}px`;
    el.style.left = `${rect.left + window.scrollX}px`;
  });

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        zIndex: 10,
        padding: 8,
        backgroundColor: "#222",
        borderRadius: 4,
        opacity: 0,
        transition: "opacity 0.75s",
        color: "white",
      }}
      onMouseDown={(e: MouseEvent) => e.preventDefault()}
    >
      <FormatButton format="bold" label="B" />
      <FormatButton format="italic" label="I" />
      <FormatButton format="underline" label="U" />
    </div>
  );
};

// Toggle helpers
const toggleMark = (editor: Editor, format: string) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isMarkActive = (editor: Editor, format: string): boolean => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};
