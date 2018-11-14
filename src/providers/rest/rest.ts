import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = "http://jsonplaceholder.typicode.com"; /* Caso quiser colocar o tipo deve ser o tipo || apiUrl:any = "http://jsonplaceholder.typicode.com" */ 

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider'); /* Imprimir algo: console.log*/ 
  }

  getPostagem() {
    return new Promise(resolve =>{
      this.http.get(this.apiUrl+'/posts').subscribe(data=>{
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
