import { Descendant, Text as SlateText } from "slate";
import { Text, Link } from "@react-pdf/renderer";
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

        if (node.link) {
          inlineChildren.push(
            <Link key={inlineChildren.length} src={node.link}>
              <Text style={style}>{node.text}</Text>
            </Link>
          );
        } else {
          inlineChildren.push(
            <Text key={inlineChildren.length} style={style}>
              {node.text}
            </Text>
          );
        }
      } else if ("children" in node && Array.isArray(node.children)) {
        walk(node.children);
      }
    }
  };

  walk(nodes);

  console.log(inlineChildren)

  return inlineChildren
}
