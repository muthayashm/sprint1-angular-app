import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../models/Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(searchKey?: string, isCategory?: boolean): Observable<Response> {
    let URL = '';
    if (searchKey && isCategory) {
      console.log('Category');
      //localhost:3128/product/?searchKey=lemon
      URL = `http://localhost:3128/product/?category=${searchKey}`;
    } else if (searchKey && !isCategory) {
      console.log('Search');
      URL = `http://localhost:3128/product/?searchKey=${searchKey}`;
    } else {
      console.log('ALL');
      URL = 'http://localhost:3128/product';
    }
    const OPTIONS = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get<Response>(URL, OPTIONS);
  }

  getProductDetails(id) {
    const URL = `http://localhost:3128/product/?id=${id}`; //localhost:3128/product/?id=10001
    const OPTIONS = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get<Response>(URL, OPTIONS);
  }
}
