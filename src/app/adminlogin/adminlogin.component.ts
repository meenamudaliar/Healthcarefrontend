import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
admin=new Admin();
message="";
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }
  loginAdmin() {
    this.adminService.loginAdminFormRemote(this.admin).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['/medicines']);
      },
      error => {
        console.log("error occured");
        this.message="Bad Credentials";

      }
    )
      
    }
}
