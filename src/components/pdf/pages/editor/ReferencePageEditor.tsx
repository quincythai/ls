import RichTextEditor from "@/components/ui/RichTextEditor";
import { ReferencePageContent } from "@/types/PageConfigs/ReferenceConfig";
import { TemplateColors } from "@/types/templateConfig";

interface ReferencePageEditorProps {
  content: ReferencePageContent;
  templateColors: TemplateColors;
  onChange: (newContent: ReferencePageContent) => void;
  isPreview?: boolean;
}

export const ReferencePageEditor = ({
  content,
  templateColors,
  onChange,
  isPreview = false,
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
                  <RichTextEditor
                    value={content.contactEmail}
                    onChange={(val: any) =>
                      onChange({ ...content, contactEmail: val })
                    }
                    className="text-[9em] font-medium text-lafayette-950 leading-snug"
                    readOnly={isPreview}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1/4 bg-cyanish-300 p-[9em] pt-0 mt-[9em]">
              <div className="-mb-[18em] relative bottom-[18em] flex flex-col justify-between gap-y-[6em]">
                {content.qrImageSrc && (
                  <img
                    src={content.qrImageSrc}
                    alt="QR Code"
                    className="bg-neutral-200 border-[2em] border-neutral-400 size-[40em]"
                  />
                )}
                <RichTextEditor
                  value={content.qrImageCaption}
                  onChange={(val: any) =>
                    onChange({ ...content, qrImageCaption: val })
                  }
                  className="text-[8em] font-semibold text-lafayette-950"
                  readOnly={isPreview}
                />
                <RichTextEditor
                  value={content.qrImageCTA}
                  onChange={(val: any) =>
                    onChange({ ...content, qrImageCTA: val })
                  }
                  className="text-[8em] font-semibold text-lafayette-950"
                  readOnly={isPreview}
                />
              </div>
            </div>
          </div>

          {/* References Section */}
          <div className="py-[7em] px-[11em]">
            <ol className="text-[7em] columns-2 gap-x-[4em] space-y-[0.5em] font-normal text-lafayette-950 list-decimal">
              {content.leftColumn.map((ref, idx) => (
                <li key={`left-${idx}`}>
                  <RichTextEditor
                    value={ref}
                    onChange={(val: any) => {
                      const newLeft = [...content.leftColumn];
                      newLeft[idx] = val;
                      onChange({ ...content, leftColumn: newLeft });
                    }}
                    className="font-normal text-lafayette-950"
                    readOnly={isPreview}
                  />
                </li>
              ))}
              {content.rightColumn.map((ref, idx) => (
                <li key={`right-${idx}`}>
                  <RichTextEditor
                    value={ref}
                    onChange={(val: any) => {
                      const newRight = [...content.rightColumn];
                      newRight[idx] = val;
                      onChange({ ...content, rightColumn: newRight });
                    }}
                    className="font-normal text-lafayette-950"
                    readOnly={isPreview}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center">
          <img
            src="/logo.svg"
            alt="Lafayette Square Institute Logo"
            className="h-[32em] my-[4em] mx-[6em]"
          />
        </div>
      </div>
    </>
  );
};
