import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../servises/users/users.service';
import { LocalStorgeService } from '../servises/localstorge/local-storge.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  constructor(private fb: FormBuilder ,  private UsersService:UsersService ,
              private LocalStorgeService:LocalStorgeService) { }
  
  profileForm = this.fb.group({
    name: ['' ,[ Validators.required,Validators.pattern(/^[a-zA-Z]+$/) , Validators.minLength(3)]],
    password : ['' ,[ Validators.required ]],
    email : ['', [Validators.email , Validators.required]],

          address: this.fb.group({
            street: ['', [Validators.pattern(/^[a-zA-Z]+$/) ]],
            city: ['' ,[Validators.pattern(/^[a-zA-Z]+$/)  ]],
            country: ['' ,[Validators.pattern(/^[a-zA-Z]+$/)  ]],
          }),
  })
 


  ngOnInit(): void { 
}

vaild = "";
submiting(){
   console.log(this.profileForm.value.address.city)
   const ptn = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
   const user = isNaN(this.profileForm.value.name) && this.profileForm.value.name.length >= 3 
 
   console.log(user )
   if ( isFinite(this.profileForm.value.name) || this.profileForm.value.name.length < 3 ){
          this.vaild = "your name must be alphabets and more than 3 letters "
   }
  else if ( !ptn.test(this.profileForm.value.email || this.profileForm.value.email.length < 8 ) ){
    this.vaild = "your E-mail is wrong"
  }
  else if ( this.profileForm.value.password.length < 6) {
    this.vaild = "the password must be more than 6 letters"
  }
 

  else{ 
    this.UsersService.register(this.profileForm.value).subscribe({
      next:data=>{
        this.LocalStorgeService.saveUserdata(data);
      },
      error:err=> {   
        
        if (err.status == 400){
              this.vaild = "you had created account please log in into your account " 
        }
        else{  
              this.vaild = "try  agian after some time" 
        }
}})}}}
