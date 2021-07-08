import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL = "http://44.193.220.196:8090/api/v1/users";
  router: any;

  constructor(private httpClient: HttpClient) { }
  createUsers(users:Users):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,users);
  }
  public loginUserFormRemote(users:Users):Observable<any>{
    return this.httpClient.post<any>("http://44.193.220.196:8090/api/v1/login/",users);
  }
}
