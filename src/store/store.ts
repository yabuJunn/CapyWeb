import { configureStore, createSlice } from '@reduxjs/toolkit'
import { savingsSlice } from './savings/slice'
import { rewardsSlice } from './rewards/slice'

const pruebaSlice = createSlice({
    name: "global",
    initialState: {
        addSavingModal: false
    },
    reducers: {
        changeAddSavingModal: (state, action) => {
            state.addSavingModal = action.payload
        }
    }
})

export const { changeAddSavingModal } = pruebaSlice.actions

export const store = configureStore({
    reducer: {
        global: pruebaSlice.reducer,
        savings: savingsSlice.reducer,
        rewards: rewardsSlice.reducer
    }
})