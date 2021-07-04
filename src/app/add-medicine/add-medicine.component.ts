import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicines } from '../medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
  medicines:Medicines=new Medicines();
  constructor(private medicinesService: MedicinesService,private router: Router) { }
  
   selectedFile: File ;
  ngOnInit(): void {
  }
  
  saveMedicines(){
    this.medicinesService.createMedicines(this.medicines).subscribe(data =>{
      console.log(data);
      this.goToMedicinesList();
    },
    error => console.log(error));
  }
  goToMedicinesList(){
    this.router.navigate(['/medicines']);
  }
  onSubmit(){
console.log(this.medicines);
this.saveMedicines();
  }


}
