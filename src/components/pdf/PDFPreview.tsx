import { PDFViewer } from "@react-pdf/renderer";
import Template from "./Template";
import Template2 from "./Template2";
import { Template1CoverPageContent, Template2CoverPageContent } from "@/types/pageConfigs";

interface PDFPreviewProps {
  config: Template1CoverPageContent | Template2CoverPageContent;
}

const PDFPreview = ({ config }: PDFPreviewProps) => {
  console.log("PDFPreview rendering...");

  return (
    <div className="w-full h-full">
      <PDFViewer className="w-full h-full">
        {"missionStatement" in config ? (
          <Template config={config as Template1CoverPageContent} />
        ) : (
          <Template2 config={config as Template2CoverPageContent} />
        )}
      </PDFViewer>
    </div>
  );
};

export default PDFPreview;
