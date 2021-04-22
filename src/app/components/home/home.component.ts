import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  cartItems: CartItem[] = [];

  constructor(private productService: ProductService) {
    if (localStorage.getItem('cart') === null) {
      console.log("CART_CLASS:", this.cartItems);
    } else {
      this.cartItems = JSON.parse(localStorage.getItem('cart'))
    }
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((product) => {
      this.products = product.products;
    });
  }

  calculateDiscount(price: number, discount: number): number {
    return this.productService.calculateDiscount(price, discount);
  }

  addToCart(p: Product): void {

    let result = this.cartItems.find((data) => data.product.id === p.id)

    if (result === null || result === undefined) {
      this.cartItems.push({ product: p, quantity: 1 })
      this.syncCart()
    } else {
      let index = this.cartItems.indexOf(result)
      this.cartItems[index].quantity += 1;
      this.syncCart()
    }

  }

  ngOnInit(): void {
    this.getProducts();
  }

  async syncCart() {
    let _cart = JSON.stringify(this.cartItems)
    await localStorage.setItem('cart', _cart);
  }
}
