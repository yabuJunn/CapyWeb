import { Timestamp } from "firebase/firestore"

export interface incomesSliceType {
    realIncomes: Array<realIncomeType>,
    plannedIncomes: Array<plannedIncomeType>
}

export interface realIncomeType {
    incomeCategory: incomeNameCategories,
    incomeEntrie: incomeNameEntries,
    incomeDate: Timestamp,
    incomeAmount: number,
    incomeColor: string
    incomeImage?: string
}

export interface plannedIncomeType {
    incomeCategory: incomeNameCategories,
    incomeEntrie: incomeNameEntries,
    incomeDate: Timestamp,
    incomeAmount: number
}

export enum incomeNameCategories {
    work = "Work",
    freelance = "Freelance"
}

export enum incomeNameEntries {
    cards = "Cards",
    nu = "NU",
    masterCard = "MasterCard",
    visa = "VISA",
    efectivo = "Efectivo",
    debito = "Debito",
    otro = "Otro"
}