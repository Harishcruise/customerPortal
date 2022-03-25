import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  LogInUserName : string='' ;
  
  LoggedIn(userName : string){
    this.LogInUserName=userName;
  }
}
