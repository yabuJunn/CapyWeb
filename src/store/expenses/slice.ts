import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_STATE_EXPENSES, EXPENSES_SLICE_NAME } from "./constants";
import { plannedExpenseType, realExpenseType } from "./types";
import { Timestamp } from "firebase/firestore";

export const expensesSlice = createSlice({
    name: EXPENSES_SLICE_NAME,
    initialState: {
        ...DEFAULT_STATE_EXPENSES
    },
    reducers: {
        addRealExpense: (store, action: PayloadAction<realExpenseType>) => {
            store.realExpenses = [
                ...store.realExpenses,
                {
                    expenseCategory: action.payload.expenseCategory,
                    expenseSite: action.payload.expenseSite,
                    expenseDate: action.payload.expenseDate,
                    expenseAmount: action.payload.expenseAmount
                }
            ]
        },
        addPlannedExpense: (store, action: PayloadAction<plannedExpenseType>) => {
            store.plannedExpenses = [
                ...store.plannedExpenses,
                {
                    expenseCategory: action.payload.expenseCategory,
                    expenseSite: action.payload.expenseSite,
                    expenseDate: action.payload.expenseDate,
                    expenseAmount: action.payload.expenseAmount
                }
            ]
        },
        deletePlannedExpense: (store, action: PayloadAction<Timestamp>) => {
            store.plannedExpenses = store.plannedExpenses.filter(
                income => income.expenseDate !== action.payload
            );
        }
    }
})