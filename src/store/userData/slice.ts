import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_STATE_USER_DATA, USER_DATA_SLICE_NAME } from "./constants";
import { cardType, userDataType } from "./types";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { app } from "../../services/Firebase/Firebase";
import { RootState } from "../store";

const db = getFirestore(app);

// Acción para guardar datos en Firebase
export const saveUserDataToFirebase = createAsyncThunk(
    'userData/saveUserDataToFirebase',
    async (userData: userDataType, { getState }) => {
        const state = getState() as RootState;
        const userUID = state.userData.userUID;

        if (!userUID) return;

        try {
            const userRef = doc(db, "users", userUID);
            await setDoc(userRef, userData, { merge: true });
            console.log("Datos del usuario guardados en Firebase.");
        } catch (error) {
            console.error("Error al guardar los datos en Firebase:", error);
        }
    }
);

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
        },
    }
    // extraReducers: (builder) => {
    //     builder.addCase(saveUserDataToFirebase.fulfilled, (state, action) => {
    //         // Puedes manejar algún cambio en el estado si es necesario
    //     });
    // }
});

export const { changeUserEmail, changeUserName, changeUserUID, addUserCard, deleteUserCard } = userDataSlice.actions;