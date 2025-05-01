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
          <div className="w-full flex justify-between items-center">
            <h1 className="text-[16em] font-black tracking-wide text-lafayette-950">
              Affordable Housing & Homeownership
            </h1>
            <img src="/logo.svg" alt="Lafayette Square Institute Logo" className="h-[24em] my-[4em] mx-[3em]" />
          </div>
          {/* Description */}
          <p className="text-[10em] font-medium text-lafayette-950 leading-snug">
            The <strong>Alabama 2nd District</strong> is facing housing supply and affordability challenges. This is contributing to unsustainable financial burdens for families and creates barriers to economic opportunity.
          </p>
          {/* Stats Section */}
          <div className="relative w-full bg-olive-200 p-[9em] pt-0 mt-[9em]">
            <div className="flex flex-col gap-y-[16em] -mb-[18em] relative bottom-[18em]">
              {/* Stats */}
              <div className="flex gap-[14em]">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-1 flex flex-col justify-between gap-y-[8em]">
                    <div className="flex flex-col gap-y-[4em]">
                      <h1 className="text-[26em] font-black text-lafayette-950">38x</h1>
                      <p className="text-[9em] font-medium text-lafayette-950 leading-snug">
                        is what a typical family owning a home has in net worth compared to a family renting &sup1;
                      </p>
                    </div>
                    <h3 className="text-[8em] font-black text-lafayette-950 uppercase tracking-wide">
                      Rank 292 out of 435
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Paragraph Content Section */}
          <div className="py-[7em] columns-2 gap-[12em] space-y-[0.75em]">
            <p className="text-[8em] font-medium">
              <strong>The United States is 4 million homes short of meeting national demand, a shortfall that has almost doubled over the past decade.<sup>10</sup></strong> <strong>Alabama</strong> has a short fall of 16,744 units.<sup>11</sup> This undersupply contributes to rising housing costs which force working-class families to spend an unsustainable portion of their income on rent and pushes many households into neighborhoods with high poverty rates.<sup>12</sup> Research demonstrates that living in areas of concentrated poverty makes it harder for kids to rise up the income ladder.<sup>13</sup> Housing cost-burdens are also rising for middle- and higher-income families, while rising housing costs have led to the American Dream of homeownership becoming increasingly unattainable—narrowing pathways for families to build wealth.<sup>14</sup>
            </p>
            <p className="text-[8em] font-medium">
              <strong>Of the over $200 billion that has been invested annually in housing in recent years, only a fraction supports projects affordable for working-class families.<sup>15</sup></strong> Innovative models capable of significantly boosting the supply of affordable housing exists but struggle to attract capital to scale. New policies, programs and financing tools are needed that redirect private capital into projects that promote financial stability and homeownership, and help build strong, resilient communities.
            </p>
          </div>
          {/* Charts Section */}
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
