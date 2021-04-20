import { createReducer, on } from "@ngrx/store";
import { addProduct } from "../actions/cart.action";
import { Product } from "../models/Product";

export const initialState: Product[] = [];

const _cartReducer = createReducer(
    initialState,
    on(addProduct, (state, { product }) => {
        console.log("State:", state);
        console.log("Product:", product)
        return [...state, product]
    })
)

export function cartReducer(state, action) {
    return _cartReducer(state, action)
}