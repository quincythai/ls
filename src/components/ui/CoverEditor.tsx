import { Template1CoverPageContent } from "@/types/pageConfigs";
import RichTextEditor from "./RichTextEditor";

interface CoverEditorProps {
  coverData: Template1CoverPageContent;
  setCoverData: React.Dispatch<React.SetStateAction<Template1CoverPageContent>>;
}

const editableFields: {
  key: keyof Template1CoverPageContent;
  label: string;
}[] = [
  { key: "reportTitle", label: "Report Title" },
  { key: "missionStatement", label: "Mission Statement" },
  { key: "missionSubtext", label: "Mission Subtext" },
  { key: "ctaText", label: "Call to Action Text" },
  { key: "sectionIntroHeader", label: "Section Intro Header" },
  { key: "affordableHousingTitle", label: "Affordable Housing Title" },
  { key: "affordableHousingText", label: "Affordable Housing Text" },
  { key: "employeeOwnershipTitle", label: "Employee Ownership Title" },
  { key: "employeeOwnershipText", label: "Employee Ownership Text" },
  { key: "bottomNote", label: "Bottom Note" },
];

const statFields: {
  parent: keyof Pick<
    Template1CoverPageContent,
    "mobilityStat" | "expenseBurdenStat" | "rentBurdenStat" | "successionRiskStat"
  >;
  label: string;
}[] = [
  { parent: "mobilityStat", label: "Mobility Stat Label" },
  { parent: "expenseBurdenStat", label: "Expense Burden Stat Label" },
  { parent: "rentBurdenStat", label: "Rent Burden Stat Label" },
  { parent: "successionRiskStat", label: "Succession Risk Stat Label" },
];

const CoverEditor = ({ coverData, setCoverData }: CoverEditorProps) => {
  return (
    <div className="flex flex-col gap-6 p-4 max-w-4xl mx-auto mb-16">
      {editableFields.map(({ key, label }) => (
        <div key={key}>
          <label className="font-semibold text-neutral-600">{label}</label>
          <RichTextEditor
            value={coverData[key] as any}
            onChange={(val) =>
              setCoverData((prev) => ({
                ...prev,
                [key]: val,
              }))
            }
          />
        </div>
      ))}

      {statFields.map(({ parent, label }) => (
        <div key={parent}>
          <label className="font-semibold">{label}</label>
          <RichTextEditor
            value={coverData[parent].label}
            onChange={(val) =>
              setCoverData((prev) => ({
                ...prev,
                [parent]: {
                  ...prev[parent],
                  label: val,
                },
              }))
            }
          />
        </div>
      ))}
    </div>
  );
};

export default CoverEditor;
