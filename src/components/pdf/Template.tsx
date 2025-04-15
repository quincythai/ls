import { Document } from "@react-pdf/renderer";
import Template1CoverPage from "./Template1CoverPage";
import HousingSection from "./sections/HousingSection";
import EmployeeOwnershipSection from "./sections/EmployeeOwnershipSection";
import ReferencePage from "./ReferencePage";

const Template1 = () => (
  <Document>
    <Template1CoverPage />
    <HousingSection />
    <EmployeeOwnershipSection />
    <ReferencePage />
  </Document>
);

export default Template1;
