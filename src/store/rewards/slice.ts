import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { REWARDS_SLICE_NAME, DEFAULT_STATE_REWARDS } from "./constants";

export const completeMissionThunk = createAsyncThunk(
    `${REWARDS_SLICE_NAME}/completeMission`,
    (missionId, { dispatch, getState }) => {
        const state = getState();
        const mission = state.rewards.missions.find(mission => mission.missionId === missionId);
        if (mission && !mission.completed) {
            dispatch(changeUserExpGained(mission.missionCapypoints));
            dispatch(completeMission(missionId));
        }
    }
);

export const redeemedExchangeThunk = createAsyncThunk(
    `${REWARDS_SLICE_NAME}/redeemedExchange`,
    (exchangeId, { dispatch, getState }) => {
        const state = getState();
        const exchange = state.rewards.exchangeData.find(exchange => exchange.exchangeId === exchangeId);
        if (exchange && !exchange.isRedeemed) {
            dispatch(changeUserExpGained(-exchange.redemptionCost));
            dispatch(redeemedExchange(exchangeId));
        }
    }
);

export const rewardsSlice = createSlice({
    name: REWARDS_SLICE_NAME,
    initialState: {
        ...DEFAULT_STATE_REWARDS
    },
    reducers: {
        changeUserExpGained: (state, action) => {
            state.userExpGained += action.payload;
        },
        changeUserSaverLevel: (state, action) => {
            state.summary.saverLevel = action.payload;
        },
        changeUserGoalsCompleted: (state, action) => {
            state.summary.goalsCompleted += action.payload;
        },
        changeUserAccumulatedCapypoints: (state, action) => {
            state.summary.accumulatedCapypoints += action.payload;
        },
        completeMission: (state, action) => {
            const mission = state.missions.find(mission => mission.missionId === action.payload);
            if (mission) {
                mission.completed = true;
            }
        },
        redeemedExchange: (state, action) => {
            const exchange = state.exchangeData.find(exchange => exchange.exchangeId === action.payload);
            if (exchange) {
                exchange.isRedeemed = true;
            }
        }
    }
});

export const {
    changeUserExpGained,
    changeUserSaverLevel,
    changeUserGoalsCompleted,
    changeUserAccumulatedCapypoints,
    completeMission,
    redeemedExchange
} = rewardsSlice.actions;
