import { RichTextValue, StatBoxContent } from "./BasePageConfig";

export interface Template1Colors {
  selectedColors: Record<string, string>;
}

export const defaultTemplate1Colors: Template1Colors = {
  selectedColors: {
    "Base *": "#D7F1EF",
    "Section 1 *": "#D3E8C8",
    "Section 2": "#C1D9EC",
    "Section 3": "#FFD5A5",

    Highlight: "#E7FEFC",
  },
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

  statDescription: RichTextValue;
}

export const defaultTemplate1CoverPageContent: Template1CoverPageContent = {
  coverImage: new URL("../../assets/logo.svg", import.meta.url).href,

  reportTitle: [
    {
      type: "paragraph",
      children: [{ text: "California 2nd District", bold: true }],
    },
  ],

  missionStatement: [
    {
      type: "paragraph",
      children: [
        {
          text: "Our mission is to bridge the gap between policymakers and investors to create economic security for workers and families.",
        },
      ],
    },
  ],

  missionSubtext: [
    {
      type: "paragraph",
      children: [
        {
          text: "We equip policymakers with data-driven insights to mobilize private capital to generate prosperity across the country.",
          bold: true,
        },
        {
          text: " Our ",
        },
        { text: "535 Insights", bold: true },
        {
          text: " series provides analytics specific to the constituencies of all 535 members of Congress.",
        },
      ],
    },
  ],

  ctaText: [
    {
      type: "paragraph",
      children: [
        {
          text: "To revive the American Dream, ",
        },
        { text: "the 2nd District", bold: true },
        {
          text: " needs a strategy to promote economic opportunity.",
        },
      ],
    },
  ],

  sectionIntroHeader: [
    {
      type: "paragraph",
      children: [{ text: "HERE'S WHERE WE'RE STARTING:" }],
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
          text: "Turn the page to see how the ",
        },
        { text: "2nd District", bold: true },
        {
          text: " is doing on affordable housing and employee ownership.",
        },
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

  statDescription: [
    {
      type: "paragraph",
      children: [
        {
          text: "The opportunity to build wealth and economic security is the foundation of the American Dream. This is how the Alabama 2nd District is performing",
          bold: true,
        },
        { text: " (ranked by desirability)." },
      ],
    },
  ],
};
