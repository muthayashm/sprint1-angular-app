import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products?: Product[] = [];
  products$: Observable<Product[]>

  constructor(private activatedRoute: ActivatedRoute,
    private store: Store<{ products: Product[] }>,
    private sharedService: SharedService) {
    this.products$ = store.select('products');
    this.products = JSON.parse(localStorage.getItem('state'))
    //console.log(this.products)
  }

  ngOnInit(): void {
    console.log("ITEMS IN SERVICE CART: ", this.sharedService.getCartProducts());
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

  checkout() {
    console.log(localStorage.getItem('state'));
  }
}
