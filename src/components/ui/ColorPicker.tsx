import { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { lightenHexColor } from "@/utils/pdf-theme";
import {
    Typography,
    ButtonBase,
    Box
} from "@mui/material";

interface ColorPickerProps {
    currentColors: Record<string, string>; // receive current colors
    onColorsChange: (newColors: Record<string, string>) => void; // send updates
}

export const ColorPicker = ({ currentColors, onColorsChange }: ColorPickerProps) => {
    const [selectedColors, setSelectedColors] = useState<Record<string, string>>(currentColors);
    const [currentColorName, setCurrentColorName] = useState<string>(Object.keys(selectedColors)[0] || "");
    const currentColor = selectedColors[currentColorName] ?? "#FFFFFF";

    const handleSwatchClick = (name: string) => {
        setCurrentColorName(name);
    };

    const handleColorChange = (newColor: string) => {
        newColor = newColor.toUpperCase();
        const newRecord: Record<string, string> = { ...selectedColors };
        newRecord[currentColorName] = newColor
        if (currentColorName === "Base *") {
            newRecord["Highlight"] = lightenHexColor(newColor, 0.75);
        }
        setSelectedColors(newRecord);
        onColorsChange?.(newRecord);
    };

  return (
    <Box className="w-full mx-auto text-left relative !space-y-3">
        <Box className="h-[40px] flex items-center">
            <Typography variant="h2">
                Colors
            </Typography>
        </Box>

        {/* Selected Color Swatches */}
        <Box className="flex space-x-1 space-y-1 flex-wrap">
            {[...Object.entries(selectedColors).slice(0, 4)].map(([name, color]) => (
                <Box
                    key={name}
                    sx={{
                        width: name === "Base *" ? 1 : '30%',
                    }}
                >
                    <Typography 
                        variant="caption" 
                        className="text-neutral-400 mt-1 text-sm font-medium"
                        sx={{
                            color: currentColorName === name ? "var(--color-neutral-600)" : "var(--color-neutral-400)"
                        }}
                    >
                        {name}
                    </Typography>
                    <ButtonBase
                        onClick={() => handleSwatchClick(name)}
                        className="w-full h-12 rounded-lg overflow-hidden"
                        sx={{
                            bgcolor: color,
                            borderRadius: "8px",
                            border: currentColorName === name ? "2px solid var(--color-neutral-400)" : "0"
                        }}
                    >
                        {/* optionally can also display hex codes in the swatches */}
                        {/* <Typography
                        variant="caption"
                        className="text-white w-full text-left font-bold"
                        style={{ textShadow: "0 0 2px rgba(0,0,0,0.5)" }}
                        >
                        {color}
                        </Typography> */}
                    </ButtonBase>
                </Box>
            ))}
        </Box>

        {/* Picker */}
        <Box className="flex flex-col width-full max-w-md gap-2">
            <HexColorPicker color={currentColor} onChange={handleColorChange} className="w-full"/>
            <Box className="flex flex-row items-center gap-2 align">
                <Typography variant="caption" className="text-neutral-400">#HEX</Typography>
                <HexColorInput color={currentColor} onChange={handleColorChange} className="border border-neutral-200 rounded px-2 py-1 w-20 text-sm font-mono"/>
            </Box>
        </Box>
    </Box>
  );
};