import { Component, OnInit } from '@angular/core';
import {LoginsService} from '../logins.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginsService]
})

export class LoginComponent implements OnInit {

myEmail: string;
myPass: string;

  constructor(private ls: LoginsService, private router: Router) { }

  ngOnInit() {
    this.ls.myStart();
  }
  
  verifyU(){
    if(this.ls.verifyLogin(this.myEmail,this.myPass)){
      alert("Login successful.");
      this.router.navigate(["user/:"+this.myEmail]);
    }
    else{
      alert("Login Failed!")
    }
  }

}
