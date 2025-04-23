import { Carousel } from "@/components/ui/Carousel";
import { Typography } from "@mui/material";

type Template = {
  title: string;
  component: React.ReactNode;
};

interface ChooseTemplateProps {
  templates: Template[];
  onTemplateSelect: (index: number) => void;
}

export const ChooseTemplate = ({ templates, onTemplateSelect }: ChooseTemplateProps) => {
  return (
    <>
      <header>
        <Typography variant="h1" className="font-bold">
          Choose Template
        </Typography>
      </header>
      <div className="bg-white rounded-lg border-2 border-neutral-200 px-4 py-8">
        <Carousel templates={templates} onTemplateSelect={onTemplateSelect} />
        {/* <Carousel className="w-xl mx-auto">
          <CarouselContent>
            <CarouselItem className="flex flex-col gap-4">
              <p>Template 1</p>
              <div className="aspect-[8.5/11] bg-white border-2 border-neutral-200 w-xl">
                <PDFPreview />
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col gap-4">
              <p>Template 2</p>
              <div className="aspect-[8.5/11] bg-white border-2 border-neutral-200 w-xl" />
            </CarouselItem>
            <CarouselItem className="flex flex-col gap-4">
              <p>Template 3</p>
              <div className="aspect-[8.5/11] bg-white border-2 border-neutral-200 w-xl" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
      </div>
    </>
  );
};
