import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
} from "@mui/material";
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

export const Carousel = ({ templates, activeIndex, onIndexChange }: CarouselProps) => {

  const handlePrev = () => {
    onIndexChange(
      activeIndex === 0 ? templates.length - 1 : activeIndex - 1
    );
  };

  const handleNext = () => {
    onIndexChange(
      activeIndex === templates.length - 1 ? 0 : activeIndex + 1
    );
  };

  return (
    <Box className="w-full mx-auto items-center relative px-auto !space-y-6">
      <Box className="w-full flex flex-row gap-12 content-center">
        {/* Navigation between templates */}
        <IconButton
          onClick={handlePrev}
          className="left-0"
        >
          <Icon icon="mdi:chevron-left" className="size-6" />
        </IconButton>
        <Typography variant="h2" className="grow content-center text-center">
          {templates[activeIndex].title}
        </Typography>
        <IconButton
          onClick={handleNext}
          className="right-0"
        >
          <Icon icon="mdi:chevron-right" className="size-6" />
        </IconButton>
      </Box>
      <Card
        elevation={0}
        className="bg-white border-2 border-neutral-200 rounded-none aspect-[8.5/11] mx-auto h-96 flex items-center justify-center"
      >
        {templates[activeIndex].component}
      </Card>
    </Box>
  );
};
