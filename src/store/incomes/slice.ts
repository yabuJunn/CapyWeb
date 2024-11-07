import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_STATE_INCOMES, INCOMES_SLICE_NAME } from "./constants";
import { plannedIncomeType, realIncomeType } from "./types";
import { Timestamp } from "firebase/firestore";

export const incomesSlice = createSlice({
    name: INCOMES_SLICE_NAME,
    initialState: {
        ...DEFAULT_STATE_INCOMES
    },
    reducers: {
        addRealIncome: (store, action: PayloadAction<realIncomeType>) => {
            store.realIncomes = [
                ...store.realIncomes,
                {
                    incomeCategory: action.payload.incomeCategory,
                    incomeEntrie: action.payload.incomeEntrie,
                    incomeDate: action.payload.incomeDate,
                    incomeAmount: action.payload.incomeAmount
                }
            ]
        },
        addPlannedIncome: (store, action: PayloadAction<plannedIncomeType>) => {
            store.plannedIncomes = [
                ...store.plannedIncomes,
                {
                    incomeCategory: action.payload.incomeCategory,
                    incomeEntrie: action.payload.incomeEntrie,
                    incomeDate: action.payload.incomeDate,
                    incomeAmount: action.payload.incomeAmount
                }
            ]
        },
        deletePlannedIncome: (store, action: PayloadAction<Timestamp>) => {
            store.plannedIncomes = store.plannedIncomes.filter(
                income => income.incomeDate !== action.payload
            );
        }
    }
})

export const { addPlannedIncome, addRealIncome } = incomesSlice.actions