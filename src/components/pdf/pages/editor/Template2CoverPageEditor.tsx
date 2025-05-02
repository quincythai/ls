import { Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import RichTextEditor from "../ui/RichTextEditor";
import { Template2CoverPageContent } from "@/types/PageConfigs/Template2Config";
import { TemplateColors } from "@/types/templateConfig";

interface Template2CoverPageEditorProps {
    content: Template2CoverPageContent; 
    templateColors: TemplateColors;    
    onChange: (newContent: Template2CoverPageContent) => void; 
}

  export const Template2CoverPageEditor = ({
    content,
    templateColors,
    onChange,
  }: Template2CoverPageEditorProps) => {
  return (
    <>
      <div className="bg-white aspect-[8.5/11] w-[986px] text-[2px] px-[27em] py-[24em] leading-tight flex flex-col justify-between">
        {/* Main Content */}
        <div className="flex flex-col gap-y-[12em]">
          {/* Header */}
          <div className="w-full flex justify-between items-stretch">
            <div className="space-y-[9em]">
              <img src="/535-insights-policy-logo.svg" alt="535 Insights Logo" className="h-[32em]" />
              <h1 className="text-[16em] font-black tracking-wide text-lafayette-950">
                Ownership Succession & Supply Chain Resilience Act (OSSR)
              </h1>
            </div>
            <div className="flex flex-col justify-between">
              <img src="/logo.svg" alt="Lafayette Square Institute Logo" className="h-[24em] my-[4em] mx-[6em]" />
              <h2 className="text-[16em] font-medium">
                Alabama
              </h2>
            </div>
          </div>
          <hr className="bg-lafayette-200 border-none w-full h-[2em]" />
          {/* Summary Section */}
          <div className="bg-neutral-200 p-[8em]">
            <h2 className="text-[14em] font-bold mb-[0.5em] text-center">
              Summary
            </h2>
            <p className="text-[10em] leading-snug">
              The Ownership Succession & Supply Chain Resilience Act (OSSR) would enable the sale of U.S. businesses to American workers through an Employee Stock Ownership Plan (ESOP) structure without risking the taxpayer’s hard-earned dollars. By equipping the Commerce Department with a zero-subsidy investment facility, Congress can prevent the offshoring of U.S. manufacturers and other domestic operating in critical industries, enhance the resilience of U.S. supply chains, and enable American workers to accumulate substantial retirement assets. By supporting licensed private investment funds called Ownership Succession Investment Companies (OSICs), Congress can support the private capital markets in financing the sale of privately held businesses to their employees through an ESOP at zero subsidy cost to the tax payer. Leveling the playing field for a sale to an ESOP can enable American businesses to remain domestically owned as an alternative to foreign mergers and acquisitions (M&A) in order to bolster supply chain resiliency and U.S. strategic competitiveness.
            </p>
          </div>
          {/* Stats Section */}
          <div>
            <p className="text-[12em] font-medium my-[0.25em]">
              Here is why Alabama needs a strategy to promote ESOPS:
            </p>
            <div className="flex py-[12em]">
              <div className="w-[120em] space-y-[30em]">
                {[1, 2].map((i) => (
                  <div key={i} className="w-full bg-navyish-200 p-[9em] pt-0 mt-[9em]">
                    <div className="-mb-[18em] relative bottom-[18em] flex flex-col justify-between gap-y-[8em]">
                      <div className="flex flex-col gap-y-[4em]">
                        <h1 className="text-[26em] font-black text-lafayette-950">53%</h1>
                        <p className="text-[9em] font-medium text-lafayette-950 leading-snug">
                          Description for data
                        </p>
                      </div>
                      <h3 className="text-[8em] font-black text-lafayette-950 uppercase tracking-wide">
                        Rank 72 out of 435
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grow pl-[32em]">
                <ul className="text-[10em] font-medium list-disc space-y-[0.5em]">
                  <li>
                    Silver Tsunami
                  </li>
                  <li>
                    Risk of loss of jobs and productive capacities
                  </li>
                  <li>
                    Declining manufacturing production
                  </li>
                  <li>
                    Retirement Insecurity
                  </li>
                  <li>
                    Overall Economic Insecurity
                  </li>
                  <li>
                    High Turnover
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-between items-center">
          <p className="text-[8em] font-bold text-lafayette-950">
            Turn the page to see furhter details on how <span className="font-black highlight-lafayette-100">Alabama</span> is doing on employee ownership.
          </p>
          <img src="/triangle.svg" alt="Triangle" className="h-[14em]" />
        </div>
      </div>
    </>
  );
};
