import { Carousel } from "@/components/ui/Carousel";
import { ColorPicker } from "@/components/ui/ColorPicker";
import { Typography } from "@mui/material";
import { Template1Colors } from "@/types/pageConfigs";
import { ChartSection } from "@/components/ui/ChartSection";
import { generateRentBurdenData } from "@/lib/utils";

type Template = {
  title: string;
  component: React.ReactNode;
};

interface ChooseTemplateProps {
  templates: Template[];
  templateColors: Template1Colors;
  onColorsChange: (updatedColors: Record<string, string>) => void;
}

export const ChooseTemplate = ({ templates, templateColors, onColorsChange }: ChooseTemplateProps) => {
  // Example: Can put this wherever you want to display the chart and mod values
  const customRentData = generateRentBurdenData(
    { burdened: 72, severelyBurdened: 49 },
    { burdened: 43, severelyBurdened: 5 },
    { burdened: 9, severelyBurdened: 0 },
    { burdened: 2, severelyBurdened: 1 },
  );

  return (
    <>
      <header>
        <Typography variant="h1" className="font-bold">
          Choose Template
        </Typography>
      </header>
      {/* yucian: added color picker to right panel */}
      <div className="flex flex-row gap-4"> 
        <div className="w-3/5 grow bg-white rounded-lg border-2 border-neutral-200 px-20 py-9 flex flex-col gap-5 items-center">
          <Carousel templates={templates} />

          {/* <Carousel className="w-xl mx-auto">
            <CarouselContent>
              <CarouselItem className="flex flex-col gap-4">
                <p>Template 1</p>
                <div className="aspect-[8.5/11] bg-white border-2 border-neutral-200 w-xl">
                  <PDFPreview />
                </div>
              </CarouselItem>
              <CarouselItem className="flex flex-col gap-4">
                <p>Template 2</p>
                <div className="aspect-[8.5/11] bg-white border-2 border-neutral-200 w-xl" />
              </CarouselItem>
              <CarouselItem className="flex flex-col gap-4">
                <p>Template 3</p>
                <div className="aspect-[8.5/11] bg-white border-2 border-neutral-200 w-xl" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}
        </div>
        <div className="max-w-xs grow bg-white rounded-lg border-2 border-neutral-200 px-8 py-9 flex flex-col items-stretch w-2/5 gap-4 overflow-y-auto">
          <ColorPicker currentColors={templateColors.selectedColors} onColorsChange={onColorsChange}/>
        </div>
      </div>
      <ChartSection rentData={customRentData} />
    </>
  );
};
