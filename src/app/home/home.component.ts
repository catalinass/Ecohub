import { Component, OnInit } from '@angular/core';
import {AssetsService } from '../services/assets.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  data: any;
  
  constructor(private router: Router, private assetsService: AssetsService) { }
  
  
  ngOnInit() {
  }

  start(){
    //When the user click on "iniciar" is going to call the function get weight (api)
   this.assetsService.getWeight().subscribe(
   (response: any) => {
     this.data = response;
     }
   )

  }

  close(){
     this.router.navigate(['/login']);
  }
  
  
}
