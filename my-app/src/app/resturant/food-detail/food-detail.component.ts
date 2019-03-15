import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { FoodItem } from '../food/FoodItem';
import { foods } from '../food/mock-food';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

    id: string;
    food: FoodItem;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  
    
  }



  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.food = foods.map(function(item) {
      if( item.id == this.id) {
        return item;
      }
    })[0]; 


    console.log(this.food);

    
  }

}
