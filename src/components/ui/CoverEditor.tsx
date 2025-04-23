import { Template1CoverPageContent } from "@/types/pageConfigs";
import RichTextEditor from "./RichTextEditor";
import React, { useRef } from "react";
import { Button } from "@mui/material";

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setCoverData(prev => ({ ...prev, coverImage: dataUrl }));
    };
    reader.readAsDataURL(file);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);


  return (
    <div className="flex flex-col gap-6 p-4 max-w-4xl mx-auto mb-16">
      <div>
        <label className="font-semibold">Select Logo Image</label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />

        <Button
          variant="contained"
          onClick={() => fileInputRef.current?.click()}
          sx={{
            fontWeight: 600,
            color: "var(--color-lafayette-500)",
            backgroundColor: "var(--color-lafayette-900)",
            "&:hover": {
              backgroundColor: "var(--color-lafayette-500)",
              color: "var(--color-lafayette-900)",
            },
          }}
        >
          Upload Cover Image
        </Button>
      
        {coverData.coverImage && (
          <div className="mt-2 flex flex-col items-start gap-2">
            <img
              src={coverData.coverImage}
              alt="Cover Preview"
              className="w-70 h-70 object-contain rounded"
            />
          </div>
        )}
      </div>

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
