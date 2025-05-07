import React, { useMemo } from "react";
import { Slate, Editable, withReact, RenderLeafProps } from "slate-react";
import { createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import HoveringToolbar from "./HoveringToolbar";

export interface RichTextEditorProps {
  value: Descendant[];
  onChange: (value: Descendant[]) => void;
  className?: string;
  readOnly?: boolean;
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

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  className,
  readOnly = false,
}) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate editor={editor} initialValue={value} onChange={onChange}>
      {!readOnly && <HoveringToolbar />} {/* Hide toolbar in preview mode */}
      <Editable
        renderLeaf={renderLeaf}
        placeholder="Type something..."
        className={className}
        style={{ fontSize: "16px" }} // default font size
        readOnly={readOnly}
      />
    </Slate>
  );
};

export default RichTextEditor;
