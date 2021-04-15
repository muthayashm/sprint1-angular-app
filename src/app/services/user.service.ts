import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URL = 'http://localhost:3128';

  OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}/login`,
      { email, password },
      this.OPTIONS
    );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}/user`,
      { email, password },
      this.OPTIONS
    );
  }

  logout() {
    localStorage.removeItem('access-token');
  }

  public getLoginStatus(): boolean {
    return localStorage.getItem('access-token') !== null;
  }
}
