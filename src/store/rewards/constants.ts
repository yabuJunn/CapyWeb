import { exchangeNameEnum, rewardsSliceType, saverLevelsImages, saverLevelsNames } from "./types"

export const REWARDS_SLICE_NAME = "rewards"

import amazonImage from '../../assets/desktop/png/Amazon.png'
import netflixImage from '../../assets/desktop/png/Netflix.png'
import farmatodoImage from '../../assets/desktop/png/Farmatodo.png'

export const DEFAULT_STATE_REWARDS: rewardsSliceType = {
    summary: {
        saverLevel: saverLevelsNames.level1,
        goalsCompleted: 0,
        accumulatedCapypoints: 0
    },
    saverLevels: [
        {
            name: saverLevelsNames.level1,
            image: saverLevelsImages.bronzeImage,
            expNecesary: 400
        },
        {
            name: saverLevelsNames.level2,
            image: saverLevelsImages.bronzeImage,
            expNecesary: 800
        },
        {
            name: saverLevelsNames.level3,
            image: saverLevelsImages.silverImage,
            expNecesary: 1400
        },
        {
            name: saverLevelsNames.level4,
            image: saverLevelsImages.silverImage,
            expNecesary: 2200
        },
        {
            name: saverLevelsNames.level5,
            image: saverLevelsImages.silverImage,
            expNecesary: 3200
        },
        {
            name: saverLevelsNames.level6,
            image: saverLevelsImages.goldImage,
            expNecesary: 4400
        },
        {
            name: saverLevelsNames.level7,
            image: saverLevelsImages.goldImage,
            expNecesary: 5800
        },
        {
            name: saverLevelsNames.level8,
            image: saverLevelsImages.diamondImage,
            expNecesary: 7400
        },
        {
            name: saverLevelsNames.level9,
            image: saverLevelsImages.goldImage,
            expNecesary: 9200
        },
        {
            name: saverLevelsNames.level10,
            image: saverLevelsImages.maxImage,
            expNecesary: 11200
        }
    ],
    missions: [
        {
            missionName: "Reduce costs",
            missionDescription: "Limit spending on entertainment and non-essential purchases to 15% of the monthly budget.",
            missionColor: "#2D18BF",
            missionCapypoints: 500,
            completed: false,
            missionId: 0,
            missionExp: 300
        },
        {
            missionName: "Save some money",
            missionDescription: "Save a specific amount at the end of each week (e.g. save $5 each week).",
            missionColor: "#CCFC56",
            missionCapypoints: 1000,
            completed: false,
            missionId: 1,
            missionExp: 360
        },
        {
            missionName: "Save some money from your work",
            missionDescription: "Save at least 20% of your monthly income in a savings account.",
            missionColor: "#F2622E",
            missionCapypoints: 750,
            completed: false,
            missionId: 2,
            missionExp: 430
        },
        {
            missionName: "Achieve your goals",
            missionDescription: "Achieve at least 80% of the personal financial goals defined for the month.",
            missionColor: "#2D18BF",
            missionCapypoints: 3000,
            completed: false,
            missionId: 3,
            missionExp: 500
        },
        {
            missionName: "No impulse purchases",
            missionDescription: "Do not make impulse purchases for two weeks in a row.",
            missionColor: "#CCFC56",
            missionCapypoints: 1000,
            completed: false,
            missionId: 4,
            missionExp: 350
        },
        {
            missionName: "Reduce costs",
            missionDescription: "Reducir los gastos en alimentación en un 10% mediante una planificación eficiente.",
            missionColor: "#F2622E",
            missionCapypoints: 1000,
            completed: false,
            missionId: 5,
            missionExp: 320
        },
        {
            missionName: "A week...",
            missionDescription: "Spend at least one day a week without spending money on unnecessary things.",
            missionColor: "#2D18BF",
            missionCapypoints: 500,
            completed: false,
            missionId: 6,
            missionExp: 280
        }
    ],
    exchangeData: [
        {
            name: exchangeNameEnum.amazon,
            redemptionCapypointsAmount: 1000,
            redemptionCost: 10000,
            isRedeemed: false,
            exchangeId: 0,
            imageSrc: amazonImage,
            backgroundColor: '#4A00E0',
            darkText: false
        },
        {
            name: exchangeNameEnum.netflix,
            redemptionCapypointsAmount: 1500,
            redemptionCost: 25000,
            isRedeemed: false,
            exchangeId: 1,
            imageSrc: netflixImage,
            backgroundColor: '#F2622E',
            darkText: false
        },
        {
            name: exchangeNameEnum.farmatodo,
            redemptionCapypointsAmount: 2000,
            redemptionCost: 20000,
            isRedeemed: false,
            exchangeId: 2,
            imageSrc: farmatodoImage,
            backgroundColor: '#A8F25D',
            darkText: true
        },
        {
            name: exchangeNameEnum.farmatodo,
            redemptionCapypointsAmount: 1300,
            redemptionCost: 13000,
            isRedeemed: false,
            exchangeId: 3,
            imageSrc: farmatodoImage,
            backgroundColor: '#A8F25D',
            darkText: true
        }
    ],
    userExpGained: 0
}