import { expenseNameCategories, expensesSliceType } from "./types"
import { incomeNameEntries } from "../incomes/types"

export const EXPENSES_SLICE_NAME = "expenses"

export const DEFAULT_STATE_EXPENSES: expensesSliceType = {
    realExpenses: [
        {
            expenseCategory: expenseNameCategories.Amigos,
            expenseSite: "Cine local",
            expenseDate: new Date("2024-08-20").toISOString(),
            expenseAmount: 500,
            expenseColor: "#FFFFFF"
        },
        {
            expenseCategory: expenseNameCategories.salidas,
            expenseSite: "Cine local",
            expenseDate: new Date("2024-09-20").toISOString(),
            expenseAmount: 200,
            expenseColor: "#2D18BF"
        },
        {
            expenseCategory: expenseNameCategories.hogar,
            expenseSite: "Alquiler",
            expenseDate: new Date("2024-10-05").toISOString(),
            expenseAmount: 1200,
            expenseColor: "#A8F25D"
        },
        {
            expenseCategory: expenseNameCategories.mercado,
            expenseSite: "Supermercado Ara",
            expenseDate: new Date("2024-10-12").toISOString(),
            expenseAmount: 300,
            expenseColor: "#F9F9F9"
        },
        {
            expenseCategory: expenseNameCategories.salidas,
            expenseSite: "Cine local",
            expenseDate: new Date("2024-10-20").toISOString(),
            expenseAmount: 50,
            expenseColor: "#2D18BF"
        },
        {
            expenseCategory: expenseNameCategories.ropa,
            expenseSite: "Tienda de ropa Zara",
            expenseDate: new Date("2024-12-15").toISOString(),
            expenseAmount: 150,
            expenseColor: "#F2622E"
        },

    ],
    plannedExpenses: [
        {
            expenseCategory: expenseNameCategories.viajes,
            expenseSite: "Hotel Playa",
            expenseDate: new Date("2024-11-05").toISOString(),
            expenseAmount: 500,
            expenseEntrie: incomeNameEntries.masterCard
        },
        {
            expenseCategory: expenseNameCategories.familia,
            expenseSite: "Regalo familiar",
            expenseDate: new Date("2024-11-10").toISOString(),
            expenseAmount: 200,
            expenseEntrie: incomeNameEntries.visa
        },
        {
            expenseCategory: expenseNameCategories.Amigos,
            expenseSite: "Restaurante Amigos",
            expenseDate: new Date("2024-11-15").toISOString(),
            expenseAmount: 100,
            expenseEntrie: incomeNameEntries.debito
        },
        {
            expenseCategory: expenseNameCategories.otro,
            expenseSite: "Donación",
            expenseDate: new Date("2024-11-20").toISOString(),
            expenseAmount: 80,
            expenseEntrie: incomeNameEntries.efectivo
        },
    ]
}