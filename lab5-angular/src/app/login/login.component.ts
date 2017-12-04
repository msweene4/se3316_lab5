import { Component, OnInit } from '@angular/core';
import {LoginsService} from '../logins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginsService]
})

export class LoginComponent implements OnInit {

myEmail: string;
myPass: string;

  constructor(private ls: LoginsService) { }

  ngOnInit() {
    this.ls.myStart();
  }
  
  saveU(){
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.myEmail))){
      alert("You have entered an invalid email address!")
    }
    else if(!(Boolean(this.myPass))){
      alert("You have entered an invalid password!")
    }
    else{
      this.ls.saveLogin(this.myEmail,this.myPass);
    }
  }
  
  verifyU(){
    if(this.ls.verifyLogin(this.myEmail,this.myPass)){
      alert("Login successful.");
    }
  }

}
