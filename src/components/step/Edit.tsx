import { Button, Typography } from "@mui/material";
import PDFPreview from "../pdf/PDFPreview";
import { Icon } from "@iconify/react";

export const Edit = () => {
  return (
    <>
      <header>
        <Typography variant="h1" >
          Edit
        </Typography>
      </header>
      <div className="flex gap-4">
        <div className="w-full grow bg-white rounded-lg border-2 border-neutral-200 px-20 py-9 flex flex-col gap-5 items-center">
          <h2 className="text-lg font-bold">
            Preview
          </h2>
          <PDFPreview />
        </div>
        <div className="max-w-xs shrink-0 flex flex-col items-stretch w-full gap-2">
          <Button variant="outlined" endIcon={<Icon icon="mdi:pencil-outline" className="size-5" />}>
            Edit Text
          </Button>
        </div>
      </div>
    </>
  );
};
