import { Document } from "@react-pdf/renderer";
import Template1CoverPage from "./Template1CoverPage";
import HousingSection from "./sections/HousingSection";
import EmployeeOwnershipSection from "./sections/EmployeeOwnershipSection";
import ReferencePage from "./ReferencePage";
import { Template1Colors, Template1CoverPageContent } from "@/types/pageConfigs";

interface Template1Props {
  config: Template1CoverPageContent;
  // templateColors: Template1Colors;
}

const Template = ({ config }: Template1Props) => {
  console.log(config);
  // console.log("template colors that have been passed down to Template.tsx:", templateColors.selectedColors);

  return (
    <Document>
      <Template1CoverPage config={config} />
      {/* <HousingSection />
      <EmployeeOwnershipSection />
      <ReferencePage /> */}
    </Document>
  );
};

export default Template;

