import { Document } from "@react-pdf/renderer";
import Template1CoverPage from "./Template1CoverPage";
import HousingSection from "./sections/HousingSection";
import EmployeeOwnershipSection from "./sections/EmployeeOwnershipSection";
import ReferencePage from "./ReferencePage";
import { Template1CoverPageContent } from "@/types/pageConfigs";

interface Template1Props {
  config: Template1CoverPageContent;
}

const Template1 = ({ config }: Template1Props) => (
  <Document>
    <Template1CoverPage config={config} />
    {/* <HousingSection />
    <EmployeeOwnershipSection />
    <ReferencePage /> */}
  </Document>
);

export default Template1;
