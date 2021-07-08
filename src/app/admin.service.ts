import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
  public loginAdminFormRemote(admin:Admin):Observable<any>{
    return this.httpClient.post<any>("http://http://44.193.220.196:8090/api/v1/admin/login/",admin);
  }
}
