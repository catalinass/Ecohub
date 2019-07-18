import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const raspberrypiUri = 'http://192.168.0.112:3001';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private http: HttpClient) {

   }

  public getWeight(){
    const url = raspberrypiUri + '/get_w' ;
    return this.http.get(url, { withCredentials: false });

   }

   public initialize(){
    const url1 = raspberrypiUri + '/initialize' ;
    return this.http.get(url1, { withCredentials: false });

   }

}
