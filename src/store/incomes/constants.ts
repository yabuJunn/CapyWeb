import { incomeNameCategories, incomeNameEntries, incomesSliceType } from "./types"

export const INCOMES_SLICE_NAME = "incomes"

export const DEFAULT_STATE_INCOMES: incomesSliceType = {
    realIncomes: [
        {
            incomeCategory: incomeNameCategories.work,
            incomeEntrie: incomeNameEntries.nu,
            incomeDate: new Date("2024-9-10").toISOString(),
            incomeAmount: 3500,
            incomeColor: "#2D18BF"
        },
        {
            incomeCategory: incomeNameCategories.freelance,
            incomeEntrie: incomeNameEntries.masterCard,
            incomeDate: new Date("2024-10-15").toISOString(),
            incomeAmount: 1500,
            incomeColor: "#F9F9F9"
        },
        {
            incomeCategory: incomeNameCategories.freelance,
            incomeEntrie: incomeNameEntries.visa,
            incomeDate: new Date("2024-11-05").toISOString(),
            incomeAmount: 3000,
            incomeColor: "#F2622E"
        },
        {
            incomeCategory: incomeNameCategories.work,
            incomeEntrie: incomeNameEntries.efectivo,
            incomeDate: new Date("2024-12-20").toISOString(),
            incomeAmount: 2000,
            incomeColor: "#A8F25D"
        },
    ],
}