import { Timestamp } from "firebase/firestore"
import { incomeNameCategories, incomeNameEntries, incomesSliceType } from "./types"

export const INCOMES_SLICE_NAME = "incomes"

export const DEFAULT_STATE_INCOMES: incomesSliceType = {
    realIncomes: [
        {
            incomeCategory: incomeNameCategories.work,
            incomeEntrie: incomeNameEntries.nu,
            incomeDate: Timestamp.fromDate(new Date("2024-9-10")),
            incomeAmount: 3500,
            incomeColor: "#2D18BF"
        },
        {
            incomeCategory: incomeNameCategories.freelance,
            incomeEntrie: incomeNameEntries.masterCard,
            incomeDate: Timestamp.fromDate(new Date("2024-10-15")),
            incomeAmount: 1500,
            incomeColor: "#F9F9F9"
        },
        {
            incomeCategory: incomeNameCategories.freelance,
            incomeEntrie: incomeNameEntries.visa,
            incomeDate: Timestamp.fromDate(new Date("2024-11-05")),
            incomeAmount: 3000,
            incomeColor: "#F2622E"
        },
        {
            incomeCategory: incomeNameCategories.work,
            incomeEntrie: incomeNameEntries.efectivo,
            incomeDate: Timestamp.fromDate(new Date("2024-12-20")),
            incomeAmount: 2000,
            incomeColor: "#A8F25D"
        },

    ],
    plannedIncomes: [

        {
            incomeCategory: incomeNameCategories.work,
            incomeEntrie: incomeNameEntries.debito,
            incomeDate: Timestamp.fromDate(new Date("2024-11-10")),
            incomeAmount: 3000,
        },
        {
            incomeCategory: incomeNameCategories.freelance,
            incomeEntrie: incomeNameEntries.otro,
            incomeDate: Timestamp.fromDate(new Date("2024-11-15")),
            incomeAmount: 1200,
        },
    ]
}