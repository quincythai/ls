import { Template2CoverPageContent, RichTextValue } from "@/types/pageConfigs";
import RichTextEditor from "./RichTextEditor";

interface Template2EditorProps {
  coverData: Template2CoverPageContent;
  setCoverData: React.Dispatch<React.SetStateAction<Template2CoverPageContent>>;
}

const editableFields: {
  key: keyof Omit<Template2CoverPageContent, "stat1" | "stat2">;
  label: string;
}[] = [
  { key: "reportTitle", label: "Report Title" },
  { key: "subtitle", label: "Subtitle" },
  { key: "summary", label: "Summary" },
  { key: "whyNeeds", label: "Why Needs Text" },
  { key: "footerText", label: "Footer Text" },
];

const statFields: {
  parent: keyof Pick<Template2CoverPageContent, "stat1" | "stat2">;
  label: string;
}[] = [
  { parent: "stat1", label: "Stat 1 Label" },
  { parent: "stat2", label: "Stat 2 Label" },
];

const Template2Editor = ({ coverData, setCoverData }: Template2EditorProps) => {
  return (
    <div className="flex flex-col gap-6 p-4 max-w-4xl mx-auto mb-16">
      {editableFields.map(({ key, label }) => (
        <div key={key}>
          <label className="font-semibold">{label}</label>
          <RichTextEditor
            value={coverData[key] as RichTextValue}
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

export default Template2Editor; 