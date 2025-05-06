import React, { useMemo } from "react";
import {
  Slate,
  Editable,
  withReact,
  RenderLeafProps,
} from "slate-react";
import { createEditor,  Descendant } from "slate";
import { withHistory } from "slate-history";
import HoveringToolbar from "./HoveringToolbar";


// Props
export interface RichTextEditorProps {
  value: Descendant[];
  onChange: (value: Descendant[]) => void;
}

// Text formatting
const renderLeaf = (props: RenderLeafProps) => {
  const { children, leaf } = props;
  let styledChildren = children;

  if (leaf.bold) {
    styledChildren = <strong>{styledChildren}</strong>;
  }
  if (leaf.italic) {
    styledChildren = <em>{styledChildren}</em>;
  }
  if (leaf.underline) {
    styledChildren = <u>{styledChildren}</u>;
  }
  if (leaf.superscript) {
    styledChildren = <sup>{styledChildren}</sup>;
  }
  if (leaf.highlight) {
    styledChildren = (
      <span style={{ backgroundColor: "#FFF59D" }}>{styledChildren}</span>    
    );
  }

  if (leaf.link) {
    styledChildren = (
      <a
        href={leaf.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {styledChildren}
      </a>
    );
  }

  const style: React.CSSProperties = {};
  if (leaf.fontSize) {
    style.fontSize = leaf.fontSize;
  }

  return <span {...props.attributes} style={style}>{styledChildren}</span>;
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
        style={{ fontSize: "16px" }} // Default font size
      />
    </Slate>
  );
};

export default RichTextEditor;
