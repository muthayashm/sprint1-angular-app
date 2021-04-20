import { createAction, props } from "@ngrx/store";
import { Product } from "../models/Product";

export const addProduct = createAction(
    'Add Product',
    props<{ product: Product }>()
)