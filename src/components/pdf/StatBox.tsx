import { View, Text } from "@react-pdf/renderer";
import { tw } from "../../lib/pdf-theme";

interface StatBoxProps {
  number: string;
  label: string;
  rank?: string;
  numberFontSize?: string;
  labelFontSize?: string;
  rankFontSize?: string;
  textContainerHeight?: number;
}

const StatBox = ({ 
  number, 
  label, 
  rank,
  numberFontSize = "text-heading-3",
  labelFontSize = "text-caption",
  rankFontSize = "text-caption",
  textContainerHeight = 43,
}: StatBoxProps) => {

  const matches = label.match(/(.*?)(\d+)$/);
  const mainText = matches ? matches[1] : label;
  const superText = matches ? matches[2] : "";

  return (
    <View style={tw("flex-1 px-1 text-left")}>
      <Text style={tw(`${numberFontSize} font-extrabold text-foreground mb-1`)}>
        {number}
      </Text>

      <View style={[tw("mb-1"), { height: textContainerHeight }]}>
        <Text style={tw(`${labelFontSize} font-medium leading-tight text-foreground`)}>
          {mainText}
          {superText && (
            <Text style={[tw("text-[8px]"), { verticalAlign: "super" }]}>
              {superText}
            </Text>
          )}
        </Text>
      </View>

      {rank && (
        <Text style={tw(`${rankFontSize} font-extrabold text-foreground`)}>{rank}</Text>
      )}
    </View>
  );
};

export default StatBox;
