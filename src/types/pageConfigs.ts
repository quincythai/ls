import { Descendant } from "slate";

export type RichTextValue = Descendant[];

export interface StatBoxContent {
  number: string;
  label: RichTextValue;
  rank?: string;
}

export interface Template1Colors {
  selectedColors: Record<string, string>
}

export const defaultTemplate1Colors: Template1Colors = {
  selectedColors: {
    "Base *": "#D7F1EF",
    "Section 1 *": "#D3E8C8", 
    "Section 2": "#C1D9EC",
    "Section 3": "#FFD5A5"
  }
};

export interface Template1CoverPageContent {
  coverImage?: string;

  reportTitle: RichTextValue;
  missionStatement: RichTextValue;
  missionSubtext: RichTextValue;
  ctaText: RichTextValue;

  sectionIntroHeader: RichTextValue;
  affordableHousingText: RichTextValue;
  employeeOwnershipText: RichTextValue;
  bottomNote: RichTextValue;

  affordableHousingTitle: RichTextValue;
  employeeOwnershipTitle: RichTextValue;

  mobilityStat: StatBoxContent;
  expenseBurdenStat: StatBoxContent;
  rentBurdenStat: StatBoxContent;
  successionRiskStat: StatBoxContent;
}

export interface ReferencePageContent {
  contactEmail: RichTextValue;
  qrImageSrc: string;
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


export const defaultTemplate1CoverPageContent: Template1CoverPageContent = {
  coverImage: "",
  
  reportTitle: [
    {
      type: "paragraph",
      children: [{ text: "California 2nd District"}],
    },
  ],

  missionStatement: [
    {
      type: "paragraph",
      children: [
        {
          text: "Our mission is to bridge the gap between policymakers and investors to create economic security for workers and families.",
          bold: true,
        },
      ],
    },
  ],

  missionSubtext: [
    {
      type: "paragraph",
      children: [
        {
          text: "We equip policymakers with data-driven insights to mobilize private capital to generate prosperity across the country. Our 535 Insights",
          bold: true,
        },
        {
          text: " series provides analytics specific to the constituencies of all 535 Members of Congress.",
        },
      ],
    },
  ],

  ctaText: [
    {
      type: "paragraph",
      children: [
        {
          text: "To revive the American Dream, the 2nd District needs a strategy to promote economic opportunity.",
          bold: true
        },
      ],
    },
  ],

  sectionIntroHeader: [
    {
      type: "paragraph",
      children: [{ text: "HERE'S WHERE WE'RE STARTING:"}],
    },
  ],

  affordableHousingTitle: [
    {
      type: "paragraph",
      children: [{ text: "Affordable Housing", bold: true }],
    },
  ],

  employeeOwnershipTitle: [
    {
      type: "paragraph",
      children: [{ text: "Employee Ownership", bold: true }],
    },
  ],

  affordableHousingText: [
    {
      type: "paragraph",
      children: [
        { text: "By making it easier to finance " },
        { text: "affordable housing", bold: true },
        { text: " and the expansion of " },
        { text: "home ownership", bold: true },
        {
          text: ", we can help build strong communities where families will thrive.",
        },
      ],
    },
  ],

  employeeOwnershipText: [
    {
      type: "paragraph",
      children: [
        { text: "By expanding " },
        { text: "employee ownership", bold: true },
        { text: " through " },
        { text: "Employee Stock Ownership Plans (ESOPs)", bold: true },
        {
          text: ", we can create generational wealth for American workers while enhancing U.S. competitiveness.",
        },
      ],
    },
  ],

  bottomNote: [
    {
      type: "paragraph",
      children: [
        {
          text: "Turn the page to see how the 1st District is doing on affordable housing and employee ownership.",
          bold: true
        }
      ],
    },
  ],

  mobilityStat: {
    number: "17%",
    label: [
      {
        type: "paragraph",
        children: [
          { text: "chance to become high-income with low-income parents" },
          { text: "1", superscript: true },
        ],
      },
    ],
    rank: "RANK 83 OUT OF 435",
  },

  expenseBurdenStat: {
    number: "38%",
    label: [
      {
        type: "paragraph",
        children: [
          {
            text: "of state residents have difficulty paying for usual expenses",
          },
          { text: "2", superscript: true },
        ],
      },
    ],
    rank: "RANK 35 OUT OF 50",
  },

  rentBurdenStat: {
    number: "55%",
    label: [
      {
        type: "paragraph",
        children: [
          { text: "of renters are burdened by housing costs" },
          { text: "3", superscript: true },
        ],
      },
    ],
    rank: "RANK 363 OUT OF 435",
  },

  successionRiskStat: {
    number: "52%",
    label: [
      {
        type: "paragraph",
        children: [
          { text: "of businesses are at risk of succession" },
          { text: "4", superscript: true },
        ],
      },
    ],
    rank: "RANK 115 OUT OF 435",
  },
};
