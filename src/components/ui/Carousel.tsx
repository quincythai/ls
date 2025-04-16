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

export const Carousel = ({ templates }: { templates: Template[] }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? templates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === templates.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box className="w-full mx-auto text-center relative px-14 !space-y-6">
      <Typography variant="h2" className="mb-2">
        {templates[activeIndex].title}
      </Typography>
      <Card
        elevation={0}
        className="bg-white border-2 border-neutral-200 rounded-none aspect-[8.5/11] mx-auto h-96 flex items-center justify-center"
      >
        {templates[activeIndex].component}
      </Card>

      <IconButton
        onClick={handlePrev}
        className="!absolute top-1/2 left-0 -translate-y-1/2"
      >
        <Icon icon="mdi:chevron-left" className="size-6" />
      </IconButton>

      <IconButton
        onClick={handleNext}
        className="!absolute top-1/2 right-0 -translate-y-1/2"
      >
        <Icon icon="mdi:chevron-right" className="size-6" />
      </IconButton>
    </Box>
  );
};
