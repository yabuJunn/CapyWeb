import { configureStore, createSlice } from '@reduxjs/toolkit'
import { savingsSlice } from './savings/slice'

const pruebaSlice = createSlice({
    name: "prueba",
    initialState: {
        message: "Estado inicial desde el reducer"
    },
    reducers: {
        changeMessage: (state, action) => {
            state.message = action.payload
        },
        clearMessage: (state) => {
            state.message = ""
        }
    }
})

export const { changeMessage, clearMessage } = pruebaSlice.actions

export const store = configureStore({
    reducer: {
        prueba: pruebaSlice.reducer,
        savings: savingsSlice.reducer
    }
})

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch