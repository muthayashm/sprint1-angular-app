import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']

})
export class MyAccountComponent implements OnInit {
  user?: User = { email: '' }
  isUpdate: boolean = true;

  constructor(private userService: UserService) {
    this.userService.myaccount(localStorage.getItem('email')).subscribe((data) => {
      this.user = {
        email: data.user[0].email,
        fullName: data.user[0].fullName,
        mobileNumber: data.user[0].mobileNumber,
        address: data.user[0].address,
        city: data.user[0].city,
        state: data.user[0].state,
        country: data.user[0].country,
        zipCode: data.user[0].zipCode,
      }
    })
  }

  toggleUpdate() {
    this.isUpdate = !this.isUpdate;
  }

  updateUser() {
    this.userService.update(this.user).subscribe(
      (data) => {
        console.log(data)
        localStorage.setItem('email', data.email)
      },
      (err) => {
        console.log(err)
      });
    this.toggleUpdate();
  }

  ngOnInit(): void {
  }

}
