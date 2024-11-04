import './savingsPage.css'

//Import Components
import Nav from '../../components/Nav/Nav'

import fireIconWhite from '../../assets/svg/fireIconWhite.svg'


import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'



import * as React from "react"

import { Label, Pie, PieChart, ResponsiveContainer } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../../components/ui/chart"

import { Progress } from '../../components/ui/progress'

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

//Import Imagenes

export const SavingsPage = () => {

    const totalSavings = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.savings, 0)
    }, [])

    return <>
        <main className='page'>

            <div id='marginPage'>
                <div id='TitleTextContainer'>
                    <h1>Savings</h1>
                </div>

                <div id='ContentContainer'>
                    <Nav></Nav>

                    <div id='SavingsCardsContainer'>
                        <div id='leftCardsContainer'>
                            <div id='summarySavingsContainer'>
                                <div id='generalSavings'>
                                    <h3>General Savings</h3>
                                    <div id='generalSavingsContent'>
                                        <div id='generalSavingsCircularProgressbarWrapper'>
                                            <CircularProgressbar
                                                value={90}
                                                text={"Savings"}
                                                styles={buildStyles({
                                                    rotation: 0.25,
                                                    strokeLinecap: 'butt',
                                                    pathTransitionDuration: 0.5,
                                                    pathColor: ' #2D18BF',
                                                    textColor: '#fff',
                                                    trailColor: '#A8F25D',
                                                    textSize: '14px',
                                                })}
                                                strokeWidth={15}
                                                className='generalSavingsCircularProgressbar'
                                            />
                                        </div>

                                        <div id='generalSavingsCircularProgressHints'>
                                            <div id='hin1' className='hint'>
                                                <div className='color' style={{ backgroundColor: '#2D18BF' }}></div>
                                                <p>Income</p>
                                                <p>78%</p>
                                            </div>

                                            <div id='hin2' className='hint'>
                                                <div className='color' style={{ backgroundColor: '#A8F25D' }}></div>
                                                <p>Savings</p>
                                                <p>22%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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
                            </div>

                            <div id='savingsGoalsContainer'>
                                <div id='savingsGoalsHeader'>
                                    <h3>Savings Goals</h3>
                                    <button>Create savings goal</button>
                                </div>

                                <div id='savingsGoalsListContainer'>
                                    <div className='savingGoalItem'>
                                        <div className='savingGoalHeader'>
                                            <div className='savingGoalTitle'>
                                                <img src={fireIconWhite} alt="" style={{ backgroundColor: '#2D18BF' }} />
                                                <div className='savingGoalTitleText'>
                                                    <h4>My Party</h4>
                                                    <p>Savings per month: $50,000 cop</p>
                                                </div>
                                            </div>

                                            <button>
                                                Edit
                                            </button>
                                        </div>

                                        <div className='savingGoalGraphContainer'>
                                            <div className='savingGoalGraphLabels'>
                                                <p>$100,000 cop</p>
                                                <p>Goal: $600,000 cop</p>
                                            </div>
                                            <Progress value={30} className="w-[90%] h-[4vh]" style={{ border: '3px white solid' }}></Progress>
                                        </div>
                                    </div>

                                    <div className='savingGoalItem'>
                                        <div className='savingGoalHeader'>
                                            <div className='savingGoalTitle'>
                                                <img src={fireIconWhite} alt="" style={{ backgroundColor: '#2D18BF' }} />
                                                <div className='savingGoalTitleText'>
                                                    <h4>My Party</h4>
                                                    <p>Savings per month: $50,000 cop</p>
                                                </div>
                                            </div>

                                            <button>
                                                Edit
                                            </button>
                                        </div>

                                        <div className='savingGoalGraphContainer'>
                                            <div className='savingGoalGraphLabels'>
                                                <p>$100,000 cop</p>
                                                <p>Goal: $600,000 cop</p>
                                            </div>
                                            <Progress value={30} className="w-[90%] h-[4vh]" style={{ border: '3px white solid' }}></Progress>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id='savingsHistoryContainer'>
                            <h3>Savings History</h3>
                            <div id='savingsHistoryItemsContainer'>
                                <div className='savingsHistoryItem'>
                                    <div className='savingsHistoryItemTitle'>
                                        <img src={fireIconWhite} alt="" style={{ backgroundColor: '#2D18BF' }} />
                                        <div className='savingsHistoryItemTitleText'>
                                            <h4>My Party</h4>
                                            <p>Savings per month: $50,000 cop</p>
                                        </div>
                                    </div>

                                    <p className='savingsHistoryItemAmount'>$50,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='background'>

            </div>
        </main>

    </>
}