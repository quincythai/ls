import { PDFViewer } from "@react-pdf/renderer";
import Template from "./Template";
import { Template1CoverPageContent } from "@/types/pageConfigs";

interface PDFPreviewProps {
  config: Template1CoverPageContent;
}

const PDFPreview = ({ config }: PDFPreviewProps) => {
  console.log("PDFPreview rendering...");

  return (
    <div className="w-full h-full">
      <PDFViewer className="w-full h-full">
        <Template config={config} />
      </PDFViewer>
    </div>
  );
};

export default PDFPreview;
