import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicines } from '../medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {

  id: number;
  medicines:Medicines=new Medicines();
  constructor(private medicinesService:MedicinesService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.medicinesService.getMedicinesById(this.id).subscribe(data =>{
      this.medicines=data;
    },
    error => console.log(error));
  }
  onSubmit(){
    this.medicinesService.updateMedicines(this.id, this.medicines).subscribe( data =>{
      this.goToMedicinesList();
    }, error => console.log(error));
  }

  goToMedicinesList(){
    this.router.navigate(['/medicines']);
  }

}
