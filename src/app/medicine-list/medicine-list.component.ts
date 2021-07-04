import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicines } from '../medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  medicine : Medicines[];
  images:any;
  public keyword:string;
  

  constructor(private medicinesService: MedicinesService,private router:Router) { }

  ngOnInit(): void {
    this.getMedicines();
  }
  logout(){
    this.router.navigate(["/home"])
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


   getMedicines(){
    this.medicinesService.getMedicinesList().subscribe(async data => {
     
     this.medicine=data;
       
    }, error => {
      console.log(error);
    });
  
  
  }
  clear(){
    this.keyword="";
    this.getMedicines();
  }
  updateMedicines(id:number){
  this.router.navigate(['update-medicine',id]);
  }
  deleteMedicines(id: number){
    this.medicinesService.deleteMedicines(id).subscribe( data => {
      console.log(data);
      this.getMedicines();
    })
  }
  public findByKeyword(){
    let response = this.medicinesService.getByKeyword(this.keyword);
    response.subscribe(data => this.medicine= data);
  }
  medicinesDetails(id: number){
    this.router.navigate(['medicine-details', id]);
  }
  create(){
    this.router.navigate(['add-medicine'])
  }

}
