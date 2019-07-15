import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl:string = "http://172.20.10.6:3001";
  constructor(private httpClient: HttpClient){}

  initialize(){
      return this.httpClient.get(this.baseUrl + '/products');
  }

}
