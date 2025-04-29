import { Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { PageEditors } from "../pdf/PageEditors";
import { PageContent } from "@/types/templateConfig";
import { Template1Colors } from "@/types/PageConfigs/Template1Config";

interface EditProps {
  pages: PageContent[];
  templateColors: Template1Colors;
  onUpdateContent: (pageIndex: number, newContent: any) => void;
}

export const Edit = ({
  pages,
  templateColors,
  onUpdateContent,
}: EditProps) => {
  return (
    <>
      <header>
        <Typography variant="h1">Edit</Typography>
      </header>
      <div className="flex gap-4 max-h-[70vh]">
        {/* Left: PDF Preview
        <div className="w-3/5 grow bg-white rounded-lg border-2 border-neutral-400 px-20 py-9 flex flex-col gap-5 items-center overflow-y-auto">
          <div className="flex flex-row w-full items-center gap-4">
            <Typography variant="h2" className="font-bold">
              Preview
            </Typography>
            <Button variant="outlined" className="mt-2" onClick={props.refreshPreview} endIcon={<Icon icon="mdi:refresh" className="size-5" />}>
              Refresh
            </Button>
          </div>
          {props.preview}
        </div>

        Right: Editor
        <div className="w-2/5 grow flex flex-col scroll-smooth items-stretch gap-4 overflow-y-auto pr-2">
          {props.editor}
        </div> */}
        <div className="">
          <PageEditors
            pages={pages}
            templateColors={templateColors}
            onUpdateContent={onUpdateContent}
          />
        </div>
      </div>
    </>
  );
};
