import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
  } from "recharts";
  import { useCallback, useState, useEffect } from "react";
  import html2canvas from "html2canvas-pro";
  import { generateRentBurdenData, type RentBurdenData } from "@/lib/utils";
  
  interface RentBurdenChartProps {
    onChartImageGenerated?: (img: string) => void;
    data?: RentBurdenData[];
    showImageOnly?: boolean;
  }
  
  export const RentBurdenChart = ({
    onChartImageGenerated,
    data = generateRentBurdenData(),
    showImageOnly = true,
  }: RentBurdenChartProps) => {
    const [chartImage, setChartImage] = useState<string | null>(null);
    const [chartRendered, setChartRendered] = useState(false);
    const [readyToCapture, setReadyToCapture] = useState(false);
  
    // Set a delay to ensure chart is fully rendered before capturing w/ html2canvas
    useEffect(() => {
      const timer = setTimeout(() => {
        setReadyToCapture(true);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);
  
    const chartRef = useCallback(
      (node: HTMLDivElement | null) => {
        if (node && readyToCapture) {
          html2canvas(node, {
            allowTaint: true,
            useCORS: true,
            logging: true,
          }).then((canvas) => {
            const imageData = canvas.toDataURL("image/png");
            setChartImage(imageData);
            setChartRendered(true);
            if (onChartImageGenerated) {
              onChartImageGenerated(imageData);
            }
          });
        }
      },
      [onChartImageGenerated, readyToCapture],
    );
  
    const renderLegend = (value: string) => {
      return (
        <div style={{ color: "#666", fontSize: 12, maxWidth: 150 }}>
          <div style={{ fontWeight: "bold" }}>
            {value === "burdened" ? "Burdened Household" : "Severely Burdened Households"}
          </div>
          <div style={{ fontSize: 11, marginTop: 2 }}>
            {value === "burdened"
              ? "(Rent 30% or more of income)"
              : "(Rent 50% or more of income)"}
          </div>
        </div>
      );
    };
  
    if (showImageOnly && chartImage) {
      return <img src={chartImage} alt="Rent burden chart" style={{ width: "100%" }} />;
    }
  
    return (
      <div>
        <div
          ref={chartRef}
          style={{ 
            width: "100%", 
            height: 300, 
            backgroundColor: "white", 
            margin: "0 auto",
            display: chartRendered && showImageOnly ? "none" : "block",
          }}
        >
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
              barGap={-50}       
              barCategoryGap="30%"  
              layout="horizontal"
            >
              <CartesianGrid strokeDasharray="3 2" />
              <XAxis dataKey="name" />
              <YAxis 
                domain={[0, 100]} 
                tickFormatter={(v) => `${v}%`}
                ticks={[0, 20, 40, 60, 80, 100]}
              />
              <Legend
                formatter={renderLegend}
                iconType="square"
                wrapperStyle={{  paddingRight: 30 }}
                layout="vertical"
                align="left"
                verticalAlign="middle"
              />
    
              <Bar
                dataKey="burdened"
                name="burdened"
                fill="#cae5c2"
                barSize={60}              
                label={{
                  position: "top",
                  formatter: (v: number) => `${v}%`,
                }}
              />
    
              <Bar
                dataKey="severelyBurdened"
                name="severelyBurdened"
                fill="#75b465"
                barSize={40}              
                label={{
                  position: "top",
                  formatter: (v: number) => `${v}%`,
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {chartImage && !showImageOnly && (
          <div style={{ marginTop: 20 }}>
            <img src={chartImage} alt="Rent burden chart" style={{ width: "100%" }} />
          </div>
        )}
      </div>
    );
  };
  