import { LocalStorgeService } from './../servises/localstorge/local-storge.service';
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../servises/data/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() item:any ='test';
   cart="";
   constructor( private dataService:DataService , private localStorgeService:LocalStorgeService) { 
  }

  ngOnInit(): void {
    if(this.localStorgeService.getUser != null){
            const cartArr = this.localStorgeService.getUser.cart
          
            if (cartArr.includes(this.item._id)){
              this.cart="remove from my courses"
            }
            else {this.cart="add to my courses" }
    }

  }
  

  
  addItem(id:string){
    if(this.localStorgeService.getUser == null){
       this.cart = "you must log in ftist"
    }
    else {
   const  userId= this.localStorgeService.getUser._id;
   const  courseId = id;
    this.dataService.Cart({userId :userId , "courseId" : courseId}).subscribe({
      next:data=>{
        console.log(data.msg);
        console.log(data.user)
        
        if(data.msg=='done added'){
           this.cart = "remove from my courses"
        }
        else if(data.msg=='done removed'){
          this.cart = "add to my courses"
          console.log(this.cart)
        }
        this.localStorgeService.saveUserdata(data.user);
      },
      error:err=> {  
        console.log(err)
       }

       }
    )}

  }}