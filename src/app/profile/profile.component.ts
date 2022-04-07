import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorgeService } from '../servises/localstorge/local-storge.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {


  ngOnInit(): void {

  }

  constructor(private locaService:LocalStorgeService) {
    

  }
  get user(){
    return this.locaService.getUser
  }


}
