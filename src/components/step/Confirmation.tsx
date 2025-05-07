import { Icon } from "@iconify/react";
import { Button, Typography } from "@mui/material";
import PDFPreview from "@/components/pdf/PDFPreview";  // make sure you import it
import { ReportBuilderState } from "@/types/templateConfig";
import { TemplateColors } from "@/types/templateConfig";

interface ConfirmationProps {
  reportState: ReportBuilderState;
  templateColors: TemplateColors;
}

export const Confirmation = ({ reportState, templateColors }: ConfirmationProps) => {
  return (
    <>
      <header>
        <Typography variant="h1">
          Congratulations! Your new insights are ready.
        </Typography>
      </header>

      <div className="flex gap-4">
        {/* PDF Preview */}
        <div className="w-full grow bg-white rounded-lg border-2 border-neutral-200 px-20 py-9 flex flex-col gap-5 items-center">
          <div className="aspect-[8.5/11] bg-white border-2 border-neutral-200 w-xl px-8 py-10 text-sm">
            <PDFPreview pages={reportState.pages} templateColors={templateColors} />
          </div>
        </div>

        {/* Sidebar Buttons */}
        <div className="max-w-xs shrink-0 flex flex-col items-stretch w-full gap-2">
          <Button variant="outlined" endIcon={<Icon icon="material-symbols:download" className="size-5" />}>
            Download
          </Button>
          <Button variant="outlined" endIcon={<Icon icon="mdi:reload" className="size-5" />}>
            Regenerate
          </Button>
        </div>
      </div>
    </>
  );
};
