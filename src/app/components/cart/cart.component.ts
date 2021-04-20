import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products?: Product[] = [];
  products$: Observable<Product[]>

  constructor(private activatedRoute: ActivatedRoute,
    private store: Store<{ products: Product[] }>) {
    this.products$ = store.select('products');
  }

  ngOnInit(): void {

  }

  getProducts() {
    this.products$.subscribe((data) => {
      this.products = data;
      console.log(this.products);
    })
  }

  calculateDiscount(price: number, discount: number = 0): number {
    if (discount === 0) {
      return price;
    } else {
      const discountPrice = price - (price * discount) / 100;
      return discountPrice;
    }
  }
}
