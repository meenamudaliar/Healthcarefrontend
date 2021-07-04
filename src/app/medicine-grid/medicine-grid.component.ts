import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { Medicines } from '../medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-medicine-grid',
  templateUrl: './medicine-grid.component.html',
  styleUrls: ['./medicine-grid.component.css']
})
export class MedicineGridComponent implements OnInit {
medicine:Medicines[]=[];
  keyword: any;
  constructor(private medicinesService:MedicinesService,private router:Router,private _cartService:CartService) { }

  ngOnInit(): void {
   this.getMedicines();
  }
getMedicines(){
  this.medicinesService.getMedicinesList().subscribe(async data => {
     
    this.medicine=data;
      
   }, error => {
     console.log(error);
   });
}
logout(){
  this.router.navigate(["/home"])
}
clear(){
  this.keyword="";
  this.getMedicines();
}
sortByNames(){
  this.medicinesService.sortByName().subscribe(data =>{
    this.medicine=data;
  })
}
sortByPrice(){
  this.medicinesService.sortPrice().subscribe(data =>{
    this.medicine=data;
  })
}
public findByKeyword(){
  let response = this.medicinesService.getByKeyword(this.keyword);
  response.subscribe(data => this.medicine= data);
}
addToCart(medicine:Medicines){
  console.log(`medicine name: ${medicine.name}, and price: ${medicine.price}`);
  const cartItem = new CartItem(medicine);
  this._cartService.addToCart(cartItem);
}

}
