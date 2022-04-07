import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient ) {
   }
  register(info:any){
   return this.http.post<any>(`${environment.Api}/register`, info )    
  }
  login(info:any){
    return this.http.post<any>(`${environment.Api}/login`, info )    
   }
}
