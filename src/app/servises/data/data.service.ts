import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http:HttpClient) { }

  getAllCuorses(){
       return this.http.get(`${environment.Api}/courses`)
  }

  Cart(info:any){
    return this.http.post<any>(`${environment.Api}/cart`, info )    

  }
  removeCart(info:any){
    return this.http.post<any>(`${environment.Api}/cart/remove`, info )    

  }

  cartCourses(id:string){
    return this.http.post<any>(`${environment.Api}/library`, {_id:id} )    

  }



}
