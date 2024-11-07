import * as React from "react";
/*import { TrendingUp } from "lucide-react";*/
import { Label, Pie, PieChart } from "recharts";

import { useState } from "react";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../ui/chart";

import "./PieChart2.css";

const chartData = [
  { browser: "Home", visitors: 275, fill: "#2d18bf" },
  { browser: "Market", visitors: 200, fill: "#a8f25d" },
  { browser: "Clothes", visitors: 287, fill: "#f2622e" },
  { browser: "Other", visitors: 173, fill: "#c4c4c4" },
];

const chartData2 = [
  { browser: "Home", visitors: 456, fill: "#2d18bf" },
  { browser: "Market", visitors: 444, fill: "#a8f25d" },
  { browser: "Clothes", visitors: 868, fill: "#f2622e" },
  { browser: "Other", visitors: 25, fill: "#c4c4c4" },
];

const totalVisitors1 = chartData.reduce(
  (total, data) => total + data.visitors,
  0
);

const totalVisitors2 = chartData2.reduce(
  (total, data) => total + data.visitors,
  0
);

const chartDataWithPercentage = chartData.map((data) => ({
  ...data,
  percentage: Math.round((data.visitors / totalVisitors1) * 100),
}));

const chartDataWithPercentage2 = chartData2.map((data) => ({
  ...data,
  percentage: Math.round((data.visitors / totalVisitors2) * 100),
}));

console.log(chartDataWithPercentage);
console.log(chartDataWithPercentage2);

const chartConfig = {
  visitors: {
    label: "July",
  },
  home: {
    label: "Home",
    color: "hsl(var(--chart-1))",
  },
  market: {
    label: "Market",
    color: "hsl(var(--chart-2))",
  },
  clothes: {
    label: "Clothes",
    color: "hsl(var(--chart-3))",
  },
  other: {
    label: "Other",
    color: "#c4c4c4",
  },
} satisfies ChartConfig;

export function PieChart2() {
  const [selectedOption, setSelectedOption] = useState("July");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const chartDataOptions =
    selectedOption === "July"
      ? chartDataWithPercentage
      : chartDataWithPercentage2;

  const totalVisitors = React.useMemo(() => {
    return chartDataOptions.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartDataOptions]);

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
            data={chartDataOptions}
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
                        Expenses
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
        <select
          className="select-expenses-pie"
          name=""
          id=""
          onChange={handleSelectChange}
        >
          <option value="July">July</option>
          <option value="Igresos">August</option>
        </select>
        <ul className="container-info-pie-chart">
          {chartDataOptions.map((data, index) => (
            <li key={index} className="info-pie-chart-color">
              <div>
                <div
                  className={`ball-name-chart ${
                    data.browser === "Home"
                      ? "ball-name-chart-color1"
                      : data.browser === "Market"
                      ? "ball-name-chart-color2"
                      : data.browser === "Clothes"
                      ? "ball-name-chart-color3"
                      : data.browser === "Other"
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
