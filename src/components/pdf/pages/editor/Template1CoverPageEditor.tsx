import { Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import RichTextEditor from "@/components/ui/RichTextEditor";
import { Template1CoverPageContent } from "@/types/PageConfigs/Template1Config";
import { Template1Colors } from "@/types/PageConfigs/Template1Config";

interface Template1CoverPageEditorProps {
  content: Template1CoverPageContent;
  templateColors: Template1Colors;
  onChange: (newContent: Template1CoverPageContent) => void;
}

export const Template1CoverPageEditor = ({
  content,
  templateColors,
  onChange,
}: Template1CoverPageEditorProps) => {
  return (
    <div className="bg-white aspect-[8.5/11] w-[986px] text-[2px] px-[27em] py-[24em] leading-tight flex flex-col justify-between">
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
            <RichTextEditor
              value={content.reportTitle}
              onChange={(val: any) =>
                onChange({ ...content, reportTitle: val })
              }
              className="text-[16em] font-black text-lafayette-950 tracking-wide"
            />
          </div>
          <img
            src="/logo.svg"
            alt="Lafayette Square Institute Logo"
            className="h-[38em] my-[4em] mx-[3em]"
          />
        </div>

        <hr className="bg-lafayette-200 border-none w-full h-[2em]" />

        {/* Mission Section */}
        <div className="w-full flex flex-col py-[7em] gap-y-[12em]">
          <RichTextEditor
            value={content.missionStatement}
            onChange={(val: any) =>
              onChange({ ...content, missionStatement: val })
            }
            className="text-[14em] font-bold text-lafayette-950"
          />
          <RichTextEditor
            value={content.missionSubtext}
            onChange={(val: any) =>
              onChange({ ...content, missionSubtext: val })
            }
            className="text-[10em] font-medium text-lafayette-950 leading-snug"
          />
        </div>

        {/* Stats Section */}
        <div className="relative w-full bg-lafayette-100 p-[9em] pt-0 mt-[9em]">
          <div className="flex flex-col gap-y-[16em] -mb-[18em] relative bottom-[18em]">
            <div className="flex gap-[14em] h-[98em]">
              {(
                [
                  "mobilityStat",
                  "expenseBurdenStat",
                  "rentBurdenStat",
                  "successionRiskStat",
                ] as const
              ).map((key) => {
                const stat = content[key];
                return (
                  <div
                    key={key}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div className="flex flex-col gap-y-[4em]">
                      <h1 className="text-[26em] font-black text-lafayette-950">
                        {stat.number}
                      </h1>
                      <RichTextEditor
                        value={stat.label}
                        onChange={(val) =>
                          onChange({
                            ...content,
                            [key]: {
                              ...stat,
                              label: val,
                            },
                          })
                        }
                        className="text-[9em] font-medium text-lafayette-950 leading-snug"
                      />
                    </div>
                    <h3 className="text-[8em] font-black text-lafayette-950 uppercase tracking-wide">
                      {stat.rank}
                    </h3>
                  </div>
                );
              })}
            </div>

            <RichTextEditor
              value={content.sectionIntroHeader}
              onChange={(val: any) =>
                onChange({ ...content, sectionIntroHeader: val })
              }
              className="text-[9em] font-medium text-lafayette-950 leading-snug"
            />
          </div>
        </div>

        <div className="py-[7em]">
          <RichTextEditor
            value={content.ctaText}
            onChange={(val: any) => onChange({ ...content, ctaText: val })}
            className="text-[14em] font-bold text-lafayette-950"
          />
        </div>

        {/* Features Section */}
        <RichTextEditor
          value={content.affordableHousingTitle}
          onChange={(val: any) =>
            onChange({ ...content, affordableHousingTitle: val })
          }
          className="text-[12em] font-bold text-lafayette-950 uppercase tracking-wide highlight-lafayette-100 self-start"
        />

        <div className="flex gap-[12em] items-stretch">
          <div className="flex-1 flex flex-col gap-[10em] px-[12em] py-[10em] bg-olive-200">
            <RichTextEditor
              value={content.affordableHousingText}
              onChange={(val: any) =>
                onChange({ ...content, affordableHousingText: val })
              }
              className="text-[9em] font-medium text-lafayette-950 leading-snug"
            />
          </div>
          <div className="flex-1 flex flex-col gap-[10em] px-[12em] py-[10em] bg-navyish-200">
            <RichTextEditor
              value={content.employeeOwnershipText}
              onChange={(val: any) =>
                onChange({ ...content, employeeOwnershipText: val })
              }
              className="text-[9em] font-medium text-lafayette-950 leading-snug"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <RichTextEditor
          value={content.bottomNote}
          onChange={(val: any) => onChange({ ...content, bottomNote: val })}
          className="text-[8em] font-bold text-lafayette-950"
        />
        <img src="/triangle.svg" alt="Triangle" className="h-[14em]" />
      </div>
    </div>
  );
};
