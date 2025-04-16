import { Icon } from "@iconify/react";

export const AddSections = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">
        Add Sections
      </h2>
      <div className="bg-white rounded-lg border-2 border-neutral-200 px-20 py-9 flex flex-col gap-5">
        <button className="flex items-center gap-2 border-2 border-neutral-200 px-4 py-5 justify-center font-bold hover:bg-muted cursor-pointer">
          <Icon icon="iconoir:plus" className="size-6" />
          Affordable Housing
        </button>
        <button className="flex items-center gap-2 border-2 border-neutral-200 px-4 py-5 justify-center font-bold hover:bg-muted cursor-pointer">
          <Icon icon="iconoir:plus" className="size-6" />
          Employee Ownership
        </button>
        <button className="flex items-center gap-2 border-2 border-neutral-200 px-4 py-5 justify-center font-bold hover:bg-muted cursor-pointer">
          <Icon icon="iconoir:plus" className="size-6" />
          Employee Ownership
        </button>
        <button className="flex items-center gap-2 border-2 border-neutral-200 px-4 py-5 justify-center font-bold hover:bg-muted cursor-pointer">
          <Icon icon="iconoir:plus" className="size-6" />
          Employee Ownership
        </button>
      </div>
    </>
  );
};
