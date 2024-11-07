"use client";

/*import { TrendingUp } from "lucide-react";*/
import {   CartesianGrid, XAxis, LineChart, Line } from "recharts";
import "./ExpenseGraphic.css"

  

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../ui/chart"; 



export const description = "A simple area chart";

export interface expensesGraphicType {
  expenseMonth: string,
  expenseAmount: number
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

interface expenseGraphicProps {
  chartData: Array<expensesGraphicType>
}

export function AreaChartComponent({chartData}: expenseGraphicProps) {
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
              /*dataKey="month"*/
              dataKey="expenseMonth"                            
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: 'white' }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              /*dataKey="desktop"*/
              dataKey="expenseAmount"
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

export const ExpensesGraphic = () => {
  return (
    <div className="grafic-card">      
      <AreaChartComponent chartData={[]} />
    </div>
  );
};
