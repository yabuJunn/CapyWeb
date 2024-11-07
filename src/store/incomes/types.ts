import { Timestamp } from "firebase/firestore"

export interface incomesSliceType {
    realIncomes: Array<realIncomeType>,
    plannedIncomes: Array<plannedIncomeType>
}

export interface realIncomeType {
    incomeCategory: incomeNameCategories,
    incomeEntrie: incomeNameEntries,
    incomeDate: Timestamp,
    incomeAmount: number
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
    nu = "NU",
    masterCard = "MasterCard",
    visa = "VISA",
    efectivo = "Efectivo",
    debito = "Debito",
    otro = "Otro"
}