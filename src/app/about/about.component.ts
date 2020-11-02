import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CareerService } from '../career.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
careerForm: FormGroup ;

  formDeclare(){
  this.careerForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    gender: ["", Validators.required],
    mail: ["", Validators.required],
  
    contactNumber: ["", Validators.required],
  
    institute: ["", Validators.required],
    gpa: ["", Validators.required],
    areaMajors: ["", Validators.required],
    education: ["", Validators.required],
    additional: [""],
  
    passOut: ["", Validators.required],
    areaOfinterest: [""], //ye drop down mn chezen hon ge
    othersInterest: [""],
  
    languages: ["", Validators.required],
  
  
  
    shortTermgoals: ["", Validators.required],
    longTermgoals: ["", Validators.required],
  
    // question: [[]],
    image: [""],
    
    //  registerationForm= new FormGroup({
    //    userName: new FormControl(''),
    //    password: new FormControl(''),
    //    confirmPassword: new FormControl(''),
    //    address: new FormGroup({
    //      city: new FormControl(''),
    //      state: new FormControl(''),
    //      postalCode: new FormControl('')
    
    //    })
    
     }, 
     
     );
    }
  constructor(private _careerService:CareerService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formDeclare();
    image:[]
  }
  onFileSelect(event){
    const image=event.target.files[0];
    this.careerForm.get('image').setValue;
    console.log(image);
  }
  // get email(){
  //   return this.email.get('email');
  // }
  // get firstname(){
  //   return this.firstname.get('firstName');
  // }
  // get gpa(){
  //   return this.gpa.get('gpa');
  // }

  onSubmit(){
    console.log(this.careerForm.value);
    const careerData=new FormData();
    careerData.append('image',this.careerForm.get('image').value);

    this._careerService.career(this.careerForm.value)
    .subscribe(
      response =>console.log('Success!',response),
      error =>console.error('Error!',error)
    );
  }
}
