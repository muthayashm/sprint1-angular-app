import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('PRODUCT-ID:', id);
    this.productService.getProductDetails(id).subscribe((product) => {
      console.log('PRODUCT:', product.products);
      this.product = product.products[0];
    });
  }

  calculateDiscount(price: number, discount: number): number {
    return this.productService.calculateDiscount(price, discount);
  }
}
