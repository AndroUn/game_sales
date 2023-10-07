import { createSlice } from "@reduxjs/toolkit"
import { cartInitialState } from "../../interfaces/initialState.interface"
import CardInterface from "../../interfaces/Card.interface"

const initialState:cartInitialState  = {
    cart: [],
    price: 0
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action){
            state.cart.push(action.payload)
        },
        deleteItemFromCart(state, action){
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        sumPrices(state, action){
            state.price = state.price + +action.payload
        },
        minusPrices(state, action){
            state.price = state.price - action.payload
        }
    },
})


export const {addItemToCart, deleteItemFromCart, sumPrices, minusPrices} = cartSlice.actions
export default cartSlice.reducer

