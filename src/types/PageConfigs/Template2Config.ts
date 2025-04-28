import { RichTextValue, StatBoxContent } from "./BasePageConfig";

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
          text: "The Ownership Succession & Supply Chain Resilience Act (OSSR) would enable the sale of U.S. businesses to American workers through an Employee Stock Ownership Plan (ESOP) structure without risking the taxpayer's hard-earned dollars. By equipping the Commerce Department with a zero-subsidy investment facility, Congress can prevent the offshoring of U.S. manufacturers and other domestic operating in critical industries, enhance the resilience of U.S. supply chains, and enable American workers to accumulate substantial retirement assets. By supporting licensed private investment funds called Ownership Succession Investment Companies (OSICs), Congress can support the private capital markets in financing the sale of privately held businesses to their employees through an ESOP at zero subsidy cost to the tax payer. Leveling the playing field for a sale to an ESOP can enable American businesses to remain domestically owned as an alternative to foreign mergers and acquisitions (M&A) in order to bolster supply chain resiliency and U.S. strategic competitiveness.",
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
        children: [{ text: "Lorem ipsum non vitae etiam dictumst dui sed." }],
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
          {
            text: "Lorem ipsum ut amet morbi tellus in turpis amet imperdiet.",
          },
        ],
      },
    ],
    rank: "RANK 27 OUT OF 50",
  },
  footerText: [
    {
      type: "paragraph",
      children: [
        {
          text: "Turn the page to see further details on how Alabama is doing on employee ownership",
        },
      ],
    },
  ],
};
