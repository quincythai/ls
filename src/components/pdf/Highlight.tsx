import { Text, View } from "@react-pdf/renderer";
import { tw } from "../../utils/pdf-theme";

interface HighlightProps {
  children: React.ReactNode;
  width?: string;
  height?: string | number;
  color?: string;
  top?: number;
  left?: number;
  textSize?: string;
  isFullWidth?: boolean;
  right?: number;
  className?: string;
  contentClassName?: string;
}

export const Highlight = ({ 
  children, 
  width = "80%",
  height = "60%",
  color = "#D3E8C8",
  top = 7,
  left = -4,
  textSize = "text-[23px]",
  isFullWidth = false,
  right,
  className = "",
  contentClassName = "",
}: HighlightProps) => {
  if (isFullWidth) {
    return (
      <View style={tw(`relative ${className}`)}>
        <View 
          style={[
            tw("absolute"), 
            { 
              top,
              left: left ?? 0,
              right: right ?? 0,
              height,
              backgroundColor: color,
              zIndex: 1,
            },
          ]} 
        />
        <View style={tw(`relative ${contentClassName}`)}>
          {children}
        </View>
      </View>
    );
  }

  return (
    <View style={tw("relative mb-6")}>
      <Text style={tw(`${textSize} font-black text-foreground relative z-100`)}>
        {children}
      </Text>
      <View 
        style={[
          tw("absolute"), 
          { 
            top,
            left,
            width,
            height,
            backgroundColor: color,
            zIndex: 1,
          },
        ]} 
      />
    </View>
  );
}; 