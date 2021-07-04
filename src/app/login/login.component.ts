import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService:UsersService,private router:Router) { }
  users=new Users();
  msg='';
  ngOnInit(): void {
  }
  loginUser() {
    this.usersService.loginUserFormRemote(this.users).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['/items']);
      },
      error => {
        console.log("error occured");
        this.msg="Bad Credentials";

      }
    )
      
    }
}