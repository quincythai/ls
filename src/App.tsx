import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselSlide,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Icon } from "@iconify/react";
const logoUrl = new URL("./assets/logo.svg", import.meta.url).href;

const states = {
  "Alabama": ["AL-1", "AL-2", "AL-3"],
  "Alaska": ["AK-1", "AK-2", "AK-3"],
  "Arizona": ["AZ-1", "AZ-2", "AZ-3"],
  "Arkansas": ["AR-1", "AR-2", "AR-3"],
};
const tabs = {
  "choose-template": "Choose template",
  "add-sections": "Add sections",
  "edit": "Edit",
  "confirmation": "Confirmation",
};

function App() {
  const [selectedState, setSelectedState] = useState<string | undefined>(undefined);
  const [selectedDistrict, setSelectedDistrict] = useState<string | undefined>(undefined);

  return (
    <>
      <div className="flex min-h-screen items-stretch">
        <aside className="flex flex-col border-r-2 border-section-stroke p-10 gap-8 max-w-xs w-full shrink-0">
          <img src={logoUrl} alt="Lafayette Square Institute" className="h-18 self-start" />
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">
              State
            </h2>
            <Select value={selectedState} onValueChange={(value) => { setSelectedState(value); setSelectedDistrict(undefined); }}>
              <SelectTrigger className="w-full">
                {selectedState ?? "Select a state"}
              </SelectTrigger>
              <SelectContent>
                {Object.entries(states).map(([state]) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">
              District
            </h2>
            <Select value={selectedDistrict} onValueChange={setSelectedDistrict} disabled={selectedState == null}>
              <SelectTrigger className="w-full">
                {selectedDistrict ?? "Select a district"}
              </SelectTrigger>
              <SelectContent>
                {(states[selectedState as keyof typeof states] ?? []).map((district) => (
                  <SelectItem key={district} value={district}>
                    {district}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </aside>
        <div className="w-full max-w-7xl mx-auto flex items-stretch">
          <Tabs defaultValue="choose-template" className="w-full flex flex-col relative max-h-screen">
            <nav className="flex items-center gap-8 h-24 shrink-0 fixed w-[calc(100vw-320px)] max-w-7xl z-40 bg-[#F9F9F9] px-5">
              <TabsList className="flex w-full gap-3">
                {Object.entries(tabs).map(([key, value], index) => (
                  <TabsTrigger key={key} value={key} className="flex flex-1 items-center gap-3 group">
                    <div className="flex items-center justify-center rounded-full group-data-[state=active]:bg-foreground group-data-[state=active]:text-white size-8 text-base bg-[#E0E0E0]">
                      {index + 1}
                    </div>
                    <h2 className="font-semibold text-base">
                      {value}
                    </h2>
                    <hr className="grow border-t-2 border-section-stroke group-data-[state=active]:border-foreground/25" />
                  </TabsTrigger>
                ))}
              </TabsList>
              <Icon icon="iconoir:profile-circle" className="size-9 text-secondary-foreground shrink-0" />
            </nav>
            <main className="p-5 pt-24">
              <TabsContent value="choose-template" className="space-y-6">
                <h2 className="text-2xl font-bold">
                  Choose Template
                </h2>
                <div className="bg-white rounded-lg border-2 border-section-stroke px-20 py-8">
                  <Carousel className="w-xl mx-auto">
                    <CarouselContent>
                      <CarouselItem className="flex flex-col gap-4">
                        <p>Template 1</p>
                        <div className="aspect-[8.5/11] bg-white border-2 border-section-stroke w-xl" />
                      </CarouselItem>
                      <CarouselItem className="flex flex-col gap-4">
                        <p>Template 2</p>
                        <div className="aspect-[8.5/11] bg-white border-2 border-section-stroke w-xl" />
                      </CarouselItem>
                      <CarouselItem className="flex flex-col gap-4">
                        <p>Template 3</p>
                        <div className="aspect-[8.5/11] bg-white border-2 border-section-stroke w-xl" />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </TabsContent>
              <TabsContent value="add-sections" className="space-y-6">
                <h2 className="text-2xl font-bold">
                  Add Sections
                </h2>
                <div className="bg-white rounded-lg border-2 border-section-stroke px-20 py-9 flex flex-col gap-5">
                  <button className="flex items-center gap-2 border-2 border-section-stroke px-4 py-5 justify-center font-bold hover:bg-muted cursor-pointer">
                    <Icon icon="iconoir:plus" className="size-6" />
                    Affordable Housing
                  </button>
                  <button className="flex items-center gap-2 border-2 border-section-stroke px-4 py-5 justify-center font-bold hover:bg-muted cursor-pointer">
                    <Icon icon="iconoir:plus" className="size-6" />
                    Employee Ownership
                  </button>
                  <button className="flex items-center gap-2 border-2 border-section-stroke px-4 py-5 justify-center font-bold hover:bg-muted cursor-pointer">
                    <Icon icon="iconoir:plus" className="size-6" />
                    Employee Ownership
                  </button>
                  <button className="flex items-center gap-2 border-2 border-section-stroke px-4 py-5 justify-center font-bold hover:bg-muted cursor-pointer">
                    <Icon icon="iconoir:plus" className="size-6" />
                    Employee Ownership
                  </button>
                </div>
              </TabsContent>
              <TabsContent value="edit" className="space-y-6">
                  <h2 className="text-2xl font-bold">
                    Edit
                  </h2>
                  <div className="flex gap-4">
                    <div className="w-full grow bg-white rounded-lg border-2 border-section-stroke px-20 py-9 flex flex-col gap-5 items-center">
                      <h2 className="text-lg font-bold">
                        Preview
                      </h2>
                      <div className="aspect-[8.5/11] bg-white border-2 border-section-stroke w-xl px-8 py-10 text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident dolorum esse autem, numquam saepe quod nihil dignissimos perferendis omnis labore modi, dolore molestias. Officia harum, iusto sapiente sequi similique totam?
                      </div>
                    </div>
                    <div className="max-w-xs shrink-0 flex flex-col items-stretch w-full gap-2">
                      <Button variant="outline">
                        <Icon icon="mdi:pencil-outline" className="size-5" />
                        Edit Text
                      </Button>
                    </div>
                  </div>
              </TabsContent>
              <TabsContent value="confirmation" className="space-y-6">
                <h2 className="text-2xl font-bold">
                  Congratulations! Your new insights are ready.
                </h2>
                <div className="flex gap-4">
                  <div className="w-full grow bg-white rounded-lg border-2 border-section-stroke px-20 py-9 flex flex-col gap-5 items-center">
                    <div className="aspect-[8.5/11] bg-white border-2 border-section-stroke w-xl px-8 py-10 text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident dolorum esse autem, numquam saepe quod nihil dignissimos perferendis omnis labore modi, dolore molestias. Officia harum, iusto sapiente sequi similique totam?
                    </div>
                  </div>
                  <div className="max-w-xs shrink-0 flex flex-col items-stretch w-full gap-2">
                    <Button variant="outline">
                      <Icon icon="material-symbols:download" className="size-5" />
                      Download
                    </Button>
                    <Button variant="outline">
                      <Icon icon="mdi:reload" className="size-5" />
                      Regenerate
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </main>
            <div className="flex justify-between items-center h-20 gap-4 border-t-2 border-section-stroke bottom-0 fixed w-[calc(100vw-320px)] max-w-7xl z-40 bg-[#F9F9F9] px-5">
              <Button variant="outline">
                Previous
              </Button>
              <Button variant="secondary">
                Next Step
              </Button>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default App;
