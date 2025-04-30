import React from "react";
import { Box, Typography, IconButton, Card } from "@mui/material";
import { Icon } from "@iconify/react";

type Template = {
  title: string;
  component: React.ReactNode;
};

interface CarouselProps {
  templates: Template[];
  activeIndex: number;
  onIndexChange: (newIndex: number) => void;
}

export const Carousel = ({
  templates,
  activeIndex,
  onIndexChange,
}: CarouselProps) => {
  const handlePrev = () => {
    onIndexChange(activeIndex === 0 ? templates.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    onIndexChange(activeIndex === templates.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <Box className="w-full mx-auto items-center justify-center relative px-auto !space-y-6">
      <Box className="w-full flex flex-row gap-12 content-center">
        {/* Navigation between templates */}
        <IconButton onClick={handlePrev} className="left-0">
          <Icon icon="mdi:chevron-left" className="size-6" />
        </IconButton>
        <Typography variant="h2" className="grow content-center text-center">
          {templates[activeIndex].title}
        </Typography>
        <IconButton onClick={handleNext} className="right-0">
          <Icon icon="mdi:chevron-right" className="size-6" />
        </IconButton>
      </Box>
      <div className="w-[493px] h-[637px] overflow-hidden flex items-center justify-center mx-auto shadow-xl rounded-lg border border-neutral-200 bg-white">
      <div className="scale-50 origin-center">
          {templates[activeIndex].component}
        </div>
      </div>
    </Box>
  );
};
