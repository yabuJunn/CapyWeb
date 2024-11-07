import { configureStore, createSlice } from '@reduxjs/toolkit';
import { savingsSlice } from './savings/slice';
import { rewardsSlice } from './rewards/slice';
import { expensesSlice } from './expenses/slice';
import { incomesSlice } from './incomes/slice';
import { userDataSlice } from './userData/slice';

const pruebaSlice = createSlice({
    name: "global",
    initialState: {
        addSavingModal: false
    },
    reducers: {
        changeAddSavingModal: (state, action) => {
            state.addSavingModal = action.payload;
        }
    }
});

export const { changeAddSavingModal } = pruebaSlice.actions;

export const store = configureStore({
    reducer: {
        global: pruebaSlice.reducer,
        savings: savingsSlice.reducer,
        rewards: rewardsSlice.reducer,
        expenses: expensesSlice.reducer,
        incomes: incomesSlice.reducer,
        userData: userDataSlice.reducer
    }
});

// Define y exporta RootState para usar el tipo en otros archivos
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export enum storeReducerNames {
    global = "global",
    savings = "savings",
    rewards = "rewards",
    expenses = "expenses",
    incomes = "incomes",
    userData = "userData"
}

import { saveUserDataToFirebase } from "./userData/slice";

// Mantener el estado anterior para detectar cambios
let prevState = store.getState();

store.subscribe(() => {
    const currentState = store.getState();

    // Compara el estado anterior con el estado actual para detectar cambios
    if (prevState.userData !== currentState.userData) {
        store.dispatch(saveUserDataToFirebase(currentState.userData));
    }

    // Actualiza prevState para la próxima comparación
    prevState = currentState;
});
