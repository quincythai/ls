import { RichTextValue, StatBoxContent } from "./BasePageConfig";

export interface EmployeeOwnershipSectionContent {
  introParagraph: RichTextValue;
  statGroup1: StatBoxContent[];
  esopParagraph1: RichTextValue;
  esopParagraph2: RichTextValue;
  esopParagraph3: RichTextValue;
  esopMapTitle: RichTextValue;
  esopMapImage: string;
  statGroup2: StatBoxContent[];
  qrImageSrc?: string;
  qrCaption: RichTextValue;
}

export const defaultEmployeeOwnershipSectionContent: EmployeeOwnershipSectionContent =
  {
    introParagraph: [
      {
        type: "paragraph",
        children: [
          { text: "The United States is confronting a " },
          { text: '"silver tsunami"', bold: true },
          {
            text: " of retiring business owners that are likely to sell their businesses over the next decade.",
          },
          {
            text: " Meanwhile, too many American workers and families are financially unprepared for retirement.",
          },
        ],
      },
    ],

    statGroup1: [
      {
        number: "52%",
        label: [
          {
            type: "paragraph",
            children: [
              { text: "of businesses have an owner aged 55 or older" },
              { text: "19", superscript: true },
            ],
          },
        ],
        rank: "RANK 115 OUT OF 435",
      },
      {
        number: "14%",
        label: [
          {
            type: "paragraph",
            children: [
              {
                text: "of businesses operate in critical industries and have an owner aged 55 or older",
              },
              { text: "20", superscript: true },
            ],
          },
        ],
        rank: "RANKED BY NUMBER OF CRITICAL FIRMS 62 OUT OF 435",
      },
      {
        number: "54%",
        label: [
          {
            type: "paragraph",
            children: [
              {
                text: "of all Americans aged 15 to 64 have no retirement account",
              },
              { text: "21", superscript: true },
            ],
          },
        ],
        rank: "NATIONWIDE",
      },
      {
        number: "-17%",
        label: [
          {
            type: "paragraph",
            children: [
              {
                text: "reduction of retirement savings of working-class Americans 2022 vs. 2016",
              },
              { text: "22", superscript: true },
            ],
          },
        ],
        rank: "NATIONWIDE",
      },
    ],

    esopParagraph1: [
      {
        type: "paragraph",
        children: [
          {
            text: "Without a policy strategy to address business succession, we risk the loss of American businesses and their local jobs. ",
            bold: true,
          },
          {
            text: "Too often, the sale of a business to an out-of-state or foreign buyer results in the loss of local jobs and investment. With many businesses in critical industries—e.g., those with implications for national and economic security—facing the challenges of business succession, promoting employee ownership can be part of a broader competition framework to maintain our leadership in strategic sectors while investing in American workers.",
          },
        ],
      },
    ],

    esopParagraph2: [
      {
        type: "paragraph",
        children: [
          { text: "What is an ESOP? ", bold: true },
          {
            text: "Employee Stock Ownership Plan (ESOP) is both a retirement plan and corporate finance vehicle that allows retiring business owners to sell their business to employees. Employees do not pay for their shares—employee ownership is instead an incremental benefit on top of wages and benefits. ESOPs have been demonstrated to create over 2.5 times more retirement wealth for workers—in addition to superior pay and benefits—compared to traditional companies.",
          },
          { text: "23", superscript: true },
          {
            text: " Employee-owned businesses have also been shown to innovate more frequently and exhibit greater resilience during an economic downturn.",
          },
          { text: "24", superscript: true },
        ],
      },
    ],
    esopParagraph3: [
      {
        type: "paragraph",
        children: [
          {
            text: "As baby boomers prepare to retire and sell their businesses, ESOPs can play an important role in maintaining domestic ownership and productive capacity across manufacturing and other strategic sectors—a win-win for U.S. economic security and for American workers across the country.",
          },
        ],
      },
    ],

    esopMapTitle: [
      {
        type: "paragraph",
        children: [
          { text: "Privately Held ESOP Companies in 2nd District", bold: true },
        ],
      },
    ],

    esopMapImage: new URL("../../assets/esop.png", import.meta.url).href,

    statGroup2: [
      {
        number: "23",
        label: [
          {
            type: "paragraph",
            children: [
              { text: "privately held ESOP companies" },
              { text: "25", superscript: true },
            ],
          },
        ],
        rank: "RANK 52 OUT OF 435",
      },
      {
        number: "2,707",
        label: [
          {
            type: "paragraph",
            children: [
              { text: "total employee owners in local ESOP companies" },
              { text: "26", superscript: true },
            ],
          },
        ],
        rank: "RANK 194 OUT OF 435",
      },
      {
        number: "$67.4K",
        label: [
          {
            type: "paragraph",
            children: [
              { text: "average ESOP balance per employee" },
              { text: "27", superscript: true },
            ],
          },
        ],
        rank: "RANK 321 OUT OF 435",
      },
    ],

    qrImageSrc: new URL("../../assets/qr-code.png", import.meta.url).href,

    qrCaption: [
      {
        type: "paragraph",
        children: [
          { text: "Learn more about " },
          { text: "employee ownership", underline: true },
        ],
      },
    ],
  };
