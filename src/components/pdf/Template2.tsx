import { Document } from "@react-pdf/renderer";
import Template2CoverPage from "./Template2CoverPage";
import { Template2CoverPageContent } from "@/types/pageConfigs";

interface Template2Props {
  config: Template2CoverPageContent;
}

const Template2 = ({ config }: Template2Props) => {
  return (
    <Document>
      <Template2CoverPage config={config} />
    </Document>
  );
};

export default Template2; 