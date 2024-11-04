import './CategorySavings.css'

import { Label, Pie, PieChart, ResponsiveContainer } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../../../components/ui/chart"

import * as React from "react"

const chartData = [
    { browser: "Party", savings: 40, fill: "#2D18BF" },
    { browser: "Trip", savings: 28, fill: "#A8F25D" },
    { browser: "Motorbike", savings: 27, fill: "#F2622E" },
    { browser: "Others", savings: 5, fill: "#C4C4C4" },
]
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

export const CategorySavings = () => {

    const totalSavings = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.savings, 0)
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
                                    dataKey="savings"
                                    nameKey="browser"
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
                    <div id='hin1' className='hint'>
                        <div className='color' style={{ backgroundColor: '#2D18BF' }}></div>
                        <p>Party</p>
                        <p>40%</p>
                    </div>

                    <div id='hin2' className='hint'>
                        <div className='color' style={{ backgroundColor: '#A8F25D' }}></div>
                        <p>Trip</p>
                        <p>28%</p>
                    </div>

                    <div id='hin3' className='hint'>
                        <div className='color' style={{ backgroundColor: '#F2622E' }}></div>
                        <p>Motorbike</p>
                        <p>27%</p>
                    </div>

                    <div id='hin4' className='hint'>
                        <div className='color' style={{ backgroundColor: '#C4C4C4' }}></div>
                        <p>Others</p>
                        <p>5%</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}