import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private _registerUrl = "http://localhost:4200/api/register" 

  constructor (private http: HttpClient){

  }
//  registerUser(){
//   return this.http.post<any>(this._registerUrl, userData)
//  }

  }


