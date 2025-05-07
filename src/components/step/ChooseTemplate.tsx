import { Carousel } from "@/components/ui/Carousel";
import { useEffect, useState } from "react";

import { ColorPicker } from "@/components/ui/ColorPicker";
import { Typography } from "@mui/material";
import { TemplateColors } from "@/types/templateConfig";
import { generateRentBurdenData } from "@/utils/sharedUtils";
import { generateRentBurdenChartImage } from "@/utils/renderBarChart";

type Template = {
  id: number;
  title: string;
  component: React.ReactNode;
};

interface ChooseTemplateProps {
  templates: Template[];
  templateColors: TemplateColors;
  onColorsChange: (updatedColors: Record<string, string>) => void;
  onSelect: (id: number) => void;
}

export const ChooseTemplate = ({
  templates,
  templateColors,
  onColorsChange,
  onSelect,
}: ChooseTemplateProps) => {
  const customRentData = generateRentBurdenData(
    { burdened: 72, severelyBurdened: 49 },
    { burdened: 43, severelyBurdened: 5 },
    { burdened: 9, severelyBurdened: 0 },
    { burdened: 2, severelyBurdened: 1 },
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [chartBase64, setChartBase64] = useState<string | null>(null);

  const handleIndexChange = (newIndex: number) => {
    setActiveIndex(newIndex);
    const selected = templates[newIndex];
    if (selected) {
      onSelect(selected.id);
    }
  };

  // // 👇 Run only once on mount or whenever rent data changes
  // useEffect(() => {
  //   generateRentBurdenChartImage(customRentData).then(setChartBase64);
  // }, [customRentData]);

  return (
    <>
      <header>
        <Typography variant="h1" className="font-bold">
          Choose Template
        </Typography>
      </header>

      <div className="flex flex-row gap-4"> 
        <div className="w-3/5 grow bg-gray-50 rounded-lg border-2 border-neutral-200 px-20 py-9 flex flex-col gap-5 items-center">
          <Carousel
            templates={templates}
            activeIndex={activeIndex}
            onIndexChange={handleIndexChange}
          />
        </div>

        <div className="max-w-xs grow bg-gray-50 rounded-lg border-2 border-neutral-200 px-8 py-9 flex flex-col items-stretch w-2/5 gap-4 overflow-y-auto">
          <ColorPicker
            currentColors={templateColors.selectedColors}
            onColorsChange={onColorsChange}
          />
        </div>
      </div>

      {/* {chartBase64 && (
        <div className="mt-6 flex flex-col items-start gap-4">
          <img src={chartBase64} alt="Rent Burden Chart" className="w-full max-w-xl" />

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => {
              const link = document.createElement("a");
              link.href = chartBase64;
              link.download = "rent_burden_chart.png";
              link.click();
            }}
          >
            Download Chart Image
          </button>
        </div>
      )} */}
    </>
  );
};
