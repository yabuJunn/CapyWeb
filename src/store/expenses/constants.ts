import { Timestamp } from "firebase/firestore"
import { expenseNameCategories, expensesSliceType } from "./types"
import { incomeNameEntries } from "../incomes/types"

export const EXPENSES_SLICE_NAME = "expenses"

export const DEFAULT_STATE_EXPENSES: expensesSliceType = {
    realExpenses: [
        {
            expenseCategory: expenseNameCategories.friends,
            expenseSite: "Cine local",
            expenseDate: Timestamp.fromDate(new Date("2024-08-20")),
            expenseAmount: 500,
            expenseColor: "#FFFFFF"
        },
        {
            expenseCategory: expenseNameCategories.salidas,
            expenseSite: "Cine local",
            expenseDate: Timestamp.fromDate(new Date("2024-09-20")),
            expenseAmount: 200,
            expenseColor: "#2D18BF"
        },
        {
            expenseCategory: expenseNameCategories.hogar,
            expenseSite: "Alquiler",
            expenseDate: Timestamp.fromDate(new Date("2024-10-05")),
            expenseAmount: 1200,
            expenseColor: "#A8F25D"
        },
        {
            expenseCategory: expenseNameCategories.mercado,
            expenseSite: "Supermercado Ara",
            expenseDate: Timestamp.fromDate(new Date("2024-10-12")),
            expenseAmount: 300,
            expenseColor: "#F9F9F9"
        },
        {
            expenseCategory: expenseNameCategories.salidas,
            expenseSite: "Cine local",
            expenseDate: Timestamp.fromDate(new Date("2024-10-20")),
            expenseAmount: 50,
            expenseColor: "#2D18BF"
        },
        {
            expenseCategory: expenseNameCategories.ropa,
            expenseSite: "Tienda de ropa Zara",
            expenseDate: Timestamp.fromDate(new Date("2024-12-15")),
            expenseAmount: 150,
            expenseColor: "#F2622E"
        },

    ],
    plannedExpenses: [
        {
            expenseCategory: expenseNameCategories.trips,
            expenseSite: "Hotel Playa",
            expenseDate: Timestamp.fromDate(new Date("2024-11-05")),
            expenseAmount: 500,
            expenseEntrie: incomeNameEntries.masterCard
        },
        {
            expenseCategory: expenseNameCategories.family,
            expenseSite: "Regalo familiar",
            expenseDate: Timestamp.fromDate(new Date("2024-11-10")),
            expenseAmount: 200,
            expenseEntrie: incomeNameEntries.visa
        },
        {
            expenseCategory: expenseNameCategories.friends,
            expenseSite: "Restaurante Amigos",
            expenseDate: Timestamp.fromDate(new Date("2024-11-15")),
            expenseAmount: 100,
            expenseEntrie: incomeNameEntries.debito
        },
        {
            expenseCategory: expenseNameCategories.others,
            expenseSite: "Donación",
            expenseDate: Timestamp.fromDate(new Date("2024-11-20")),
            expenseAmount: 80,
            expenseEntrie: incomeNameEntries.efectivo
        },
    ]
}