import { Document } from "@react-pdf/renderer";
import Template1CoverPage from "./Template1CoverPage";
import HousingSection from "./sections/HousingSection";
import EmployeeOwnershipSection from "./sections/EmployeeOwnershipSection";
import ReferencePage from "./ReferencePage";
import { Template1Colors, Template1CoverPageContent } from "@/types/PageConfigs/Template1Config";
import { defaultEmployeeOwnershipSectionContent } from "@/types/PageConfigs/EmployeeOwnershipConfig";
import { defaultHousingSectionContent } from "@/types/PageConfigs/HousingConfig";
import { defaultReferencePageContent } from "@/types/PageConfigs/ReferenceConfig";


interface Template1Props {
  config: Template1CoverPageContent;
  templateColors: Template1Colors;
}

const Template1 = ({ config, templateColors }: Template1Props) => {
  console.log(config);
  console.log("template colors that have been passed down to Template.tsx:", templateColors.selectedColors);

  return (
    <Document>
      <Template1CoverPage config={config} templateColors={templateColors} />
      <HousingSection config={defaultHousingSectionContent} />
      <EmployeeOwnershipSection config={defaultEmployeeOwnershipSectionContent} />
      <ReferencePage config={defaultReferencePageContent} />
    </Document>
  );
};

export default Template1;

