import { Carousel } from "@/components/Carousel";
import PDFPreview from "@/components/pdf/PDFPreview";
import { Typography } from "@mui/material";

const templates = [
  { title: "Template 1", component: <PDFPreview /> },
  { title: "Template 2", component: <PDFPreview /> },
  { title: "Template 3", component: <PDFPreview /> },
];

export const ChooseTemplate = () => {
  return (
    <>
      <header>
        <Typography variant="h1" className="font-bold">
          Choose Template
        </Typography>
      </header>
      <div className="bg-white rounded-lg border-2 border-neutral-200 px-4 py-8">
        <Carousel templates={templates} />
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
