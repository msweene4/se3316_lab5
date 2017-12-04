import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

myEmail: string;
myPass: string;

  constructor() { }

  ngOnInit() {
  }


  verifyU(){
    if((this.myEmail==="Admin")&&(this.myPass==="pass")){
      alert("Login successful.");
    }
  }
}
