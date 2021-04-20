import { Injectable } from "@angular/core";
import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

@Injectable()
export class SharedService {
    public cartItems: CartItem[] = [];

    // Add single product to the cart
    addProductToCart(product: Product) {
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].product.id === product.id) {
                this.cartItems[i].quantity += 1;
            } else {
                this.cartItems[i].product = product;
                this.cartItems[i].quantity = 1;
            }
        }
    }

    // Remove single product from the cart
    removeProductFromCart(product: Product) {
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].product.id === product.id) {
                this.cartItems.splice(i, 1)
            }
        }
    }

    getCartProducts(): CartItem[] {
        return this.cartItems;
    }

    // Remove all the items added to the cart
    emptryCart() {
        this.cartItems.length = 0;
    }

    // Calculate total price on item added to the cart
    getTotalPrice() {
        let total = 0;

        for (let item of this.cartItems) {
            total += (item.product.price * item.quantity);
        }

        return total
    }
}