import { Component, OnInit } from '@angular/core';
import {AssetsService } from '../services/assets.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private assetsService: AssetsService) { }

  ngOnInit() {
  }

  start(){
   this.assetsService.getWeight().subscribe(
     response => {
     console.log(response)
     }
   )

  }

  close(){
     this.router.navigate(['/login']);
  }
  

}
