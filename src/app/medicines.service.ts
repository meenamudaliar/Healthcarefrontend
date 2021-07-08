import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicines } from './medicines';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
  private baseURL = "http://44.193.220.196:8090/api/v1/medicines";
  router: any;

  constructor(private httpClient: HttpClient) { }
  
  getMedicinesList(): Observable<Medicines[]>{
    return this.httpClient.get<Medicines[]>(`${this.baseURL}`);
  }
  createMedicines(medicine:Medicines):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,medicine);
  }
  getMedicinesById(id:number):Observable<Medicines>{
    return this.httpClient.get<Medicines>(`${this.baseURL}/${id}`);
  }
  updateMedicines(id: number, medicine: Medicines): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,medicine );
  }
  deleteMedicines(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
 /*  searchMedicines(keyword:string):Observable<Medicines>{
    return this.httpClient.get<Medicines>(`${this.baseURL}/search/${keyword}`);
  } */
  public getByKeyword(keyword):Observable<Medicines[]>{
    return this.httpClient.get<Medicines[]>("http://44.193.220.196:8090/api/v1/search/"+keyword);
  }
  public sortByName():Observable<Medicines[]>{
    return this.httpClient.get<Medicines[]>("http://http://44.193.220.196:8090/api/v1/sort");
  }
  public sortPrice():Observable<Medicines[]>{
    return this.httpClient.get<Medicines[]>("http://http://44.193.220.196:8090/api/v1/sortprice");
  }
}
