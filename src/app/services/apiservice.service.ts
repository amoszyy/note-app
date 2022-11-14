import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  public signuprurl = environment.signupurl
  public name = "";
  public email = "";
  public password = "";

  constructor(
    private http:  HttpClient

  ) { }
  // signupusers(){
  //   let userDetails = {name:this.name, email:this.email, password:this.password}
  //   console.log(userDetails)
  
  //   return this.http.post<any>(this.signuprurl, userDetails)
  // }
}
