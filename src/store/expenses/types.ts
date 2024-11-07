import { Timestamp } from "firebase/firestore"

export interface expensesSliceType {
    realExpenses: Array<realExpenseType>,
    plannedExpenses: Array<plannedExpenseType>,
}

export enum expenseNameCategories {
    hogar = "Hogar",
    mercado = "Mercado",
    ropa = "Ropa",
    salidas = "Salidas",
    viajes = "Viajes",
    familia = "Familia",
    Amigos = "Amigos",
    otro = "Otro"
}

export interface realExpenseType {
    expenseCategory: expenseNameCategories,
    expenseSite: string,
    expenseDate: Timestamp,
    expenseAmount: number
}

export interface plannedExpenseType {
    expenseCategory: expenseNameCategories,
    expenseSite: string,
    expenseDate: Timestamp,
    expenseAmount: number
}