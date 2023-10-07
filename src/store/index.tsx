import CardInterface from "../interfaces/Card.interface";
import  cartReducer from "./cart/cart.slice"
const { configureStore, combineReducers } = require("@reduxjs/toolkit");


const rootReducer = combineReducers({
    cart: cartReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch