import { PDFViewer } from "@react-pdf/renderer";
import Template from "./Template";
import { Template1Colors, Template1CoverPageContent } from "@/types/pageConfigs";

interface PDFPreviewProps {
  config: Template1CoverPageContent;
  templateColors : Template1Colors;
}

const PDFPreview = ({ config, templateColors }: PDFPreviewProps) => {
  console.log("PDFPreview rendering...");

  return (
    <div className="w-full h-full">
      <PDFViewer className="w-full h-full">
        <Template config={config} templateColors={templateColors}/>
      </PDFViewer>
    </div>
  );
};

export default PDFPreview;
