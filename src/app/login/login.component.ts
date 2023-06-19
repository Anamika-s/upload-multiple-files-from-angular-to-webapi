import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Credential } from '../Credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
 
  constructor(private _auth : AuthService) {}  
 



credential : Credential = {Email:'', Password:''};


  ngOnInit(): void {

 

  }




 

  // Login()

  // {

  //    this._auth.Authenticate(this.credential).subscribe(res=>

  //     console.log(res))

     

  //   console.log("inside Authenticate ");

  // }

  Register(regForm:any)
  {
    this.credential= {Email:regForm.controls.txtName.value,Password:regForm.controls.Password.value}
    this._auth.Authenticate(this.credential).subscribe(res => console.log(res));
    console.log(regForm)
    console.log(regForm.value)
    console.log(regForm.controls.txtName.value)
  }
}
