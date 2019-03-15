import { Component, OnInit } from '@angular/core';
import { FoodItem } from './FoodItem';
import {foods} from './mock-food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  foods = foods;


  constructor() { }

  ngOnInit() {
  }

}