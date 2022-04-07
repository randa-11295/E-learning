import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../servises/data/data.service';
import { LocalStorgeService } from '../servises/localstorge/local-storge.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  list: any = [];
  userCart = this.localStorgeService.getUser.cart
  constructor(private DataService:DataService , private localStorgeService:LocalStorgeService) {   }
  
  ngOnInit(): void {
    this.getMycourses()
  }

  
 getMycourses():void {
   console.log(this.user._id);
    this.DataService.cartCourses(this.user._id).subscribe( (res)=>{ 
       this.list = res.data ;
    console.log(res);
    }
    )
    
  }
  get user (){
    return this.localStorgeService.getUser


    
  }
  remove(courseId:string){
    this.DataService.removeCart({userId :this.user._id , courseId : courseId}).subscribe({
      next:data=>{
      console.log(data);
     this.ngOnInit()
        
      },
      error:err=> {  
        console.log(err)
      }
      
    }
    )
  }

}
