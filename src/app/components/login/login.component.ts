import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user?: User = { email: '', password: '' };
  newUser?: User = { email: '', password: '' };
  loginMessage?: String;
  registerMessage?: String;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  login(user: User): void {
    this.userService.login(user.email, user.password).subscribe(
      (data) => {
        console.log('success', data);
        localStorage.setItem('access-token', data.token);
        localStorage.setItem('email', data.email);
      },
      (err) => {
        console.log(err.error.message);
        this.user = { email: '', password: '' };
        this.loginMessage = err.error.message;
      },
      () => this.router.navigate(['/home'])
    );
  }

  register(): void {
    this.userService
      .register(this.newUser)
      .subscribe(
        (data) => {
          console.log('success', data.token);
          localStorage.setItem('access-token', data.token);
        },
        (err) => {
          console.log(err.error.message);
          this.newUser = { email: '', password: '' };
          this.registerMessage = err.error.message;
        },
        () => {
          this.login(this.newUser);
        }
      );
  }

  //Something Here
}
