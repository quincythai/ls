import { RentBurdenData } from "@/utils/sharedUtils";
import { RentBurdenChart } from "./RentBurdenChart";

interface ChartSectionProps {
  rentData: RentBurdenData[];
  onChartImageGenerated?: (image: string) => void;
}

export const ChartSection = ({ rentData, onChartImageGenerated }: ChartSectionProps) => {
  return (
    <div>
      <RentBurdenChart 
        data={rentData} 
        showImageOnly={false} 
        onChartImageGenerated={onChartImageGenerated}
      />
    </div>
  );
};
