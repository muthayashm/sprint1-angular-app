import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../models/ProductResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL = 'https://sweetcherry.herokuapp.com';

  constructor(private http: HttpClient) { }

  getProducts(searchKey?: string, isCategory?: boolean): Observable<Response> {
    let URL = '';
    if (searchKey && isCategory) {
      console.log('Category');
      //localhost:3128/product/?searchKey=lemon
      URL = `${this.BASE_URL}/product/?category=${searchKey}`;
    } else if (searchKey && !isCategory) {
      console.log('Search');
      URL = `${this.BASE_URL}/product/?searchKey=${searchKey}`;
    } else {
      console.log('ALL');
      URL = `${this.BASE_URL}/product`;
    }
    const OPTIONS = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get<Response>(URL, OPTIONS);
  }

  getProductDetails(id) {
    const URL = `${this.BASE_URL}/product/?id=${id}`;
    const OPTIONS = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get<Response>(URL, OPTIONS);
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
