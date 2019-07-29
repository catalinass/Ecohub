import { Component, OnInit } from '@angular/core';
import {AssetsService } from '../services/assets.service';
import {Router} from '@angular/router';
import { ViewChild } from '@angular/core'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export interface Info {
peso:string,
eco: string
} 

class Data {
  constructor(public peso:string='',
  public eco:string=''){ 
  }
  setPeso (peso:string){this.peso = peso}
  setEco (eco:string){this.eco = eco}

}


export class HomeComponent implements OnInit {
  model: Data = new Data();
@ViewChild('f') form: any; 
  data:Info;

  constructor(private router: Router, private assetsService: AssetsService) { }

  ngOnInit() {
  }

  afterAsync(){
    this.model.setPeso(this.Data.peso);
    this.model.setEco(this.Data.eco); 
  }

  start(){
   this.assetsService.getWeight().subscribe(
     response => {
     console.log(response)
     },
     error => console.log("Error: ", error), 
     () => this.afterAsync()); 

   )

  }

  close(){
     this.router.navigate(['/login']);
  }
  

}
