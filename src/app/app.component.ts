import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray,FormControl } from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';
import { forbidenNameValidator } from './shared/user-name.validator';
//import { FirstNameValidator } from './shared/user-name.validator';
import {CareerService } from './career.service';
import { FirstNameValidator } from './shared/first-name.validator';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  careerForm:FormGroup;

  get userName(){
    return this.careerForm.get('userName');
  }
  get firstName(){
    return this.careerForm.get('firstName');
  }

  get email(){
    return this.careerForm.get('email');
  }

  get alternateEmails(){
    return this.careerForm.get('alternateEmails') as FormArray;

  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }
//form builder's code



ngOnInit() 
{
 


  

}
  constructor(private fb:FormBuilder){

  }

  
 //data managing
// loadApiData(){
//   //setValue() for setting all data, patchValue() for setting few data
//   this.registerationForm.setValue({
//     userName:"danyal",
//     password:"test",
//     confirmPassword:"test",
//     address:{
//     city:"City",
//     state:"State",
//     postalCode:"123456" }
//   })
// }

}
