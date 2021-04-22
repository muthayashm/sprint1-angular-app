import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UResponse } from '../models/UserResponse';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URL = 'https://sweetcherry.herokuapp.com';
  //BASE_URL = 'http://localhost:3128';

  OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}/login`,
      { email, password },
      this.OPTIONS
    );
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}/user`,
      {
        email: user.email,
        password: user.password,
        fullName: user.fullName,
        mobileNumber: user.mobileNumber,
        address: user.address,
        city: user.city,
        state: user.state,
        country: user.country,
        zipCode: user.zipCode
      },
      this.OPTIONS
    );
  }

  update(user: User): Observable<any> {
    let email = localStorage.getItem('email');
    return this.http.put<any>(
      `${this.BASE_URL}/user/${email}`,
      {
        email: user.email,
        fullName: user.fullName,
        mobileNumber: user.mobileNumber,
        address: user.address,
        city: user.city,
        state: user.state,
        country: user.country,
        zipCode: user.zipCode
      },
      this.OPTIONS
    )
  }

  logout() {
    localStorage.removeItem('access-token');
    localStorage.removeItem('email');
  }

  myaccount(email: string): Observable<UResponse> {
    return this.http.get<UResponse>(
      `${this.BASE_URL}/user/${email}`,
      this.OPTIONS
    );
  }

  public getLoginStatus(): boolean {
    return localStorage.getItem('access-token') !== null;
  }
}
