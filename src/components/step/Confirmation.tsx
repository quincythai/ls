import { Icon } from "@iconify/react";
import { Button } from "@mui/material";

export const Confirmation = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">
        Congratulations! Your new insights are ready.
      </h2>
      <div className="flex gap-4">
        <div className="w-full grow bg-white rounded-lg border-2 border-neutral-200 px-20 py-9 flex flex-col gap-5 items-center">
          <div className="aspect-[8.5/11] bg-white border-2 border-neutral-200 w-xl px-8 py-10 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident dolorum esse autem, numquam saepe quod nihil dignissimos perferendis omnis labore modi, dolore molestias. Officia harum, iusto sapiente sequi similique totam?
          </div>
        </div>
        <div className="max-w-xs shrink-0 flex flex-col items-stretch w-full gap-2">
          <Button variant="outlined">
            <Icon icon="material-symbols:download" className="size-5" />
            Download
          </Button>
          <Button variant="outlined">
            <Icon icon="mdi:reload" className="size-5" />
            Regenerate
          </Button>
        </div>
      </div>
    </>
  );
};
