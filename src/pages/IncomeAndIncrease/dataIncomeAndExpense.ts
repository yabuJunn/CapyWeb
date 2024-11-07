import { Timestamp } from "firebase/firestore";

export interface expensesSliceType {
    realExpenses: Array<realExpenseType>,
    plannedExpenses: Array<plannedExpenseType>,
}

enum expenseNameCategories {
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




export const expensesData: expensesSliceType = {
    realExpenses: [
        {
            expenseCategory: expenseNameCategories.hogar,
            expenseSite: "Alquiler",
            expenseDate: Timestamp.fromDate(new Date("2024-10-05")),
            expenseAmount: 1200,
        },
        {
            expenseCategory: expenseNameCategories.mercado,
            expenseSite: "Supermercado Ara",
            expenseDate: Timestamp.fromDate(new Date("2024-10-12")),
            expenseAmount: 300,
        },
        {
            expenseCategory: expenseNameCategories.ropa,
            expenseSite: "Tienda de ropa Zara",
            expenseDate: Timestamp.fromDate(new Date("2024-10-15")),
            expenseAmount: 150,
        },
        {
            expenseCategory: expenseNameCategories.salidas,
            expenseSite: "Cine local",
            expenseDate: Timestamp.fromDate(new Date("2024-10-20")),
            expenseAmount: 50,
        },
    ],
    plannedExpenses: [
        {
            expenseCategory: expenseNameCategories.viajes,
            expenseSite: "Hotel Playa",
            expenseDate: Timestamp.fromDate(new Date("2024-11-05")),
            expenseAmount: 500,
        },
        {
            expenseCategory: expenseNameCategories.familia,
            expenseSite: "Regalo familiar",
            expenseDate: Timestamp.fromDate(new Date("2024-11-10")),
            expenseAmount: 200,
        },
        {
            expenseCategory: expenseNameCategories.Amigos,
            expenseSite: "Restaurante Amigos",
            expenseDate: Timestamp.fromDate(new Date("2024-11-15")),
            expenseAmount: 100,
        },
        {
            expenseCategory: expenseNameCategories.otro,
            expenseSite: "Donación",
            expenseDate: Timestamp.fromDate(new Date("2024-11-20")),
            expenseAmount: 80,
        },
    ],
};



///

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

export const incomesData: incomesSliceType = {
    realIncomes: [
        {
            incomeCategory: incomeNameCategories.work,
            incomeEntrie: incomeNameEntries.nu,
            incomeDate: Timestamp.fromDate(new Date("2024-10-10")),
            incomeAmount: 3500,
        },
        {
            incomeCategory: incomeNameCategories.freelance,
            incomeEntrie: incomeNameEntries.masterCard,
            incomeDate: Timestamp.fromDate(new Date("2024-10-15")),
            incomeAmount: 1500,
        },
        {
            incomeCategory: incomeNameCategories.work,
            incomeEntrie: incomeNameEntries.efectivo,
            incomeDate: Timestamp.fromDate(new Date("2024-10-20")),
            incomeAmount: 2000,
        },
    ],
    plannedIncomes: [
        {
            incomeCategory: incomeNameCategories.freelance,
            incomeEntrie: incomeNameEntries.visa,
            incomeDate: Timestamp.fromDate(new Date("2024-11-05")),
            incomeAmount: 1800,
        },
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
    ],
};