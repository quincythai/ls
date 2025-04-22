import { Descendant, Text as SlateText } from "slate";
import { Text, Link, View } from "@react-pdf/renderer";
import type { ReactNode } from "react";

export function serializeToPDFText(
  nodes: Descendant[],
  baseStyle: Record<string, any> = {}
): ReactNode {
  const inlineChildren: ReactNode[] = [];
  const citations: { number: string; text: string }[] = [];

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


        if (node.citation) {
          citations.push({ number: node.text, text: node.citation });
        }

        const element = node.link ? (
          <Link key={inlineChildren.length} src={node.link}>
            <Text style={style}>{node.text}</Text>
          </Link>
        ) : (
          <Text key={inlineChildren.length} style={style}>
            {node.text}
          </Text>
        );

        inlineChildren.push(element);
      } else if ("children" in node && Array.isArray(node.children)) {
        walk(node.children);
      }
    }
  };

  walk(nodes);

  // This is where you can handle citations
  // For example adding them to the footnotes manager
  console.log("Citations:", citations);

  return inlineChildren
}


