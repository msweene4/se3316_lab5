import { Injectable } from '@angular/core';

let myMails: string[]=[];
let myWords: string[]=[];

@Injectable()
export class LoginsService {
    
    getMails() : string[]{
        return myMails;
    }
    
    getWords() : string[]{
        return myWords;
    }
    
    saveLogin(mail, word){
        
    }
    

  constructor() { }

}
