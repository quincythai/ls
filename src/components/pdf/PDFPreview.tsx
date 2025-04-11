import { PDFViewer } from "@react-pdf/renderer";
import Template from "./Template";

const PDFPreview = () => {
  return (
    <div className="w-full h-full">
      <PDFViewer className="w-full h-full">
        <Template />
      </PDFViewer>
    </div>
  );
};

export default PDFPreview; 