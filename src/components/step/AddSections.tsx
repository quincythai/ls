import { Icon } from "@iconify/react";
import { Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ReportBuilderState, PageContent, PageType, templates, pageRegistry, pageTypeToLabel, sectionLabelToPageType } from "@/types/templateConfig";

interface AddSectionsProps {
  reportState: ReportBuilderState;
  setReportState: React.Dispatch<React.SetStateAction<ReportBuilderState>>;
}

// Helper to create a PageContent object
function createPage<K extends PageType>(type: K): Extract<PageContent, { type: K }> {
  return {
    type,
    content: pageRegistry[type].defaultContent,
  } as Extract<PageContent, { type: K }>;
}

export const AddSections = ({ reportState, setReportState }: AddSectionsProps) => {
  const template = templates.find(t => t.id === reportState.templateId);
  if (!template) return null;

  const allowedSections = template.allowedSections;
  const maxSections = template.maxSections;

  const selectedLabels = reportState.selectedSections.map(pt => pageTypeToLabel[pt]);

  const handleChange = (_event: React.MouseEvent<HTMLElement>, newLabels: string[]) => {
    const newPageTypes = newLabels.map(label => sectionLabelToPageType[label]);

    if (newPageTypes.length > maxSections) return;

    const newPages: PageContent[] = [
      reportState.pages[0], // cover
      ...newPageTypes.map(type => createPage(type)),
      reportState.pages.at(-1)!, // reference
    ];

    setReportState({
      ...reportState,
      selectedSections: newPageTypes,
      pages: newPages,
    });
  };

  return (
    <>
      <header className="flex items-center justify-between">
        <Typography variant="h1" className="font-bold">
          Add Sections
        </Typography>
        <div className="flex items-center gap-2 text-neutral-500">
          <Icon icon="mdi:information-outline" className="size-6" />
          <Typography variant="body2">
            Select up to {maxSections}
          </Typography>
        </div>
      </header>

      <div className="bg-white rounded-lg border-2 border-neutral-200 px-20 py-9 flex flex-col gap-5">
        <ToggleButtonGroup
          value={selectedLabels}
          onChange={handleChange}
          aria-label="sections"
          className="w-full"
        >
          {allowedSections.map((pageType) => {
            const label = pageTypeToLabel[pageType];
            return (
              <ToggleButton key={pageType} value={label} className="space-x-2 group">
                <Icon icon="iconoir:minus" className="size-6 group-[.Mui-selected]:block hidden" />
                <Icon icon="iconoir:plus" className="size-6 group-[.Mui-selected]:hidden" />
                <span>{label}</span>
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </div>
    </>
  );
};
