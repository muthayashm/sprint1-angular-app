import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user?: User = { email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {}

  //Something Here
}
