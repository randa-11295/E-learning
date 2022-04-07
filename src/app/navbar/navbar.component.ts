import { Component, OnInit } from '@angular/core';
import { LocalStorgeService } from '../servises/localstorge/local-storge.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  public isCollapsed:any;
  
constructor(private LocalStorgeService:LocalStorgeService,) {}

ngOnInit(): void {
   if(innerWidth <= 768){
         this.isCollapsed = true;
   }
   else{
    this.isCollapsed = false;
   }
 
}
get isLog():boolean{
 return this.LocalStorgeService.isLoggedIn
}
logOut(){
  this.LocalStorgeService.removeUser()
}



}
