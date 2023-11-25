import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import deviceReducer from './deviceSlice'
import categoriesReducer from './categoriesSlice'
import brandsReducer from "./brandsSlice";
import basketReducer from "./basketSlice";
const rootReducer = combineReducers({
    auth: authReducer,
    device: deviceReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
    basket: basketReducer
})

export const store = configureStore({
    reducer: rootReducer
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;