import { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { lightenHexColor } from "@/utils/pdf-theme";
import { Typography, ButtonBase, Box } from "@mui/material";

interface ColorPickerProps {
  currentColors: Record<string, string>; // receive current colors
  onColorsChange: (newColors: Record<string, string>) => void; // send updates
}

export const ColorPicker = ({
  currentColors,
  onColorsChange,
}: ColorPickerProps) => {
  const [selectedColors, setSelectedColors] =
    useState<Record<string, string>>(currentColors);
  const [currentColorName, setCurrentColorName] = useState<string>(
    Object.keys(selectedColors)[0] || ""
  );
  const currentColor = selectedColors[currentColorName] ?? "#FFFFFF";

  const handleSwatchClick = (name: string) => {
    setCurrentColorName(name);
  };

  const handleColorChange = (newColor: string) => {
    newColor = newColor.toUpperCase();
    const newRecord: Record<string, string> = { ...selectedColors };
    newRecord[currentColorName] = newColor;
    if (currentColorName === "Base") {
      newRecord["Highlight"] = lightenHexColor(newColor, 0.75);
    }
    setSelectedColors(newRecord);
    onColorsChange?.(newRecord);
  };

  return (
    <Box className="w-full mx-auto text-left relative !space-y-3">
      <Box className="h-[40px] flex items-center">
        <Typography variant="h2">Colors</Typography>
      </Box>

      {/* Base Color Swatch */}
      <Box className="w-full">
        <Typography
          variant="caption"
          className="text-neutral-400 text-sm font-medium"
        >
          Base
        </Typography>
        <ButtonBase
          onClick={() => handleSwatchClick("Base")}
          className="w-full h-12"
          sx={{
            bgcolor: selectedColors["Base"],
            borderRadius: "8px",
            border:
              currentColorName === "Base"
                ? "2px solid var(--color-neutral-400)"
                : "0",
          }}
        />
      </Box>

      {/* Section 1–3 Swatches in a Row */}
      <Box className="w-full flex justify-between gap-2">
        {["Section 1", "Section 2", "Section 3"].map((name) => (
          <Box key={name} className="flex-1">
            <Typography
              variant="caption"
              className="text-neutral-400 text-sm font-medium"
            >
              {name}
            </Typography>
            <ButtonBase
              onClick={() => handleSwatchClick(name)}
              className="w-full h-12"
              sx={{
                bgcolor: selectedColors[name],
                borderRadius: "8px",
                border:
                  currentColorName === name
                    ? "2px solid var(--color-neutral-400)"
                    : "0",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Picker */}
      <Box className="flex flex-col w-full gap-2">
        <div className="w-full aspect-square my-2">
          <HexColorPicker
            color={currentColor}
            onChange={handleColorChange}
            style={{width: "100%", height: "100%"}}
            className="w-full h-full"
          />
        </div>
        <Box className="flex flex-row items-center gap-2">
          <Typography variant="caption" className="text-neutral-400">
            #HEX
          </Typography>
          <HexColorInput
            color={currentColor}
            onChange={handleColorChange}
            className="border border-neutral-200 rounded px-2 py-1 text-sm font-mono w-20"
          />
        </Box>
      </Box>
    </Box>
  );
};
