import { Descendant, Text as SlateText } from "slate";
import { Text } from "@react-pdf/renderer";
import type { ReactNode } from "react";

// Convert Slate Descendant[] into React-PDF elements
export function serializeToPDFText(
  nodes: Descendant[],
  baseStyle: Record<string, any> = {}
): ReactNode[] {
  return nodes
    .map((node, i): ReactNode | null => {
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

        return (
          <Text key={i} style={style}>
            {node.text}
          </Text>
        );
      }

      if ("children" in node) {
        return (
          <Text key={i} style={baseStyle}>
            {serializeToPDFText(node.children as Descendant[], baseStyle)}
          </Text>
        );
      }

      return null;
    })
    .filter((el): el is ReactNode => el !== null);
}
