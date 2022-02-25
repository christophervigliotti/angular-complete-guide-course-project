import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // properties

  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 

  recipes: Recipe[] = [
    new Recipe(
      'Droopy Cheeseburger',
      'Salt and science.  Put it in your mouth...?',
      'https://www.stockvault.net/data/2016/05/31/200979/preview16.jpg'),
      new Recipe(
        'Droopier Cheeseburger',
        'Droop! There it is',
        'https://www.stockvault.net/data/2016/05/31/200979/preview16.jpg')
    ];

  // methods

  onRecipeSelected(recipe: Recipe){
    console.log('recipe-list > onRecipeSelected');
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}