import * as React from "react";
/*import { TrendingUp } from "lucide-react";*/
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../ui/chart";

import "./PieChart2.css";

export const description = "A donut chart with text";

const chartData = [
  { browser: "Hogar", visitors: 275, fill: "#2d18bf" },
  { browser: "Mercado", visitors: 200, fill: "#a8f25d" },
  { browser: "Ropa", visitors: 287, fill: "#f2622e" },
  { browser: "Otro", visitors: 173, fill: "#c4c4c4" },
];

const totalVisitors = chartData.reduce(
  (total, data) => total + data.visitors,
  0
);

const chartDataWithPercentage = chartData.map((data) => ({
  ...data,
  percentage: Math.round((data.visitors / totalVisitors) * 100),
}));

console.log(chartDataWithPercentage);

const chartConfig = {
  visitors: {
    label: "Gastos",
  },
  home: {
    label: "Hogar",
    color: "hsl(var(--chart-1))",
  },
  market: {
    label: "Mercado",
    color: "hsl(var(--chart-2))",
  },
  clothes: {
    label: "Ropa",
    color: "hsl(var(--chart-3))",
  },
  other: {
    label: "Otro",
    color: "#c4c4c4",
  },
} satisfies ChartConfig;

export function PieChart2() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div className="pie-card-container">
      <ChartContainer
        config={chartConfig}
        className="aspect-square w-[60%] max-h-[260px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-white"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="text-3xl font-bold fill-white"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-white"
                      >
                        Gastos
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="pie-card-right">
        <select className="select-piechart" name="" id="">
          Seleccionar
        </select>
        <ul className="container-info-pie-chart">
          {chartDataWithPercentage.map((data, index) => (
            <li key={index} className="info-pie-chart-color">
              <div>
                <div
                  className={`ball-name-chart ${
                    data.browser === "Hogar"
                      ? "ball-name-chart-color1"
                      : data.browser === "Mercado"
                      ? "ball-name-chart-color2"
                      : data.browser === "Ropa"
                      ? "ball-name-chart-color3"
                      : data.browser === "Otro"
                      ? "ball-name-chart-color4"
                      : "all-name-chart-color4"
                  }`}
                ></div>
                {data.browser}
              </div>
              {data.percentage}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
