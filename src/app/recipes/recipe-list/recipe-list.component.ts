import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // properties

  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 

  // 118 declared an empty Recipe array
  recipes: Recipe[];

  // methods

  onRecipeSelected(recipe: Recipe){
    console.log('recipe-list > onRecipeSelected');
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }

  constructor(
    // 118 added a private argument here.  remember that this essentially adds 'recipeService' as an object property
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    // 118 setting the recipes property using the newly created method in our service getRecipes()
    this.recipes = this.recipeService.getRecipes();
  }

}