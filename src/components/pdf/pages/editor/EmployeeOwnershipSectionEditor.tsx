import RichTextEditor from "@/components/ui/RichTextEditor";
import { EmployeeOwnershipSectionContent } from "@/types/PageConfigs/EmployeeOwnershipConfig";
import { TemplateColors } from "@/types/templateConfig";

interface EmployeeOwnershipSectionEditorProps {
  content: EmployeeOwnershipSectionContent;
  templateColors: TemplateColors;
  onChange: (newContent: EmployeeOwnershipSectionContent) => void;
  isPreview?: boolean;
}

export const EmployeeOwnershipSectionEditor = ({
  content,
  templateColors,
  onChange,
  isPreview = false,
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
          <RichTextEditor
            value={content.introParagraph}
            onChange={(val: any) => onChange({ ...content, introParagraph: val })}
            className="text-[10em] font-medium text-lafayette-950 leading-snug"
            readOnly={isPreview}
          />

          {/* Stats Section */}
          <div className="w-full bg-navyish-200 p-[9em] pt-0 mt-[9em]">
            <div className="flex flex-col gap-y-[16em] -mb-[18em] relative bottom-[18em]">
              <div className="flex gap-[14em]">
                {content.statGroup1.map((stat, idx) => (
                  <div key={idx} className="flex-1 flex flex-col justify-between gap-y-[8em]">
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

          {/* Paragraph Content Section */}
          <div className="py-[7em] space-y-[12em]">
            <div>
              <RichTextEditor
                value={content.esopParagraph1}
                onChange={(val: any) => onChange({ ...content, esopParagraph1: val })}
                className="text-[8em] font-medium"
                readOnly={isPreview}
              />
            </div>
            <div className="columns-2 gap-[12em] space-y-[0.75em]">
              <RichTextEditor
                value={content.esopParagraph2}
                onChange={(val: any) => onChange({ ...content, esopParagraph2: val })}
                className="text-[8em] font-medium"
                readOnly={isPreview}
              />
              <RichTextEditor
                value={content.esopParagraph3}
                onChange={(val: any) => onChange({ ...content, esopParagraph3: val })}
                className="text-[8em] font-medium"
                readOnly={isPreview}
              />
              <RichTextEditor
                value={content.esopMapTitle}
                onChange={(val: any) => onChange({ ...content, esopMapTitle: val })}
                className="text-[12em] font-bold"
                readOnly={isPreview}
              />
              <div className="w-full h-[150em]">
                {content.esopMapImage && (
                  <img
                    src={content.esopMapImage}
                    alt="ESOP Map"
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="flex">
          {content.statGroup2.map((stat, idx) => (
            <div key={idx} className="flex-1 bg-navyish-200 p-[9em] pt-0 mt-[9em]">
              <div className="-mb-[18em] relative bottom-[18em] flex flex-col justify-between gap-y-[8em]">
                <div className="flex flex-col gap-y-[4em]">
                  <h1 className="text-[26em] font-black text-lafayette-950">{stat.number}</h1>
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
          <div className="flex-1 bg-navyish-300 p-[9em] pt-0 mt-[9em]">
            <div className="-mb-[18em] relative bottom-[18em] flex flex-col justify-between gap-y-[6em]">
              <div className="bg-neutral-200 border-[2em] border-neutral-400 size-[40em]">
                {content.qrImageSrc && (
                  <img
                    src={content.qrImageSrc}
                    alt="QR Code"
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
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
    </>
  );
};
