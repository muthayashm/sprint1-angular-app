import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sweetcherry';

  constructor(private router: Router) {}

  searchKey?: string = '';

  search() {
    if (this.searchKey.length === 0) {
      this.router.navigate([`/search/all`]);
    } else {
      this.router.navigate([`/search/${this.searchKey}`]);
    }
  }
}
