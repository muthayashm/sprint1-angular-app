import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  
  constructor(private productService: ProductService) {}

  getProducts(): void {
    this.productService.getProducts().subscribe((product) => {
      console.log(product.products);
    });
  }

  ngOnInit(): void {
    this.getProducts()
  }
}
