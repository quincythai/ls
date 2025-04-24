import { RentBurdenChart } from "@/components/ui/RentBurdenChart";
import { type RentBurdenData } from "@/lib/utils";

interface ChartSectionProps {
  rentData?: RentBurdenData[];
}

export const ChartSection = ({ rentData }: ChartSectionProps) => {
  return (
    <div className="mt-8 pt-8 border-t-2 border-neutral-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Rent Burden by Income Level</h2>
        <div className="border border-red-600 p-0">
          <RentBurdenChart data={rentData} />
        </div>
      </div>
    </div>
  );
};