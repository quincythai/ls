// utils/chartUtils.tsx
import html2canvas from "html2canvas-pro";
import ReactDOM from "react-dom/client";
import { RentBurdenData } from "@/utils/sharedUtils";
import { RentBurdenChart } from "@/components/ui/RentBurdenChart";
import { useEffect, useState } from "react";

export function generateRentBurdenChartImage(data: RentBurdenData[]): Promise<string> {
    return new Promise((resolve) => {
      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.left = "-9999px";
      container.style.top = "0";
      container.style.width = "800px";
      container.style.height = "500px";
      container.style.backgroundColor = "white";
      document.body.appendChild(container);
  
      const ChartWrapper = () => {
        const [isReady, setIsReady] = useState(false);
  
        // Ensure the chart has fully rendered before capturing
        useEffect(() => {
          const timer = setTimeout(() => {
            setIsReady(true);
          }, 500); // You can increase this to 800-1000ms if needed
  
          return () => clearTimeout(timer);
        }, []);
  
        useEffect(() => {
          if (!isReady) return;
  
          html2canvas(container, {
            useCORS: true,
            backgroundColor: "white",
          }).then((canvas) => {
            const imageData = canvas.toDataURL("image/png");
            resolve(imageData);
            document.body.removeChild(container);
          });
        }, [isReady]);
  
        return (
          <div style={{ width: "100%", height: "100%" }}>
            <RentBurdenChart data={data} showImageOnly={false} />
          </div>
        );
      };
  
      const root = ReactDOM.createRoot(container);
      root.render(<ChartWrapper />);
    });
  }
  