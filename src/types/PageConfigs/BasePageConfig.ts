export type RichTextValue = RichTextNode[];

export interface RichTextNode {
  type: string;
  children: RichTextLeaf[];
}

export interface RichTextLeaf {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  superscript?: boolean;
}

export interface StatBoxContent {
  number: string;
  label: RichTextValue;
  rank?: string;
}