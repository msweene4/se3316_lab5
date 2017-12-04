import { Injectable } from '@angular/core';

let myMails: string[]=[];
let myWords: string[]=[];

@Injectable()
export class LoginsService {
    
    myStart(){
        fetch('http://lab5-msweene4.c9users.io:8081/api/Temp')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log(data);
                return data.map(function(temp) {
                    myMails.push(temp.Email);
                    myWords.push(temp.Password);
                });
            })
            .catch(function(error) {
                console.log(JSON.stringify(error));
            });
    }
    
    verifyLogin(mail,word){
        if(myMails.indexOf(mail)>-1){
            if(word===myWords[myMails.indexOf(mail)]){
                return true;
            }
        }
        return false;
    }
    
    saveLogin(mail, word){
        if(myMails.indexOf(mail)<0){
            fetch('http://lab5-msweene4.c9users.io:8081/api/Temp', {
            	method: 'POST',
            	headers: {'Content-Type': 'application/json'},
            	body: JSON.stringify({Email: mail, Password: word})
            });
            
            myMails.push(mail);
            myWords.push(word);
        }
        else{
            alert('Email already registered!');
        }
    }
    

  constructor() {
      
  }

}
