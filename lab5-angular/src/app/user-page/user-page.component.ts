import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

export class UserPageComponent implements OnInit {
myS: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  url;
  search(){
    
    this.url="https://images-api.nasa.gov/search?q=";
    this.url=this.url+this.myS;
    console.log(this.url);
    this.http.get(this.url).subscribe(data =>{
      console.log(data);
    })
  }

}
