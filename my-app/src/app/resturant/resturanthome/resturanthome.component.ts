import { Component, OnInit } from '@angular/core';
import { FoodComponent}  from '../food/food.component';

@Component({
  selector: 'app-resturanthome',
  templateUrl: './resturanthome.component.html',
  styleUrls: ['./resturanthome.component.scss']
})
export class ResturanthomeComponent implements OnInit {
  resturantName: string;

  constructor() { 
    
   this.resturantName = "Nepali Pure thakalai"
  }

  ngOnInit() {
  }

}
