import {
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  Button,
  Typography,
  StepConnector,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";

import { fetchMockLsiReport } from "./api/ex_endpoint";
import { Metric, ReportData } from "./types/report";

import { ChooseTemplate } from "@/components/step/ChooseTemplate";
import { AddSections } from "@/components/step/AddSections";
import { Edit } from "./components/step/Edit";
import { Confirmation } from "@/components/step/Confirmation";

import PDFPreview from "@/components/pdf/PDFPreview";
import {
  defaultTemplate1CoverPageContent,
  Template1CoverPageContent,
} from "@/types/PageConfigs/Template1Config";
import { defaultReferencePageContent } from "./types/PageConfigs/ReferenceConfig";
import { TemplateColors, defaultTemplateColors } from "@/types/templateConfig";

import {
  ReportBuilderState,
  defaultCoverContentMap,
  PageContent,
  pageRegistry,
} from "./types/templateConfig";

import CoverEditor from "./components/ui/CoverEditor";
import { templates } from "./types/templateConfig";

const logoUrl = new URL("./assets/logo.svg", import.meta.url).href;

const states = {
  Alabama: ["AL-1", "AL-2", "AL-3"],
  Alaska: ["AK-1", "AK-2", "AK-3"],
  Arizona: ["AZ-1", "AZ-2", "AZ-3"],
  Arkansas: ["AR-1", "AR-2", "AR-3"],
};

const steps = ["Choose Template", "Add Sections", "Edit", "Confirmation"];

function App() {
  const [selectedState, setSelectedState] = useState<string | undefined>(
    undefined,
  );
  const [selectedDistrict, setSelectedDistrict] = useState<string | undefined>(
    undefined,
  );
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [templateColors, setTemplateColors] = useState<TemplateColors>(
    defaultTemplateColors,
  );

  const [reportState, setReportState] = useState<ReportBuilderState>({
    templateId: 0,
    selectedSections: [],
    pages: [],
  });

  const handleTemplateSelect = (templateId: number) => {
    const coverPage = defaultCoverContentMap[templateId];
    if (!coverPage) {
      throw new Error(
        `No cover page content defined for templateId: ${templateId}`,
      );
    }

    const referencePage: PageContent = {
      type: "ReferencePage",
      content: defaultReferencePageContent,
    };

    setReportState({
      templateId,
      selectedSections: [],
      pages: [coverPage, referencePage],
    });
  };

  const memoizedPDFPreview = useMemo(
    () => (
      <PDFPreview pages={reportState.pages} templateColors={templateColors} />
    ),
    [reportState.pages, templateColors],
  );

  const renderedTemplates = templates.map((tpl) => {
    const page = defaultCoverContentMap[tpl.id];
    const { type, content } = page;

    const EditorComponent = pageRegistry[type].editor as React.ComponentType<{
      content: typeof content;
      templateColors: TemplateColors;
      onChange: (newContent: typeof content) => void;
      isPreview: boolean;
    }>;

    return {
      id: tpl.id,
      title: tpl.name,
      component: (
        <EditorComponent
          content={content}
          templateColors={templateColors}
          onChange={() => {}}
          isPreview={true}
        />
      ),
    };
  });

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchMockLsiReport("0101");
      setData(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error fetching report:", err.message);
        setError("Failed to fetch report: " + err.message);
      } else {
        console.error("Unexpected error", err);
        setError("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const renderMetric = (label: string, metric: Metric) => (
    <div className="border-2 p-3 bg-gray-100 mb-2 border-neutral-200">
      <h3 className="font-semibold">{label}</h3>
      <p>Location Type: {metric.LOCATION_TYPE}</p>
      <p>Value: {metric.VALUE}</p>
      <p>
        Rank: {metric.RANK} / {metric.TOTAL_COUNT}
      </p>
    </div>
  );

  const handleColorChange = (newColors: Record<string, string>) => {
    setTemplateColors({ selectedColors: newColors });
  };

  return (
    <>
      <div className="flex min-h-screen items-stretch">
        {/* Sidebar */}
        <aside className="max-w-xs w-full shrink-0" />
        <aside className="fixed flex flex-col border-r-2 border-neutral-200 p-10 gap-8 max-w-xs w-full shrink-0 overflow-auto h-screen max-h-screen">
          <img
            src={logoUrl}
            alt="Lafayette Square Institute"
            className="h-18 self-start"
          />
          <FormControl
            disabled={activeStep > 0}
            className="flex flex-col gap-2 items-stretch"
          >
            <FormLabel id="state-label">State</FormLabel>
            <Select
              labelId="state-label"
              id="state-select"
              value={selectedState}
              onChange={(event) => {
                setSelectedState(event.target.value);
                setSelectedDistrict(undefined);
              }}
              displayEmpty
              renderValue={(value) => value ?? "Select one"}
            >
              {Object.entries(states).map(([state]) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            disabled={!selectedState || activeStep > 0}
            className="flex flex-col gap-2 items-stretch"
          >
            <FormLabel id="district-label">District</FormLabel>
            <Select
              labelId="district-label"
              id="district-select"
              value={selectedDistrict}
              onChange={(event) => {
                setSelectedDistrict(event.target.value);
              }}
              displayEmpty
              renderValue={(value) => value ?? "Select one"}
            >
              {(states[selectedState as keyof typeof states] ?? []).map(
                (district) => (
                  <MenuItem key={district} value={district}>
                    {district}
                  </MenuItem>
                ),
              )}
            </Select>
          </FormControl>

          {selectedDistrict && (
            <div className="flex flex-col gap-4 mt-6">
              <Button variant="gray" onClick={handleFetch} className="w-full">
                Fetch LSI Report
              </Button>
              {loading && <p>Loading...</p>}
              {error && <p className="text-red-500">{error}</p>}
              {data && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">LSI Report</h2>
                  <p>
                    <strong>Congressional District:</strong> {data.CD}
                  </p>
                  <p>
                    <strong>State Name:</strong> {data.CD_FIPS}
                  </p>
                  <p>
                    <strong>State FIPS:</strong> {data.STATE_FIPS}
                  </p>
                  {renderMetric("Eviction Risk", data.eviction_risk)}
                  {renderMetric("Financial Problems", data.financial_problems)}
                  {renderMetric(
                    "Home Ownership Rate",
                    data.home_ownership_rate,
                  )}
                  {renderMetric(
                    "Housing Underproduction",
                    data.housing_underproduction,
                  )}
                  {renderMetric("Median Home Value", data.median_home_value)}
                  {renderMetric("Median Rent", data.median_rent)}
                  {renderMetric(
                    "Poverty Concentration",
                    data.poverty_concentration,
                  )}
                  {renderMetric("Renting Burdened", data.renting_burdened)}
                  {renderMetric("Social Mobility", data.social_mobility)}
                </div>
              )}
            </div>
          )}
        </aside>

        <div className="w-full max-w-7xl mx-auto pt-5">
          <nav className="flex justify-between items-center py-5 px-2.5">
            <Stepper
              activeStep={activeStep}
              connector={<StepConnector />}
              className="space-x-3"
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel className="space-x-1">
                    <Typography variant="body1" className="font-semibold">
                      {label}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <Icon
              icon="iconoir:profile-circle"
              className="size-9 text-neutral-500 shrink-0"
            />
          </nav>

          <main className="p-5 space-y-5">
            {activeStep === 0 ? (
              <ChooseTemplate
                templates={renderedTemplates}
                templateColors={templateColors}
                onColorsChange={handleColorChange}
                onSelect={(id) => {
                  setReportState((prev) => ({ ...prev, templateId: id }));
                }}
              />
            ) : activeStep === 1 ? (
              <AddSections
                reportState={reportState}
                setReportState={setReportState}
              />
            ) : activeStep === 2 ? (
              <Edit
                pages={reportState.pages}
                templateColors={templateColors}
                onUpdateContent={(pageIndex, newContent) => {
                  setReportState((prev) => ({
                    ...prev,
                    pages: prev.pages.map((p, idx) =>
                      idx === pageIndex ? { ...p, content: newContent } : p,
                    ),
                  }));
                }}
              />
            ) : activeStep === 3 ? (
              <Confirmation
                reportState={reportState}
                templateColors={templateColors}
              />
            ) : null}
          </main>

          <div className="h-24 bottom-0 fixed w-[calc(100vw-320px)] max-w-7xl z-40">
            <div className="h-4 bg-gradient-to-b from-transparent to-neutral-100" />
            <div className="flex justify-between items-center gap-4 bg-neutral-100 px-5 pb-4 h-full">
              <Button
                className="w-32"
                variant="gray"
                onClick={() => {
                  const prevStep = activeStep - 1;
                  if (prevStep === 0) {
                    setReportState({
                      templateId: 0,
                      selectedSections: [],
                      pages: [],
                    });
                  }
                  setActiveStep(prevStep);
                }}
                disabled={activeStep === 0}
              >
                Previous
              </Button>
              <Button
                className="w-32"
                variant="lafayette"
                onClick={() => {
                  if (activeStep === 0 && reportState.templateId !== null) {
                    handleTemplateSelect(reportState.templateId);
                  }
                  setActiveStep(activeStep + 1);
                }}
                disabled={
                  activeStep === steps.length - 1 ||
                  (activeStep === 0 &&
                    (selectedDistrict == null ||
                      reportState.templateId == null))
                }
              >
                Next Step
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
