import { useState } from "react";
import { defaultTemplate1CoverPageContent } from "@/types/pageConfigs";
import { Template1CoverPageContent } from "@/types/pageConfigs";
import RichTextEditor from "./RichTextEditor";

interface CoverEditorProps {
    coverData: Template1CoverPageContent;
    setCoverData: React.Dispatch<React.SetStateAction<Template1CoverPageContent>>;
  }

const CoverEditor = ({ coverData, setCoverData }: CoverEditorProps) => {

  return (
    <div className="flex flex-col gap-6 p-4 max-w-4xl mx-auto mb-16">
      <label className="font-semibold">Report Title</label>
      <RichTextEditor
        value={coverData.reportTitle}
        onChange={(val) => setCoverData((prev) => ({ ...prev, reportTitle: val }))}
      />

      <label className="font-semibold">Mission Statement</label>
      <RichTextEditor
        value={coverData.missionStatement}
        onChange={(val) => setCoverData((prev) => ({ ...prev, missionStatement: val }))}
      />

      <label className="font-semibold">Mission Subtext</label>
      <RichTextEditor
        value={coverData.missionSubtext}
        onChange={(val) => setCoverData((prev) => ({ ...prev, missionSubtext: val }))}
      />

      <label className="font-semibold">Call to Action Text</label>
      <RichTextEditor
        value={coverData.ctaText}
        onChange={(val) => setCoverData((prev) => ({ ...prev, ctaText: val }))}
      />

      <label className="font-semibold">Section Intro Header</label>
      <RichTextEditor
        value={coverData.sectionIntroHeader}
        onChange={(val) => setCoverData((prev) => ({ ...prev, sectionIntroHeader: val }))}
      />

      <label className="font-semibold">Affordable Housing Title</label>
      <RichTextEditor
        value={coverData.affordableHousingTitle}
        onChange={(val) => setCoverData((prev) => ({ ...prev, affordableHousingTitle: val }))}
      />

      <label className="font-semibold">Affordable Housing Text</label>
      <RichTextEditor
        value={coverData.affordableHousingText}
        onChange={(val) => setCoverData((prev) => ({ ...prev, affordableHousingText: val }))}
      />

      <label className="font-semibold">Employee Ownership Title</label>
      <RichTextEditor
        value={coverData.employeeOwnershipTitle}
        onChange={(val) => setCoverData((prev) => ({ ...prev, employeeOwnershipTitle: val }))}
      />

      <label className="font-semibold">Employee Ownership Text</label>
      <RichTextEditor
        value={coverData.employeeOwnershipText}
        onChange={(val) => setCoverData((prev) => ({ ...prev, employeeOwnershipText: val }))}
      />

      <label className="font-semibold">Bottom Note</label>
      <RichTextEditor
        value={coverData.bottomNote}
        onChange={(val) => setCoverData((prev) => ({ ...prev, bottomNote: val }))}
      />

      <label className="font-semibold">Mobility Stat Label</label>
      <RichTextEditor
        value={coverData.mobilityStat.label}
        onChange={(val) =>
          setCoverData((prev) => ({
            ...prev,
            mobilityStat: { ...prev.mobilityStat, label: val },
          }))
        }
      />

      <label className="font-semibold">Expense Burden Stat Label</label>
      <RichTextEditor
        value={coverData.expenseBurdenStat.label}
        onChange={(val) =>
          setCoverData((prev) => ({
            ...prev,
            expenseBurdenStat: { ...prev.expenseBurdenStat, label: val },
          }))
        }
      />

      <label className="font-semibold">Rent Burden Stat Label</label>
      <RichTextEditor
        value={coverData.rentBurdenStat.label}
        onChange={(val) =>
          setCoverData((prev) => ({
            ...prev,
            rentBurdenStat: { ...prev.rentBurdenStat, label: val },
          }))
        }
      />

      <label className="font-semibold">Succession Risk Stat Label</label>
      <RichTextEditor
        value={coverData.successionRiskStat.label}
        onChange={(val) =>
          setCoverData((prev) => ({
            ...prev,
            successionRiskStat: { ...prev.successionRiskStat, label: val },
          }))
        }
      />
    </div>
  );
};

export default CoverEditor;
