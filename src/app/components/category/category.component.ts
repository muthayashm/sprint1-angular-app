import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
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
        this.showProducts();
      }
    });
  }

  showProducts(): void {
    this.productService
      .getProducts(this.searchKey, true)
      .subscribe((product) => {
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

  ngOnInit(): void { }
}
