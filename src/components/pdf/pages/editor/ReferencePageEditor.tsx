import { Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import RichTextEditor from "../ui/RichTextEditor";
import { ReferencePageContent } from "@/types/PageConfigs/ReferenceConfig";
import { TemplateColors } from "@/types/templateConfig";

interface ReferencePageEditorProps {
    content: ReferencePageContent; 
    templateColors: TemplateColors;   
    onChange: (newContent: ReferencePageContent) => void; 
  }

  export const ReferencePageEditor = ({
    content,
    templateColors,
    onChange,
  }: ReferencePageEditorProps) => {
  return (
    <>
      <div className="bg-white aspect-[8.5/11] w-[986px] text-[2px] px-[27em] py-[24em] leading-tight flex flex-col justify-between">
        {/* Main Content */}
        <div className="flex flex-col gap-y-[12em]">
          {/* Header */}
          <div className="flex">
            <div className="flex-3/4 bg-cyanish-200 p-[9em] pt-0 mt-[9em]">
              <div className="-mb-[18em] relative bottom-[18em] flex flex-col justify-between gap-y-[8em]">
                <div className="flex flex-col gap-y-[8em]">
                  <h1 className="text-[36em] font-black text-lafayette-950">
                    Let&rsquo;s talk
                  </h1>
                  <p className="text-[9em] font-medium text-lafayette-950 leading-snug">
                    Connect with us at <strong>535@lafayettesquareinstitute.org</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1/4 bg-cyanish-300 p-[9em] pt-0 mt-[9em]">
              <div className="-mb-[18em] relative bottom-[18em] flex flex-col justify-between gap-y-[6em]">
                <div className="bg-neutral-200 border-[2em] border-neutral-400 size-[40em]" />
                <h3 className="text-[8em] font-semibold text-lafayette-950">
                  Want to learn more? Visit our website!
                </h3>
              </div>
            </div>
          </div>
          {/* Paragraph Content Section */}
          <div className="py-[7em] px-[11em]">
            <ol className="text-[7em] columns-2 gap-x-[4em] space-y-[0.5em] font-normal text-lafayette-950 list-decimal">
              <li>
                Chetty, R. et al. Opportunity Insights, Harvard University, 2018, <span className="italic underline">The Opportunity Atlas: Mapping the Childhood Roots of Social Mobility: All Outcomes by Census Tract, Race, Gender and Parental Income Percentile:</span> Averaged chance of children born 1978-1983 in the 1st and 25th income percentile to reach the 80th or higher income percentile as adults 2014-2015.
              </li>
              <li>
                U.S. Census Bureau, 2024, Household Pulse Survey, Phase 4.2, Cycle 09: Percentage of adults in households where it has been somewhat or very difficult to pay for usual household expenses in the last 7 days.
              </li>
              <li>
                Potomac X Lafayette Square; U.S. Census Bureau, 2022, American Community Survey (ACS), 5-Year Estimates: Household Income by Gross Rent as a Percentage of Household Income in the Past 12 Months: 30% or more.
              </li>
              <li>
                LSI based on Project Equity, 2023, Silver Tsunami; U.S. Census Bureau, 2021, Annual Business Survey: Characteristics of Business Owners (Employer Businesses) and U.S. Census Bureau, 2021, Statistics of U.S. Businesses Annual Data Tables by Establishment Industry: State by congressional district, NAICS sectors.
              </li>
              <li>
                Federal Reserve Board, 2023, 2022 Survey of Consumer Finances: Median Net Worth by Family Characteristics.
              </li>
              <li>
                See (3).
              </li>
              <li>
                U.S. Census Bureau, 2024, Household Pulse Survey, Phase 4.2, Cycle 09: Percentage of adults in households not current on rent or mortgage where eviction or foreclosure in the next two months is either very likely or somewhat likely.
              </li>
              <li>
                LSI with Potomac X Lafayette Square; U.S. Census Bureau, 2022, ACS, 5-Year Estimates: Age and Sex and Poverty Status.
              </li>
              <li>
                LSI with Potomac X Lafayette Square; U.S. Department of Housing & Urban Development, 2024, Comprehensive Housing Affordability Strategy 2021 5-Year Estimates. Income Groups: Low = &lt;50% of area median income (AMI), Moderate = 50-80% AMI, Middle = 80-120% AMI, Upper = &gt;120% of AMI. National Averages for comparison: Burdened (76%, 45%, 16%, 3%), Severely Burdened (50%, 7%, 1%, 0%).
              </li>
              <li>
                Up for Growth, 2023, 2023 Housing Underproduction in the United States.
              </li>
              <li>
                Up for Growth, 2023, 2021 Housing Underproduction by State.
              </li>
              <li>
                Benzow, A. and Fikri, K. Economic Innovation Group, 2020, The Expanded Geography of High-Poverty Neighborhoods.
              </li>
              <li>
                Chetty, R. et al. Opportunity Insights, Harvard University, 2022, Social Capital and Economic Mobility.
              </li>
              <li>
                Anderson, D. Redfin, 2024, Nearly 40% of Renters Think They’ll Never Own a Home, Up From 27% Last Year.
              </li>
              <li>
                CBRE, 2022, U.S. Real Estate Market Outlook 2022: Multifamily.
              </li>
              <li>
                Potomac X Lafayette Square; U.S. Census Bureau, 2022, ACS, 5-Year Estimates: Selected Housing Characteristics.
              </li>
              <li>
                Ibid.
              </li>
              <li>
                Potomac X Lafayette Square; U.S. Census Bureau, 2022, ACS, 5-Year Estimates: Household and Families.
              </li>
              <li>
                See (4).
              </li>
              <li>
                See (4) for owner ages per industry. LSI; identifying critical industries using the U.S. Department of Commerce, 2024, Critical Sectors and Key Goods for Potential Cooperation under the IPEF Supply Chain Agreement and the Department of Defense, 2024, National Critical and Emerging Technologies.
              </li>
              <li>
                U.S. Census Bureau, 2021, Survey of Income and Program Participation.
              </li>
              <li>
                Federal Reserve Board, 2023, 2022 Survey of Consumer Finances: Mean retirement savings among those with an individual retirement account or a defined contribution plan, 0-49.9 percentile of usual income, 2016–22 surveys.
              </li>
              <li>
                National Center for Employee Ownership, 2018, Research on Employee Ownership, Corporate Performance, and Employee Compensation; Kruse, D. IZA World of Labor, 2016, Does Employee Ownership Improve Performance? And Employee Ownership Foundation, Rutgers School of Management and Labor Relations, 2020, Employee-Owned Firms in the COVID-19 Pandemic: How Majority-Owned ESOP & Other Companies Have Responded to the COVID-19 Health and Economic Crises.
              </li>
              <li>
                Ibid.
              </li>
              <li>
                LSI; National Center of Employee Ownership, 2024,ESOP Database 2022. Note: Some public companies feature low percentages of ESOP ownership. We present privately held company data only given our focus on business succession risk.
              </li>
              <li>
                Ibid. For privately held ESOP companies. 27. Ibid. For privately held ESOP companies.
              </li>
            </ol>
          </div>
        </div>
        {/* Footer Stats */}
        <div className="flex justify-center">
          <img src="/logo.svg" alt="Lafayette Square Institute Logo" className="h-[32em] my-[4em] mx-[6em]" />
        </div>
      </div>
    </>
  );
};
