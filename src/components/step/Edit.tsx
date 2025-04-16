import { Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

export const Edit = (props: {
  preview: React.ReactNode;
  refreshPreview: () => void;
  editor: React.ReactNode;
}) => {
  return (
    <>
      <header>
        <Typography variant="h1" >
          Edit
        </Typography>
      </header>
      <div className="flex gap-4">
        {/* Left: PDF Preview */}
        <div className="w-full grow bg-white rounded-lg border-2 border-neutral-200 px-20 py-9 flex flex-col gap-5 items-center">
          <h2 className="text-lg font-bold">Preview</h2>
          {props.preview}
          <Button variant="outlined" className="mt-2" onClick={props.refreshPreview} endIcon={<Icon icon="mdi:refresh" className="size-5" />}>
            Refresh Preview
          </Button>
        </div>

        {/* Right: Editor */}
        <div className="max-w-xs shrink-0 flex flex-col items-stretch w-full gap-4 overflow-y-auto max-h-[80vh] pr-2">
          {props.editor}
        </div>
      </div>
    </>
  );
};
