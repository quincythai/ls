import { defaultTemplate1CoverPageContent } from "./PageConfigs/Template1Config";
import { defaultTemplate2CoverPageContent } from "./PageConfigs/Template2Config";
import { defaultHousingSectionContent } from "./PageConfigs/HousingConfig";
import { defaultEmployeeOwnershipSectionContent } from "./PageConfigs/EmployeeOwnershipConfig";
import { defaultReferencePageContent } from "./PageConfigs/ReferenceConfig";
import Template1CoverPage from "@/components/pdf/pages/renderer/Template1CoverPage";
import Template2CoverPage from "@/components/pdf/pages/renderer/Template2CoverPage";
import HousingSection from "@/components/pdf/pages/renderer/HousingSection";
import EmployeeOwnershipSection from "@/components/pdf/pages/renderer/EmployeeOwnershipSection";
import ReferencePage from "@/components/pdf/pages/renderer/ReferencePage";
import { Template1CoverPageEditor } from "@/components/pdf/pages/editor/Template1CoverPageEditor";
import { Template2CoverPageEditor } from "@/components/pdf/pages/editor/Template2CoverPageEditor";
import { HousingSectionEditor } from "@/components/pdf/pages/editor/HousingSectionEditor";
import { EmployeeOwnershipSectionEditor } from "@/components/pdf/pages/editor/EmployeeOwnershipSectionEditor";
import { ReferencePageEditor } from "@/components/pdf/pages/editor/ReferencePageEditor";

/**
 * TemplateConfig
 * ----------------
 * Configuration for each available report template:
 * - id: unique numeric identifier
 * - name: display name in the template chooser
 * - allowedSections: which PageType values users can add
 * - coverPageType: which PageType is used as the cover
 * - coverPageContent: default payload for that cover page
 * - maxSections: maximum allowed additional sections
 */
export interface TemplateConfig {
  id: number;
  name: string;
  allowedSections: PageType[];
  coverPageType: PageType;
  coverPageContent: Extract<PageContent, { type: PageType }>["content"];
  maxSections: number;
}

/**
 * templates
 * ----------------
 * Array of all supported templates and their default settings.
 */
export const templates: TemplateConfig[] = [
  {
    id: 0,
    name: "Template 1 Report",
    allowedSections: ["HousingSection", "EmployeeOwnershipSection"],
    coverPageType: "Template1CoverPage",
    coverPageContent: defaultTemplate1CoverPageContent,
    maxSections: 2,
  },
  {
    id: 1,
    name: "Template 2 Report",
    allowedSections: ["HousingSection", "EmployeeOwnershipSection"],
    coverPageType: "Template2CoverPage",
    coverPageContent: defaultTemplate2CoverPageContent,
    maxSections: 1,
  },
  {
    id: 2,
    name: "Affordable Housing Report",
    allowedSections: ["HousingSection", "EmployeeOwnershipSection"],
    coverPageType: "HousingSection",
    coverPageContent: defaultHousingSectionContent,
    maxSections: 1,
  },
  {
    id: 3,
    name: "Employee Ownership Report",
    allowedSections: ["HousingSection", "EmployeeOwnershipSection"],
    coverPageType: "EmployeeOwnershipSection",
    coverPageContent: defaultEmployeeOwnershipSectionContent,
    maxSections: 1,
  },
  {
    id: 4,
    name: "Reference Page",
    allowedSections: ["HousingSection", "EmployeeOwnershipSection"],
    coverPageType: "ReferencePage",
    coverPageContent: defaultReferencePageContent,
    maxSections: 1,
  },
];

/**
 * Central registry of all page types for rendering and defaults.
 * Each key corresponds to one PageType:
 *  - label: human-readable name
 *  - defaultContent: the initial payload for that page
 *  - renderer: React-PDF component used to render the page
 */
export const pageRegistry = {
  Template1CoverPage: {
    label: "Template 1 Cover Page",
    defaultContent: defaultTemplate1CoverPageContent,
    renderer: Template1CoverPage,
    editor: Template1CoverPageEditor,
  },
  Template2CoverPage: {
    label: "Template 2 Cover Page",
    defaultContent: defaultTemplate2CoverPageContent,
    renderer: Template2CoverPage,
    editor: Template2CoverPageEditor,
  },
  HousingSection: {
    label: "Affordable Housing",
    defaultContent: defaultHousingSectionContent,
    renderer: HousingSection,
    editor: HousingSectionEditor,
  },
  EmployeeOwnershipSection: {
    label: "Employee Ownership",
    defaultContent: defaultEmployeeOwnershipSectionContent,
    renderer: EmployeeOwnershipSection,
    editor: EmployeeOwnershipSectionEditor,
  },
  ReferencePage: {
    label: "Reference Page",
    defaultContent: defaultReferencePageContent,
    renderer: ReferencePage,
    editor: ReferencePageEditor,
  },
} as const;

/**
 * ReportBuilderState
 * ----------------
 * Tracks the app's progress and selections:
 * - templateId: selected template
 * - selectedSections: user-added sections
 * - pages: ordered array of PageContent (cover → sections → reference)
 */
export interface ReportBuilderState {
  templateId: number | null;
  selectedSections: PageType[];
  pages: PageContent[];
}

// ------------------------------------------------------------

/**
 * PageType
 * ----------------
 * A discriminated union of all page keys in `pageRegistry`.
 * Example: "Template1CoverPage" | "HousingSection" | …
 */
export type PageType = keyof typeof pageRegistry;

/**
 * CoverPageType
 * ----------------
 * Subset of PageType values that represent cover pages.
 * Dynamically pulled from `templates[].coverPageType`.
 */
export type CoverPageType = (typeof templates)[number]["coverPageType"];

/**
 * PageContent
 * ----------------
 * Discriminated union of every page’s data structure.
 * For each PageType K:
 *   { type: K; content: typeof pageRegistry[K].defaultContent }
 */
export type PageContent = {
  [K in PageType]: {
    type: K;
    content: (typeof pageRegistry)[K]["defaultContent"];
  };
}[PageType];

/**
 * CoverPageContent
 * ----------------
 * A narrowed union of PageContent that includes only cover pages.
 * Equivalent to Extract<PageContent, { type: CoverPageType }>.
 */
export type CoverPageContent = Extract<PageContent, { type: CoverPageType }>;

/**
 * defaultCoverContentMap
 * ----------------
 * Lookup table mapping template IDs to their
 * default cover page object ({ type, content }).
 * Used to initialize ReportBuilderState.pages.
 */
export const defaultCoverContentMap: Record<number, PageContent> =
  Object.fromEntries(
    templates.map((tpl) => [
      tpl.id,
      { type: tpl.coverPageType, content: tpl.coverPageContent },
    ]),
  ) as Record<number, PageContent>;

/**
 * pageTypeToLabel
 * ----------------
 * Maps each PageType to its label for UI toggles.
 */
export const pageTypeToLabel: Record<PageType, string> = Object.fromEntries(
  Object.entries(pageRegistry).map(([key, val]) => [key, val.label]),
) as Record<PageType, string>;

/**
 * sectionLabelToPageType
 * ----------------
 * Inverse of pageTypeToLabel: given a label, returns the PageType.
 */
export const sectionLabelToPageType: Record<string, PageType> =
  Object.fromEntries(
    Object.entries(pageTypeToLabel).map(([key, val]) => [val, key]),
  ) as Record<string, PageType>;

export interface TemplateColors {
  selectedColors: Record<string, string>;
}

export const defaultTemplateColors: TemplateColors = {
  selectedColors: {
    "Base": "#D7F1EF",
    "Section 1": "#D3E8C8",
    "Section 2": "#C1D9EC",
    "Section 3": "#FFD5A5",

    "Highlight": "#E7FEFC",
  },
};
