import { combineReducers, configureStore } from '@reduxjs/toolkit'
import jokesSlice from './redux/jokes.slice'

const rootReducer = combineReducers({
    jokes: jokesSlice
})


export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']