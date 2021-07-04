import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users:Users=new Users();
  constructor(private userService: UsersService,private router: Router) { }
  
   
  ngOnInit(): void {
  }

  saveUsers(){
    this.userService.createUsers(this.users).subscribe(data =>{
      console.log(data);
      
    
    },
    error => console.log(error));
  }
  
  onSubmit(){
console.log(this.users);
this.router.navigate(['/login'])
this.saveUsers();
  }



}
