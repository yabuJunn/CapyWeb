export interface rewardsSliceType {
    summary: {
        saverLevel: saverLevelsNames,
        goalsCompleted: number,
        accumulatedCapypoints: number
    },
    saverLevels: Array<{
        name: saverLevelsNames,
        image: saverLevelsImages
    }>,
    missions: Array<missionType>
    exchangeData: Array<exchangeType>,
    userExpGained: number
}

export enum saverLevelsNames {
    level1 = "Saver Novice",
    level2 = "Budget Beginner",
    level3 = "Thrifty Trainee",
    level4 = "Clever Planner",
    level5 = "Frugal Financier",
    level6 = "Smart Investor",
    level7 = "Savings Strategist",
    level8 = "Financial Guide",
    level9 = "Wealth Architect",
    level10 = "Master of Savings"
}

export enum saverLevelsImages {
    level1Image = "0",
    level2Image = "1",
    level3Image = "2",
    level4Image = "3",
    level5Image = "4",
    level6Image = "5",
    level7Image = "6",
    level8Image = "7",
    level9Image = "8",
    level10Image = "9"
}

export interface missionType {
    missionName: string,
    missionDescription: string,
    missionColor: string,
    missionCapypoints: number,
    completed: boolean,
    missionId: number,
    missionExp: number
}

export interface exchangeType {
    name: string,
    redemptionCapypointsAmount: number,
    redemptionCost: number,
    isRedeemed: boolean,
    exchangeId: number
}