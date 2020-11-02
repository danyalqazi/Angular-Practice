import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { ICareer } from './home/home.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CareerService {
  _url='https://asasa.com/api/career';
  constructor(private _http:HttpClient) { }

  career(userData){
    return this._http.post<any>(this._url,userData);
  }

  getCareer():Observable<ICareer[]>{
    return this._http.get<ICareer[]>(this._url);
  }
}
