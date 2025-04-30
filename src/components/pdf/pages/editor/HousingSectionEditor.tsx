import { Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import RichTextEditor from "../ui/RichTextEditor";
import { HousingSectionContent } from "@/types/PageConfigs/HousingConfig";
import { TemplateColors } from "@/types/templateConfig";

interface HousingSectionEditorProps {
    content: HousingSectionContent; 
    templateColors: TemplateColors;   
    onChange: (newContent: HousingSectionContent) => void; 
  }

  export const HousingSectionEditor = ({
    content,
    templateColors,
    onChange,
  }: HousingSectionEditorProps) => {
  return (
    <>
      <div className="bg-white aspect-[8.5/11] w-[986px] text-[2px] px-[27em] py-[24em] leading-tight flex flex-col justify-between">
        {/* Main Content */}
        <div className="flex flex-col gap-y-[12em]">
          {/* Header */}
          <div className="w-full flex justify-between items-end">
            <div className="space-y-[9em]">
              <div className="h-[40em] flex">
                <div className="bg-lafayette-950 h-full px-[8em]">
                  <h1 className="text-[30em] font-black text-white tracking-wide">
                    535 Insights
                  </h1>
                </div>
                <img src="/triangle.svg" alt="Triangle" className="h-full" />
              </div>
              <h1 className="text-[16em] font-black tracking-wide text-lafayette-950">
                Alabama 2nd District
              </h1>
            </div>
            <img src="/logo.svg" alt="Lafayette Square Institute Logo" className="h-[38em] my-[4em] mx-[3em]" />
          </div>
          <hr className="bg-lafayette-200 border-none w-full h-[2em]" />
          {/* Mission Section */}
          <div className="w-full flex flex-col py-[7em] gap-y-[12em]">
            <h2 className="text-[14em] font-bold text-lafayette-950">
              Our mission is to bridge the gap between policymakers and investors to create economic security for workers and families.
            </h2>
            <p className="text-[10em] font-medium text-lafayette-950 leading-snug">
              <strong className="highlight-lafayette-100">We equip policymakers with data-driven insights to mobilize <span className="font-black">private capital</span> to generate prosperity across the country.</strong> Our <strong className="highlight-lafayette-100">535 Insights</strong> series provides analytics specific to the constituencies of all 535 members of Congress.
            </p>
          </div>
          {/* Stats Section */}
          <div className="relative w-full bg-lafayette-100 p-[9em] pt-0 mt-[9em]">
            <div className="flex flex-col gap-y-[16em] -mb-[18em] relative bottom-[18em]">
              {/* Stats */}
              <div className="flex gap-[14em] h-[98em]">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-col gap-y-[4em]">
                      <h1 className="text-[26em] font-black text-lafayette-950">7%</h1>
                      <p className="text-[9em] font-medium text-lafayette-950 leading-snug">
                        chance to become high-income with low-income parents&sup1;
                      </p>
                    </div>
                    <h3 className="text-[8em] font-black text-lafayette-950 uppercase tracking-wide">
                      Rank 398 out of 435
                    </h3>
                  </div>
                ))}
              </div>
              <p className="text-[9em] font-medium text-lafayette-950 leading-snug">
                <strong>The opportunity to build wealth and economic security is the foundation of the American Dream. This is how <span className="font-black highlight-white">the Alabama 2nd District</span> is performing</strong> (ranked by desirability).
              </p>
            </div>
          </div>
          <div className="py-[7em]">
            <h2 className="text-[14em] font-bold text-lafayette-950">
              To revive the American Dream, <span className="font-black">the 2nd District</span> needs a strategy to promote economic opportunity.
            </h2>
          </div>
          {/* Features Section */}
          <h2 className="text-[12em] font-bold text-lafayette-950 uppercase tracking-wide highlight-lafayette-100 self-start">
            Here's Where We're Starting:
          </h2>
          <div className="flex gap-[12em] items-stretch">
            <div className="flex-1 flex flex-col gap-[10em] px-[12em] py-[10em] bg-olive-200">
              <h1 className="text-[13em] font-black text-lafayette-950">
                Affordable Housing
              </h1>
              <p className="text-[9em] font-medium text-lafayette-950 leading-snug">
                By making it easier to finance <strong>affordable housing</strong> and the expansion of <strong>home ownership</strong> we can help build strong communities where families will thrive.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-[10em] px-[12em] py-[10em] bg-navyish-200">
              <h1 className="text-[13em] font-black text-lafayette-950">
                Employee Ownership
              </h1>
              <p className="text-[9em] font-medium text-lafayette-950 leading-snug">
              By expanding <strong>employee ownership</strong> through <strong>Employee Stock Ownership Plans (ESOPs)</strong>, we can create generational wealth for American workers while enhancing U.S. competitiveness.
              </p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-between items-center">
          <p className="text-[8em] font-bold text-lafayette-950">
            Turn the page to see how <span className="font-black highlight-lafayette-100">the 2nd District</span> is doing on affordable housing and employee ownership.
          </p>
          <img src="/triangle.svg" alt="Triangle" className="h-[14em]" />
        </div>
      </div>
    </>
  );
};
