import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocalStorgeService {
  constructor(private router:Router) {}

  saveUserdata(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
  }

 get getUser() {
    const data = JSON.parse(localStorage.getItem('user')!);
    if (data) return data;
    else return null;
  }

get  isLoggedIn() {
    return this.getUser;
  }

  removeUser() {
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }
}
