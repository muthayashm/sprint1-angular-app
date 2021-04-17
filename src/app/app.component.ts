import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sweetcherry';
  ButtonTitle = '';
  ButtonRoute = '';

  constructor(private router: Router, private userService: UserService) {
    this.init();
    router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        if (value.url === '/logout') {
          console.log("Logout")
          userService.logout();
        }
      }
    });
  }

  searchKey?: string = '';

  search() {
    if (this.searchKey.length === 0) {
      this.router.navigate([`/search/all`]);
    } else {
      this.router.navigate([`/search/${this.searchKey}`]);
    }
  }

  init() {
    if (this.userService.getLoginStatus()) {
      this.ButtonTitle = 'Log out';
      this.ButtonRoute = 'logout';
    } else {
      this.ButtonTitle = 'Log in';
      this.ButtonRoute = 'login';
    }
  }

}
