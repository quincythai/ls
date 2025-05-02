import { Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import RichTextEditor from "../ui/RichTextEditor";
import { EmployeeOwnershipSectionContent } from "@/types/PageConfigs/EmployeeOwnershipConfig";
import { TemplateColors } from "@/types/templateConfig";

interface EmployeeOwnershipSectionEditorProps {
    content: EmployeeOwnershipSectionContent; 
    templateColors: TemplateColors;   
    onChange: (newContent: EmployeeOwnershipSectionContent) => void; 
  }

  export const EmployeeOwnershipSectionEditor = ({
    content,
    templateColors,
    onChange,
  }: EmployeeOwnershipSectionEditorProps) => {
  return (
    <>
      <div className="bg-white aspect-[8.5/11] w-[986px] text-[2px] px-[27em] py-[24em] leading-tight flex flex-col justify-between">
        {/* Main Content */}
        <div className="flex flex-col gap-y-[12em]">
          {/* Header */}
          <div className="w-full flex justify-between items-center">
            <h1 className="text-[16em] font-black tracking-wide text-lafayette-950">
              Employee Ownership
            </h1>
            <img src="/logo.svg" alt="Lafayette Square Institute Logo" className="h-[24em] my-[4em] mx-[6em]" />
          </div>
          {/* Description */}
          <p className="text-[10em] font-medium text-lafayette-950 leading-snug">
            <strong>The United States is confronting a “silver tsunami” of retiring business owners that are likely to sell their businesses over the next decade.</strong> Meanwhile, too many American workers and families are financially unprepared for retirement.
          </p>
          {/* Stats Section */}
          <div className="w-full bg-navyish-200 p-[9em] pt-0 mt-[9em]">
            <div className="flex flex-col gap-y-[16em] -mb-[18em] relative bottom-[18em]">
              {/* Stats */}
              <div className="flex gap-[14em]">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-1 flex flex-col justify-between gap-y-[8em]">
                    <div className="flex flex-col gap-y-[4em]">
                      <h1 className="text-[26em] font-black text-lafayette-950">13%</h1>
                      <p className="text-[9em] font-medium text-lafayette-950 leading-snug">
                        of businesses operate in critical industries and have an owner aged 55 or older<sup>20</sup>
                      </p>
                    </div>
                    <h3 className="text-[8em] font-medium text-lafayette-950 uppercase tracking-wide">
                      Ranked by Number of Critical Firms <span className="font-black">388 out of 435</span>
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Paragraph Content Section */}
          <div className="py-[7em] space-y-[12em]">
            <div>
              <p className="text-[8em] font-medium">
                <strong>Without a policy strategy to address business succession, we risk the loss of American businesses and their local jobs.</strong> Too often, the sale of a business to an out-of-state or foreign buyer results in the loss of local jobs and investment. With many businesses in critical industries—e.g., those with implications for national and economic security—facing the challenges of business succession, promoting employee ownership can be part of a broader competition framework to maintain our leadership in strategic sectors while investing in American workers.
              </p>
            </div>
            <div className="columns-2 gap-[12em] space-y-[0.75em]">
              <p className="text-[8em] font-medium">
                <strong>What is an ESOP?</strong> The Employee Stock Ownership Plan (ESOP) is both a retirement plan and corporate finance vehicle that allows retiring business owners to sell their business to employees. Employees do not pay for their shares—employee ownership is instead an incremental benefit on top of wages and benefits. ESOPs have been demonstrated to create over 2.5 times more retirement wealth for workers—in addition to superior pay and benefits—compared to traditional companies.<sup>23</sup> Employee-owned businesses have also been shown to innovate more frequently and exhibit greater resilience during an economic downturn.<sup>24</sup>
              </p>
              <p className="text-[8em] font-medium">
                As baby boomers prepare to retire and sell their businesses, ESOPs can play an important role in maintaining domestic ownership and productive capacity across manufacturing and other strategic sectors—a win-win for U.S. economic security and for American workers across the country.
              </p>
              <h2 className="text-[12em] font-bold">
                Privately Held ESOP Companies in 2nd District
              </h2>
              <div className="bg-neutral-200 border-[2em] border-neutral-400 w-full h-[150em]" />
            </div>
          </div>
        </div>
        {/* Footer Stats */}
        <div className="flex">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 bg-navyish-200 p-[9em] pt-0 mt-[9em]">
              <div className="-mb-[18em] relative bottom-[18em] flex flex-col justify-between gap-y-[8em]">
                <div className="flex flex-col gap-y-[4em]">
                  <h1 className="text-[26em] font-black text-lafayette-950">$916</h1>
                  <p className="text-[9em] font-medium text-lafayette-950 leading-snug">
                    median rent<sup>16</sup>
                  </p>
                </div>
                <h3 className="text-[8em] font-black text-lafayette-950 uppercase tracking-wide">
                  Rank 72 out of 435
                </h3>
              </div>
            </div>
          ))}
          <div className="flex-1 bg-navyish-300 p-[9em] pt-0 mt-[9em]">
            <div className="-mb-[18em] relative bottom-[18em] flex flex-col justify-between gap-y-[6em]">
              <div className="bg-neutral-200 border-[2em] border-neutral-400 size-[40em]" />
              <h3 className="text-[8em] font-semibold text-lafayette-950">
                Learn more about affordable housing
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
