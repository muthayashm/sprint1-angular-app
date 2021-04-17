import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']

})
export class MyAccountComponent implements OnInit {
  user?:User = {email:'',password:''}

  constructor(private userService:UserService) {  
    this.user=this.userService.myaccount(localStorage.getItem('email'))
  }

  ngOnInit(): void {
  }

}
