import React, { useMemo } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";

interface RichTextEditorProps {
  value: Descendant[];
  onChange: (value: Descendant[]) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, placeholder }) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <Slate editor={editor} initialValue ={value} onChange={onChange}>
      <Editable
        placeholder={placeholder || "Type here..."}
        style={{
          border: "1px solid #ccc",
          padding: "8px",
          minHeight: "60px",
          borderRadius: "4px",
          fontSize: "14px",
        }}
      />
    </Slate>
  );
};

export default RichTextEditor;
