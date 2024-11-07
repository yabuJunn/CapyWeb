import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_STATE_INCOMES, INCOMES_SLICE_NAME } from "./constants";

export const incomesSlice = createSlice({
    name: INCOMES_SLICE_NAME,
    initialState: {
        ...DEFAULT_STATE_INCOMES
    },
    reducers: {}
})