import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_STATE_SAVINGS, SAVINGS_SLICE_NAME } from "./constants";

export const savingsSlice = createSlice({
    name: SAVINGS_SLICE_NAME,
    initialState: {
        ...DEFAULT_STATE_SAVINGS
    },
    reducers: {
        addSaving: (state, action) => {
            state.savingsData = [
                {
                    savingName: action.payload.name,
                    savingValue: 0,
                    savingColor: action.payload.color,
                    monthlySaving: action.payload.monthlySaving,
                    savingActualFee: 0,
                    savingTotalFee: action.payload.savingTotalFee,
                    savingHistory: []
                },
                ...state.savingsData
            ]
        },
    }
})

export const { addSaving } = savingsSlice.actions