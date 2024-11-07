"use client";

/*import { TrendingUp } from "lucide-react";*/
import {   CartesianGrid, XAxis, LineChart, Line } from "recharts";
import "./IncomesGraphic.css"

  

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../ui/chart"; 


export const description = "A simple area chart";

export interface incomeGraphicType {
  incomeMonth: string,
  incomeAmount: number
}

/*const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 210 },
  { month: "August", desktop: 200 },
  { month: "September", desktop: 180 },
  { month: "October", desktop: 190 },
];*/

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(0, 0%, 100%)",
  },
} satisfies ChartConfig;

interface incomeGraphicProps {
  chartData: Array<incomeGraphicType>
}

export function AreaChartComponent({chartData}: incomeGraphicProps) {
  return (
    
     
        <ChartContainer config={chartConfig} className="expense-container">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false}  />
            <XAxis
              dataKey="incomeMonth"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="incomeAmount"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              strokeWidth={2.5}
            />
          </LineChart>
        </ChartContainer>
      
    
  );
}

export const IncomesGraphic = () => {
  return (
    <div className="grafic-card">      
      <AreaChartComponent chartData={[]} />
    </div>
  );
};
