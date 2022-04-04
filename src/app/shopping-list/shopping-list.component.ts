import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  /* 120 changed this...
  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Scrapple',10),    
  ];
  ...to this...
  */
  ingredients: Ingredient[];

  /* 120 removed 
  onIngredientAdded(ingredient: Ingredient){
    console.log('shopping-list > onIngredientAdded');
    this.ingredients.push(ingredient);
  }
  */

  constructor(
    // 120 inject shopping list service here (is a provider in app.module)
    private slService: ShoppingListService
  ) { }

  ngOnInit(): void {
    // 120 initialize
    this.ingredients = this.slService.getIngredients();
  }

}
