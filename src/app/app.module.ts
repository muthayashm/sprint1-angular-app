import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryComponent } from './components/category/category.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { cartReducer } from './reducers/cart.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MyAccountComponent,
    ProductDetailsComponent,
    CartComponent,
    SearchComponent,
    CategoryComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access-token');
        },
        disallowedRoutes: ['localhost:3128/login'],
        allowedDomains: ['localhost:3128'],
      },
    }),
    StoreModule.forRoot({ products: cartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
