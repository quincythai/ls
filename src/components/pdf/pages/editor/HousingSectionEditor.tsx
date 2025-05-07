import RichTextEditor from "@/components/ui/RichTextEditor";
import { HousingSectionContent } from "@/types/PageConfigs/HousingConfig";
import { TemplateColors } from "@/types/templateConfig";

interface HousingSectionEditorProps {
  content: HousingSectionContent;
  templateColors: TemplateColors;
  onChange: (newContent: HousingSectionContent) => void;
  isPreview?: boolean;
}

export const HousingSectionEditor = ({
  content,
  templateColors,
  onChange,
  isPreview = false,
}: HousingSectionEditorProps) => {
  return (
    <div className="bg-white aspect-[8.5/11] w-[986px] text-[2px] px-[27em] py-[24em] leading-tight flex flex-col justify-between">
      <div className="flex flex-col gap-y-[12em]">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <h1 className="text-[16em] font-black tracking-wide text-lafayette-950">
            Affordable Housing & Homeownership
          </h1>
          <img
            src="/logo.svg"
            alt="Lafayette Square Institute Logo"
            className="h-[24em] my-[4em] mx-[6em]"
          />
        </div>

        {/* Intro Paragraph */}
        <RichTextEditor
          value={content.introParagraph}
          onChange={(val: any) => onChange({ ...content, introParagraph: val })}
          className="text-[10em] font-medium text-lafayette-950 leading-snug"
          readOnly={isPreview}
        />

        {/* Stat Group 1 */}
        <div className="w-full bg-olive-200 p-[9em] pt-0 mt-[9em]">
          <div className="flex flex-col gap-y-[16em] -mb-[18em] relative bottom-[18em]">
            <div className="flex gap-[14em]">
              {content.statGroup1.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col justify-between gap-y-[8em]"
                >
                  <div className="flex flex-col gap-y-[4em]">
                    <h1 className="text-[26em] font-black text-lafayette-950">
                      {stat.number}
                    </h1>
                    <RichTextEditor
                      value={stat.label}
                      onChange={(val: any) => {
                        const updatedStats = [...content.statGroup1];
                        updatedStats[idx] = { ...stat, label: val };
                        onChange({ ...content, statGroup1: updatedStats });
                      }}
                      className="text-[9em] font-medium text-lafayette-950 leading-snug"
                      readOnly={isPreview}
                    />
                  </div>
                  <h3 className="text-[8em] font-black text-lafayette-950 uppercase tracking-wide">
                    {stat.rank}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[12em]">
          <div className="flex-1">
            <RichTextEditor
              value={content.housingParagraph1}
              onChange={(val: any) =>
                onChange({ ...content, housingParagraph1: val })
              }
              className="text-[8em] font-medium"
              readOnly={isPreview}
            />
          </div>
          <div className="flex-1">
            <RichTextEditor
              value={content.housingParagraph2}
              onChange={(val: any) =>
                onChange({ ...content, housingParagraph2: val })
              }
              className="text-[8em] font-medium"
              readOnly={isPreview}
            />
          </div>
        </div>

        {/* Rent Burden Chart */}
        <div className="bg-neutral-100 p-[7em] space-y-[4em]">
          {content.rentBurdenChart && (
            <img
              src={content.rentBurdenChart}
              alt="Rent Burden Chart"
              className="w-full h-auto"
            />
          )}
        </div>
      </div>

      {/* Footer Section with Stat Group 2 */}
      <div className="flex">
        {content.statGroup2.map((stat, idx) => (
          <div key={idx} className="flex-1 bg-olive-200 p-[9em] pt-0 mt-[9em]">
            <div className="-mb-[18em] relative bottom-[18em] flex flex-col justify-between gap-y-[8em]">
              <div className="flex flex-col gap-y-[4em]">
                <h1 className="text-[26em] font-black text-lafayette-950">
                  {stat.number}
                </h1>
                <RichTextEditor
                  value={stat.label}
                  onChange={(val: any) => {
                    const updatedStats = [...content.statGroup2];
                    updatedStats[idx] = { ...stat, label: val };
                    onChange({ ...content, statGroup2: updatedStats });
                  }}
                  className="text-[9em] font-medium text-lafayette-950 leading-snug"
                  readOnly={isPreview}
                />
              </div>
              <h3 className="text-[8em] font-black text-lafayette-950 uppercase tracking-wide">
                {stat.rank}
              </h3>
            </div>
          </div>
        ))}

        {/* QR Section */}
        <div className="flex-1 bg-olive-300 p-[9em] pt-0 mt-[9em]">
          <div className="-mb-[18em] relative bottom-[18em] flex flex-col justify-between gap-y-[6em]">
            {content.qrImageSrc && (
              <img
                src={content.qrImageSrc}
                alt="QR Code"
                className="w-[40em] h-[40em] bg-neutral-200 border-[2em] border-neutral-400"
              />
            )}
            <RichTextEditor
              value={content.qrCaption}
              onChange={(val: any) => onChange({ ...content, qrCaption: val })}
              className="text-[8em] font-semibold text-lafayette-950"
              readOnly={isPreview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
