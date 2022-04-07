
import { Component, OnInit } from '@angular/core';
import { DataService } from '../servises/data/data.service';



@Component({
  selector: 'app-categry',
  templateUrl: './categry.component.html',
  styleUrls: ['./categry.component.css']
})
export class CategryComponent implements OnInit {
  list: any = [];
  
  
  constructor(private DataService:DataService) {   }
  
  ngOnInit(): void {
    this.DataService.getAllCuorses().subscribe( (res)=>{  this.list = res ;
    }
    )
  }

}
