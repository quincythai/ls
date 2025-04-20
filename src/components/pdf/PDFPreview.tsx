import { PDFViewer } from "@react-pdf/renderer";
import Template from "./Template";
import { Template1CoverPageContent, Template1Colors } from "@/types/pageConfigs";

interface PDFPreviewProps {
  config: Template1CoverPageContent;
  // templateColors: Template1Colors;
}

const PDFPreview = ({ config }: PDFPreviewProps) => {
  console.log("PDF Preview rendering...");

  return (
    <div className="w-full h-full">
      <PDFViewer className="w-full h-full">
        <Template config={config}/>
      </PDFViewer>
    </div>
  );
};

export default PDFPreview;
