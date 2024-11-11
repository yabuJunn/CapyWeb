import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_STATE_USER_DATA, USER_DATA_SLICE_NAME } from "./constants";
import { cardType } from "./types";

export const userDataSlice = createSlice({
    name: USER_DATA_SLICE_NAME,
    initialState: {
        ...DEFAULT_STATE_USER_DATA
    },
    reducers: {
        changeUserEmail: (state, action: PayloadAction<string>) => {
            state.userEmail = action.payload
        },
        changeUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        },
        changeUserUID: (state, action: PayloadAction<string>) => {
            state.userUID = action.payload
        },
        addUserCard: (state, action: PayloadAction<cardType>) => {
            state.cards = [
                ...state.cards,
                {
                    cardName: action.payload.cardName,
                    cardNumber: action.payload.cardNumber,
                    cardMoney: action.payload.cardMoney
                }
            ]
        },
        deleteUserCard: (state, action: PayloadAction<number>) => {
            state.cards = state.cards.filter(
                card => card.cardNumber !== action.payload
            );
        },
        changeUserTotalBalance: (state, action: PayloadAction<number>) => {
            state.totalBalance = action.payload
        },
        changeUserTotalIncome: (state, action: PayloadAction<number>) => {
            state.totalIncome = action.payload
        },
        changeUserTotalExpenses: (state, action: PayloadAction<number>) => {
            state.totalExpenses = action.payload
        }
    }
});

export const { changeUserEmail, changeUserName, changeUserUID, addUserCard, deleteUserCard } = userDataSlice.actions;