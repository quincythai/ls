import { Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { PageEditors } from "../pdf/PageEditors";
import { PageContent } from "@/types/templateConfig";
import { TemplateColors } from "@/types/templateConfig";

interface EditProps {
  pages: PageContent[];
  templateColors: TemplateColors;
  onUpdateContent: (pageIndex: number, newContent: any) => void;
}

export const Edit = ({ pages, templateColors, onUpdateContent }: EditProps) => {
  return (
    <>
      <header>
        <Typography variant="h1">Edit</Typography>
      </header>
      <div className="flex gap-4 max-h-[70vh]">
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
