import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[]

  totalPrice: number = 0;
  totalItems: number = 0;
  discPrice: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService) {
    this.cartItems = JSON.parse(localStorage.getItem('cart'))
    for (let item of this.cartItems) {
      this.totalPrice += (item.product.price * item.quantity);
      this.discPrice += (this.calculateDiscount(item.product.price, item.product.discount) * item.quantity);
      this.totalItems += item.quantity
    }
  }

  ngOnInit(): void {

  }

  calculateDiscount(price: number, discount: number): number {
    return this.productService.calculateDiscount(price, discount);
  }

  checkout() {

  }
}
