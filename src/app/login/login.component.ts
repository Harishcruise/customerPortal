import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private auth: AuthService ) { 
    console.log(this.hide,this.type)
  }

  ngOnInit() {
  }

  hide : Boolean = true;

  type : string = 'visibility';

  LoginForm = this.fb.group({
    UserName:[''],
    Password:[''],
  })

  VisOff(){
    this.hide= !this.hide;
    this.type= this.hide? 'visibility' : 'visibility_off'
  }
  
  Login(){
    console.log(this.LoginForm.value);
    localStorage.setItem(this.LoginForm.value.UserName,this.LoginForm.value.Password);
    this.auth.LoggedIn(this.LoginForm.value.UserName);
  }

}
