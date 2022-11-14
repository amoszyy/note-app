import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email = "";
  public password = "";
  public loginPoint = "http://localhost:5009/user/login"


  constructor(
    router: Router,
    private http : HttpClient
  ) { }

  ngOnInit(): void {
  }

  login(){
    let loginDetails={email:this.email, password:this.password}
    return this.http.post<any>(this.loginPoint, loginDetails).subscribe(data=>{
      console.log(data)

    })
  }

}
