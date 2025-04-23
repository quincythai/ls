import { createTw } from "react-pdf-tailwind";
import { Font } from "@react-pdf/renderer";

// Register all Inter font weights
Font.register({
  family: "Inter",
  fonts: [
    { src: "/fonts/Inter-Regular.ttf", fontWeight: "normal" },
    { src: "/fonts/Inter-Medium.ttf", fontWeight: "medium" },
    { src: "/fonts/Inter-SemiBold.ttf", fontWeight: "semibold" },
    { src: "/fonts/Inter-Bold.ttf", fontWeight: "bold" },
  ],
});

let SourceDict: Record<string, string> = {};

export const getFootnoteIndex = (source: string): number => {
  // Check if the source is already present in SourceDict.
  for (const key of Object.keys(SourceDict)) {
    if (SourceDict[key] === source) {
      return parseInt(key, 10);
    }
  }

  // If not found, create a new index.
  const newIndex = Object.keys(SourceDict).length + 1;
  SourceDict[newIndex.toString()] = source;
  return newIndex;
};


export const getAllFootnotes = (): Record<string, string> => {
  // Return a shallow copy of SourceDict.
  return { ...SourceDict };
};


export const tw = createTw({
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#252525",
        card: "#ffffff",
        "card-foreground": "#252525",
        primary: "#333333",
        "primary-foreground": "#fbfbfb",
        secondary: "#d7f1ef",
        "highlight-text": "#e1e8e8",
        "secondary-transparent": "rgba(103, 212, 204, 0.15)",
        "secondary-light": "#E5F6F5",
        "secondary-foreground": "#13202a",
        muted: "#f7f7f7",
        "muted-foreground": "#8e8e8e",
        accent: "#f7f7f7",
        "accent-foreground": "#333333",
        destructive: "#e57373",
        border: "#ebebeb",
        input: "#ebebeb",
        ring: "#091e53",
        "chart-1": "#a67c52",
        "chart-2": "#8b9ba3",
        "chart-3": "#5a6b7a",
        "chart-4": "#d4b35c",
        "chart-5": "#c4a35c",
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontSize: {
        "heading-1": "48px",
        "heading-2": "35px",
        "heading-3": "30px",
        "heading-4": "20px",
        paragraph: "16px",
        "small-text": "11px",
        caption: "10px",
      },
      spacing: {
        "18": "4.5rem",
        "30": "7.5rem",
        "32": "8rem",
      },
    },
  },
}); 