import { RichTextValue, StatBoxContent } from "./BasePageConfig";

export interface ReferencePageContent {
    contactEmail: RichTextValue;
    qrImageSrc: string;
    qrImageCaption: RichTextValue;
    qrImageCTA: RichTextValue;
    leftColumn: RichTextValue[];
    rightColumn: RichTextValue[];
  }
  
  export const defaultReferencePageContent: ReferencePageContent = {
    contactEmail: [
      {
        type: "paragraph",
        children: [
          { text: "Connect with us at " },
          { text: "535@lafayettesquareinstitute.org", underline: true },
        ],
      },
    ],
    qrImageCaption: [
      {
        type: "paragraph",
        children: [{ text: "Want to learn more?" }],
      },
    ],
    qrImageCTA: [
      {
        type: "paragraph",
        children: [{ text: "Visit our website!", underline: true }],
      },
    ],
    qrImageSrc: new URL("../../assets/qr-code.png", import.meta.url).href,
    leftColumn: [
      [
        {
          type: "paragraph",
          children: [
            { text: "Chetty, R. et al. " },
            { text: "Opportunity Insights", italic: true, underline: true },
            { text: ", Harvard University, 2018. " },
            {
              text: "The Opportunity Atlas: Mapping the Childhood Roots of Social Mobility.",
              italic: true,
              underline: true,
            },
          ],
        },
      ],
      [
        {
          type: "paragraph",
          children: [
            { text: "U.S. Census Bureau, 2024. " },
            {
              text: "Household Pulse Survey, Phase 4.2, Cycle 09.",
              italic: true,
              underline: true,
            },
            { text: " Difficulty paying for usual household expenses." },
          ],
        },
      ],
      [
        {
          type: "paragraph",
          children: [
            { text: "Federal Reserve Board, 2023. " },
            {
              text: "2022 Survey of Consumer Finances: Median Net Worth by Family Characteristics.",
              italic: true,
              underline: true,
            },
          ],
        },
      ],
    ],
  
    rightColumn: [
      [
        {
          type: "paragraph",
          children: [
            { text: "Anderson, D. " },
            { text: "Redfin, 2024. ", italic: true },
            {
              text: "Nearly 40% of Renters Think They'll Never Own a Home.",
              italic: true,
              underline: true,
            },
          ],
        },
      ],
      [
        {
          type: "paragraph",
          children: [
            { text: "National Center for Employee Ownership, 2018. " },
            {
              text: "Research on Employee Ownership, Corporate Performance, and Employee Compensation.",
              italic: true,
              underline: true,
            },
          ],
        },
      ],
      [
        {
          type: "paragraph",
          children: [
            { text: "Up for Growth, 2023. " },
            {
              text: "2023 Housing Underproduction in the United States.",
              italic: true,
              underline: true,
            },
          ],
        },
      ],
    ],
  };