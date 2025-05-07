import { PDFViewer } from "@react-pdf/renderer";
import { pageRegistry } from "@/types/templateConfig";
import {
  Template1CoverPageContent,
} from "@/types/PageConfigs/Template1Config";
import { PageContent } from "@/types/templateConfig";
import { Document } from "@react-pdf/renderer";
import { TemplateColors } from "@/types/templateConfig";


interface PDFPreviewProps {
  pages: PageContent[];
  templateColors: TemplateColors;
}

const PDFPreview = ({ pages, templateColors }: PDFPreviewProps) => {
  if (!pages || pages.length === 0) {
    return <div className="p-4 text-center">No pages to preview.</div>;
  }

  console.log("PDFPreview pages:", pages);

  return (
    <div className="w-full h-full">
      <PDFViewer className="w-full h-full">
        <Document>

          {pages.map((page, idx) => {
            const Component = pageRegistry[page.type]
              .renderer as React.ComponentType<any>;

            return (
              <Component
                key={idx}
                config={page.content}
                templateColors={templateColors}
              />
            );
          })}
        </Document>
      </PDFViewer>
    </div>
  );
};

export default PDFPreview;
