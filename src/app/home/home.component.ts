import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CareerService } from '../career.service';


export class ICareer{
  constructor(
   id:number,
   firstName:string,
   lastName:string,
   education:string
 ){}
 }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public career=[];
  
  constructor(private _careerService:CareerService, http:HttpClient) { }

  ngOnInit(): void {
    this._careerService.getCareer()
    .subscribe(data=>this.career=data);

  }

}
