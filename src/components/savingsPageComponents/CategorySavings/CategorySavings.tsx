import './CategorySavings.css'

import { Label, Pie, PieChart, ResponsiveContainer } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../../../components/ui/chart"

import * as React from "react"
import { CategorySavingsProgressHint } from '../CategorySavingsProgressHint/CategorySavingsProgressHint'

// const chartData: Array<savingItemType> = [
//     { savingName: "Party", savingValue: 40, fill: "#2D18BF", percentage: "40%" },
//     { savingName: "Trip", savingValue: 28, fill: "#A8F25D", percentage: "28%" },
//     { savingName: "Motorbike", savingValue: 27, fill: "#F2622E", percentage: "27%" },
//     { savingName: "Others", savingValue: 5, fill: "#C4C4C4", percentage: "5%" },
// ]

interface savingItemType {
    savingName: string,
    savingValue: number,
    fill: string,
    percentage: string
}

const chartConfig = {
    savings: {
        label: "Savings",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

interface CategorySavingsProps {
    chartData: Array<savingItemType>,
}

export const CategorySavings = ({ chartData }: CategorySavingsProps) => {

    const totalSavings = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.savingValue, 0)
    }, [])

    return <>
        <div id='categorySavings'>
            <h3>Category Savings</h3>
            <div id='categorySavingsContent'>
                <div id='categorySavingsCircularProgressbarWrapper'>
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square w-full h-full"
                        style={{
                            height: '26vh',
                        }}
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie
                                    data={chartData}
                                    dataKey="savingValue"
                                    nameKey="savingName"
                                    innerRadius="55%"
                                    strokeWidth={6}
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
                                                    >
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            className="text-3xl font-bold"
                                                            fill="#FFFFFF" // Cambia el color a blanco
                                                        >
                                                            {totalSavings.toLocaleString()}
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 24}
                                                            className=""
                                                            fill="#FFFFFF"
                                                        >
                                                            Savings
                                                        </tspan>
                                                    </text>
                                                )
                                            }
                                        }}
                                    />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </div>

                <div id='categorySavingsCircularProgressHints'>
                    {chartData.map((saving) => {
                        return <CategorySavingsProgressHint hintBubbleColor={saving.fill} hintName={saving.savingName} hintPercentage={saving.percentage}></CategorySavingsProgressHint>
                    })}
                </div>
            </div>
        </div>
    </>
}