// src/components/pdf/PageEditors.tsx
import { pageRegistry } from "@/types/templateConfig";
import { PageContent } from "@/types/templateConfig";
import { TemplateColors } from "@/types/templateConfig";

interface PageEditorsProps {
  pages: PageContent[];
  templateColors: TemplateColors;
  onUpdateContent: (pageIndex: number, newContent: any) => void;
}

export const PageEditors = ({
  pages,
  templateColors,
  onUpdateContent,
}: PageEditorsProps) => {
  if (!pages || pages.length === 0) {
    return <div className="p-4 text-center">No pages to edit.</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      {pages.map((page, index) => {
        const EditorComponent = pageRegistry[page.type]
          .editor as React.ComponentType<any>;

        if (!EditorComponent) return null;

        return (
          <div key={page.type + "-" + index}>
            <h3 className="text-xl font-semibold mb-2">
              {pageRegistry[page.type].label}
            </h3>
            <EditorComponent
              key={index}
              content={page.content}
              templateColors={templateColors}
              onChange={(newContent: any) => onUpdateContent(index, newContent)}
            />
          </div>
        );
      })}
    </div>
  );
};
