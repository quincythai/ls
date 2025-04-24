import { RichTextValue, StatBoxContent } from "./BasePageConfig";


export interface HousingSectionContent {
    introParagraph: RichTextValue;
    statGroup1: StatBoxContent[];
    statGroup2: StatBoxContent[];
    housingParagraph1: RichTextValue;
    housingParagraph2: RichTextValue;
    rentBurdenChart?: string;
    qrImageSrc?: string;
    qrCaption: RichTextValue;
  }

  export const defaultHousingSectionContent: HousingSectionContent = {
    introParagraph: [
      {
        type: "paragraph",
        children: [
          { text: "The California 2nd District "},
          { text: " is facing housing supply and affordability challenges. " },
          { text: "This is contributing to unsustainable financial burdens for families and creates barriers to economic opportunity.", bold: true },
        ],
      },
    ],
    statGroup1: [
      {
        number: "38x",
        label: [
          {
            type: "paragraph",
            children: [
              { text: "is what a typical family owning a home has in net worth compared to a family renting" },
              { text: "5", superscript: true },
            ],
          },
        ],
        rank: "NATIONWIDE",
      },
      {
        number: "55%",
        label: [
          {
            type: "paragraph",
            children: [
              { text: "of renters are burdened by housing costs" },
              { text: "6", superscript: true },
            ],
          },
        ],
        rank: "RANK 363 OUT OF 435",
      },
      {
        number: "18%",
        label: [
          {
            type: "paragraph",
            children: [
              { text: "of state residents are facing eviction or foreclosure" },
              { text: "7", superscript: true },
            ],
          },
        ],
        rank: "RANK 12 OUT OF 50",
      },
      {
        number: "13%",
        label: [
          {
            type: "paragraph",
            children: [
              { text: "of residents live in high poverty areas" },
              { text: "8", superscript: true },
            ],
          },
        ],
        rank: "RANK 170 OUT OF 435",
      },
    ],
    housingParagraph1: [
      {
        type: "paragraph",
        children: [
          { text: "The United States is 4 million homes short of meeting national demand, a shortfall that has almost doubled over the past decade", bold: true },
          { text: "10", superscript: true },
          { text: ". " },
          { text: "California", bold: true },
          { text: " has a shortfall of 881,354 units." },
          { text: "11", superscript: true },
          { text: " This undersupply contributes to rising housing costs which force working-class families to spend an unsustainable portion of their income on rent and pushes many households into neighborhoods with high poverty rates." },
          { text: "12", superscript: true },
          { text: " Research demonstrates that living in areas of concentrated poverty makes it harder for kids to rise up the income ladder." },
          { text: "13", superscript: true },
          { text: " Housing cost-burdens are also rising for middle- and higher-income families, while rising housing costs have led to the American Dream of homeownership becoming increasingly unattainable—narrowing pathways for families to build wealth." },
          { text: "14", superscript: true },
        ],
      },
    ],
    housingParagraph2: [
      {
        type: "paragraph",
        children: [
          { text: "Of the over $200 billion that has been invested annually in housing in recent years, only a fraction supports projects affordable for working-class families." },
          { text: "15", superscript: true },
          { text: " Innovative models capable of significantly boosting the supply of affordable housing exist but struggle to attract capital to scale. New policies, programs and financing tools are needed that redirect private capital into projects that promote financial stability and homeownership, and help build strong, resilient communities." },
        ],
      },
    ],
    rentBurdenChart: new URL("../../../assets/rent-burden-chart.png", import.meta.url).href,
    statGroup2: [
      {
        number: "$1,796",
        label: [
          {
            type: "paragraph",
            children: [
              { text: "median rent" },
              { text: "16", superscript: true },
            ],
          },
        ],
        rank: "RANK 380 OUT OF 435",
      },
      {
        number: "$777.5K",
        label: [
          {
            type: "paragraph",
            children: [
              { text: "median home value" },
              { text: "17", superscript: true },
            ],
          },
        ],
        rank: "RANK 411 OUT OF 435",
      },
      {
        number: "63%",
        label: [
          {
            type: "paragraph",
            children: [
              { text: "home ownership rate" },
              { text: "18", superscript: true },
            ],
          },
        ],
        rank: "RANK 287 OUT OF 435",
      },
    ],
    qrImageSrc: new URL("../assets/qr-code.png", import.meta.url).href,
    qrCaption: [
      {
        type: "paragraph",
        children: [
          { text: "Learn more about " },
          { text: "affordable housing", underline: true },
        ],
      },
    ],
  };