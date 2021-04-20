import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct } from 'src/app/actions/cart.action';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  products$: Observable<Product[]>

  constructor(private productService: ProductService, private store: Store<{ products: Product[] }>) {
    this.products$ = store.select('products')
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((product) => {
      this.products = product.products;
    });
  }

  calculateDiscount(price: number, discount: number = 0): number {
    if (discount === 0) {
      return price;
    } else {
      const discountPrice = price - (price * discount) / 100;
      return discountPrice;
    }
  }

  addToCart(p: Product): void {
    console.log(p.name);
    this.store.dispatch(addProduct({ product: p }))
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
