import { Descendant, Text as SlateText } from "slate";
import { Text } from "@react-pdf/renderer";
import type { ReactNode } from "react";

export function serializeToPDFText(
  nodes: Descendant[],
  baseStyle: Record<string, any> = {}
): ReactNode {
  const inlineChildren: ReactNode[] = [];

  const walk = (children: Descendant[]) => {
    for (const node of children) {
      if (SlateText.isText(node)) {
        const style = { ...baseStyle };

        if (node.bold) style.fontWeight = "bold";
        if (node.italic) style.fontStyle = "italic";
        if (node.underline) style.textDecoration = "underline";
        if (node.superscript) {
          style.fontSize = 8;
          style.verticalAlign = "super";
        }
        if (node.subscript) {
          style.fontSize = 8;
          style.verticalAlign = "sub";
        }

        inlineChildren.push(
          <Text style={style}>
            {node.text}
          </Text>
        );
      } else if ("children" in node && Array.isArray(node.children)) {
        walk(node.children);
      }
    }
  };

  walk(nodes);

  // Return ONE parent <Text> with all inline children
  return inlineChildren;
}
