import { rewardsSliceType, saverLevelsNames } from "./types"

export const REWARDS_SLICE_NAME = "rewards"

export const DEFAULT_STATE_REWARDS: rewardsSliceType = {
    summary: {
        saverLevel: saverLevelsNames.level1,
        goalsCompleted: 0,
        accumulatedCapypoints: 0
    },
    saverLevels: [],
    missions: [
        {
            missionName: "Reduce costs",
            missionDescription: "Limit spending on entertainment and non-essential purchases to 15% of the monthly budget.",
            missionColor: "",
            missionCapypoints: 500,
            completed: false,
            missionId: 0
        },
        {
            missionName: "Save some money",
            missionDescription: "Save a specific amount at the end of each week (e.g. save $5 each week).",
            missionColor: "",
            missionCapypoints: 1000,
            completed: false,
            missionId: 1
        },
        {
            missionName: "Save some money from your work",
            missionDescription: "Save at least 20% of your monthly income in a savings account.",
            missionColor: "",
            missionCapypoints: 750,
            completed: false,
            missionId: 2
        },
        {
            missionName: "Achieve your goals",
            missionDescription: "Achieve at least 80% of the personal financial goals defined for the month.",
            missionColor: "",
            missionCapypoints: 3000,
            completed: false,
            missionId: 3
        },
        {
            missionName: "No impulse purchases",
            missionDescription: "Do not make impulse purchases for two weeks in a row.",
            missionColor: "",
            missionCapypoints: 1000,
            completed: false,
            missionId: 4
        },
        {
            missionName: "Reduce costs",
            missionDescription: "Reducir los gastos en alimentación en un 10% mediante una planificación eficiente.",
            missionColor: "",
            missionCapypoints: 0,
            completed: false,
            missionId: 5
        },
        {
            missionName: "A week...",
            missionDescription: "Spend at least one day a week without spending money on unnecessary things.",
            missionColor: "Spend at least one day a week without spending money on unnecessary things.",
            missionCapypoints: 0,
            completed: false,
            missionId: 6
        }
    ],
    exchangeData: [],
    userExpGained: 0
}