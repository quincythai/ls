import { Descendant } from "slate";

export type RichTextValue = Descendant[];

export interface StatBoxContent {
  number: string;
  label: RichTextValue;
  rank?: string;
}

export interface Template1CoverPageContent {
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

export const defaultTemplate1CoverPageContent: Template1CoverPageContent = {
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
          text: "We equip policymakers with data-driven insights to mobilize ",
          bold: true,
        },
        { text: "private capital", bold: true },
        { text: " to generate prosperity across the country.", bold: true },
        { text: " Our ", bold: true },
        { text: "535 Insights", bold: true },
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

export interface Template2CoverPageContent {
  reportTitle: RichTextValue;
  subtitle: RichTextValue;
  summary: RichTextValue;
  whyNeeds: RichTextValue;
  stat1: StatBoxContent;
  stat2: StatBoxContent;
  footerText: RichTextValue;
}

export const defaultTemplate2CoverPageContent: Template2CoverPageContent = {
  reportTitle: [
    {
      type: "paragraph",
      children: [
        { text: "Ownership Succession & Supply Chain Resilience Act (OSSR)" },
      ],
    },
  ],
  subtitle: [
    {
      type: "paragraph",
      children: [{ text: "Alabama" }],
    },
  ],
  summary: [
    {
      type: "paragraph",
      children: [
        { 
          text: "The Ownership Succession & Supply Chain Resilience Act (OSSR) would enable the sale of U.S. businesses to American workers through an Employee Stock Ownership Plan (ESOP) structure without risking the taxpayer's hard-earned dollars. By equipping the Commerce Department with a zero-subsidy investment facility, Congress can prevent the offshoring of U.S. manufacturers and other domestic operating in critical industries, enhance the resilience of U.S. supply chains, and enable American workers to accumulate substantial retirement assets. By supporting licensed private investment funds called Ownership Succession Investment Companies (OSICs), Congress can support the private capital markets in financing the sale of privately held businesses to their employees through an ESOP at zero subsidy cost to the tax payer. Leveling the playing field for a sale to an ESOP can enable American businesses to remain domestically owned as an alternative to foreign mergers and acquisitions (M&A) in order to bolster supply chain resiliency and U.S. strategic competitiveness."
        },
      ],
    },
  ],
  whyNeeds: [
    {
      type: "paragraph",
      children: [
        { text: "Here is why Alabama needs a strategy to promote ESOPS:" },
      ],
    },
  ],
  stat1: {
    number: "53%",
    label: [
      {
        type: "paragraph",
        children: [
          { text: "Lorem ipsum non vitae etiam dictumst dui sed." },
        ],
      },
    ],
    rank: "RANK 27 OUT OF 50",
  },
  stat2: {
    number: "54%",
    label: [
      {
        type: "paragraph",
        children: [
          { text: "Lorem ipsum ut amet morbi tellus in turpis amet imperdiet." },
        ],
      },
    ],
    rank: "RANK 27 OUT OF 50",
  },
  footerText: [
    {
      type: "paragraph",
      children: [
        { text: "Turn the page to see further details on how Alabama is doing on employee ownership" },
      ],
    },
  ],
};
