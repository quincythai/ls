import { Icon } from "@iconify/react";
import { Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

const sectionsToAdd = [
  "Affordable Housing",
  "Employee Ownership",
  "Education",
  "Environment",
];

export const AddSections = () => {
  const [sections, setSections] = useState<string[]>([]);

  function handleChange(_event: React.MouseEvent<HTMLElement>, value: string[]) {
    if (value.length > 3) {
      value.shift();
    }
    setSections(value);
  }

  return (
    <>
      <header className="flex items-center justify-between">
        <Typography variant="h1" className="font-bold">
          Add Sections
        </Typography>
        <div className="flex items-center gap-2 text-neutral-500">
          <Icon icon="mdi:information-outline" className="size-6" />
          <Typography variant="body2">
            Select up to 3
          </Typography>
        </div>
      </header>
      <div className="bg-white rounded-lg border-2 border-neutral-200 px-20 py-9 flex flex-col gap-5">
        {/* <button className="flex items-center gap-2 border-2 border-neutral-200 px-4 py-5 justify-center font-bold hover:bg-muted cursor-pointer">
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
        </button> */}
        <ToggleButtonGroup
          value={sections}
          onChange={handleChange}
          aria-label="sections"
          className="w-full"
        >
          {sectionsToAdd.map((section) => (
            <ToggleButton value={section} className="space-x-2 group">
              <Icon icon="iconoir:minus" className="size-6 group-[.Mui-selected]:block hidden" />
              <Icon icon="iconoir:plus" className="size-6 group-[.Mui-selected]:hidden" />
              <span>
                {section}
              </span>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    </>
  );
};
