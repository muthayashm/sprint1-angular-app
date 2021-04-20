import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  products?: Product[] = [];
  searchKey?: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.searchKey = this.route.snapshot.paramMap.get('key');
        this.searchProducts();
      }
    });
  }

  ngOnInit(): void { }

  searchProducts(): void {
    if (this.searchKey === 'all') {
      this.productService.getProducts().subscribe((product) => {
        this.products = product.products;
      });
    } else {
      this.productService.getProducts(this.searchKey, false).subscribe(
        (product) => {
          this.products = product.products;
        },
        (err) => {
          this.products = [];
        }
      );
    }
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
