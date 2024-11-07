import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_STATE_EXPENSES, EXPENSES_SLICE_NAME } from "./constants";

export const expensesSlice = createSlice({
    name: EXPENSES_SLICE_NAME,
    initialState: {
        ...DEFAULT_STATE_EXPENSES
    },
    reducers: {}
})