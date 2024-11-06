import { createSlice } from "@reduxjs/toolkit";
import { REWARDS_SLICE_NAME, DEFAULT_STATE_REWARDS } from "./constants";

export const rewardsSlice = createSlice({
    name: REWARDS_SLICE_NAME,
    initialState: {
        ...DEFAULT_STATE_REWARDS
    },
    reducers: {
        changeUserExpGained: (state, action) => {
            state.userExpGained += state.userExpGained + action.payload;
        }
    }
})

export const { changeUserExpGained } = rewardsSlice.actions