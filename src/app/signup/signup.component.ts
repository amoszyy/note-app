import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public name = "";
  public email = "";
  public password = "";
  public url = "http://localhost:5009/user/signup"


  constructor(
    // public apiservice: ApiserviceService
    public router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  signup(){
    // this.apiservice.signupusers().subscribe(data=>{
    //   console.log(data)
    // })
    let userDetails = {name:this.name, email:this.email, password:this.password}
    console.log(userDetails)
   
    return this.http.post<any>(this.url, userDetails).subscribe(data=>{
      console.log(data)
      if(data.status){
        this.router.navigate(["/login"])

      }
    }) 
  }


}
