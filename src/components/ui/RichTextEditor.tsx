import React, { useMemo } from "react";
import {
  Slate,
  Editable,
  withReact,
  RenderLeafProps,
} from "slate-react";
import { createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import HoveringToolbar from "./HoveringToolbar";

// Props
export interface RichTextEditorProps {
  value: Descendant[];
  onChange: (value: Descendant[]) => void;
  className?: string; // <-- add className here!
}

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
const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, className }) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate editor={editor} initialValue={value} onChange={onChange}>
      <HoveringToolbar />
      <Editable
        renderLeaf={renderLeaf}
        placeholder="Type something..."
        className={className}
      />
    </Slate>
  );
};

export default RichTextEditor;
