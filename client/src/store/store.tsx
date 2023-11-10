import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import deviceReducer from './deviceSlice'
import categoriesReducer from './categoriesSlice'
const rootReducer = combineReducers({
    auth: authReducer,
    device: deviceReducer,
    categories: categoriesReducer
})

export const store = configureStore({
    reducer: rootReducer
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;