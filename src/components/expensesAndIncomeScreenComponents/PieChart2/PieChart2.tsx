import * as React from "react";
/*import { TrendingUp } from "lucide-react";*/
import { Label, Pie, PieChart } from "recharts";
import { ExpenseData } from "../ExpensesGraphic/ExpensesGraphic";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";
import "./PieChart2.css";
import { expenseCategoryType } from "../../../pages/IncomeAndIncrease/ExpensesAndIncome";

interface PieChart2Props {
  data: expenseCategoryType;
}

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

export const PieChart2: React.FC<PieChart2Props> = ({ data }) => {
  /*
  const [selectedOption, setSelectedOption] = useState("July");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const chartDataOptions = selectedOption === "July" ? chartData : chartData2;
  */

  // const totalVisitors = React.useMemo(() => {
  //   return data.reduce((acc, curr) => acc + curr.totalAmount, 0);
  // }, [data]);

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
            data={data.categoryMappedData}
            dataKey="expenseCategoryValue"
            nameKey="expenseCategoryName"
            innerRadius={70}
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
                        ${data.totalCategoryExpenses}
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
        <select className="select-expenses-pie" name="" id="">
          <option value="July">July</option>
          <option value="Igresos">August</option>
        </select>
        <ul className="container-info-pie-chart">
            {/* {chartDataOptions.map((data, index) => (
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
          ))} */}
        </ul>
      </div>
    </div>
  );
};
