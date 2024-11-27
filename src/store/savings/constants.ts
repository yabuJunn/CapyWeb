import { savingSliceType } from './types'

import fireIconWhite from '../../assets/desktop/svg/fireIconWhite.svg'
import planetIconBlack from '../../assets/desktop/svg/planetIconBlack.svg'
import KeyIconWhite from '../../assets/desktop/svg/KeyIconWhite.svg'
import { Timestamp } from 'firebase/firestore'

export const SAVINGS_SLICE_NAME = "savings"

export const DEFAULT_STATE_SAVINGS: savingSliceType = {
    savingsData: [
        {
            savingName: "Party",
            savingValue: 100000,
            savingColor: "#2D18BF",
            // savingPercentage: "40%",
            // savingImage: fireIconWhite,
            monthlySaving: 50000,
            savingActualFee: 100000,
            savingTotalFee: 600000,
            savingHistory: [
                {
                    date: Timestamp.fromDate(new Date("2024-9-04")),
                    deposit: 50000
                },
                {
                    date: Timestamp.fromDate(new Date("2024-8-04")),
                    deposit: 50000
                }
            ]
        },
        {
            savingName: "Trip",
            savingValue: 40000,
            savingColor: "#A8F25D",
            monthlySaving: 20000,
            savingActualFee: 40000,
            savingTotalFee: 480000,
            savingHistory: [
                {
                    date: Timestamp.fromDate(new Date("2024-9-02")),
                    deposit: 20000
                },
                {
                    date: Timestamp.fromDate(new Date("2024-10-03")),
                    deposit: 20000
                },
            ]
        },
        {
            savingName: "Motorbike",
            savingValue: 10000,
            savingColor: "#F2622E",
            monthlySaving: 100000,
            savingActualFee: 400000,
            savingTotalFee: 1000000,
            savingHistory: [
                {
                    date: Timestamp.fromDate(new Date("2024-8-04")),
                    deposit: 100000
                },
            ]
        },
        {
            savingName: "Others",
            savingValue: 0,
            savingColor: "#C4C4C4",
            monthlySaving: 0,
            savingActualFee: 0,
            savingTotalFee: 0,
            savingHistory: []
        }
    ]
}