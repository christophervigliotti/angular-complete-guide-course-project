import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    // 119 added
    recipeSelected = new EventEmitter<Recipe>();

    // 118 moved the recipes array declration here and set it to private.  as such it cannot be directly accessed
    private recipes: Recipe[] = [
        new Recipe(
          'Droopy Cheeseburger',
          'Salt and science.  Put it in your mouth...?',
          'https://www.stockvault.net/data/2016/05/31/200979/preview16.jpg'),
          new Recipe(
            'Droopier Cheeseburger',
            'Droop! There it is',
            'https://www.stockvault.net/data/2016/05/31/200979/preview16.jpg')
        ];

    /* 
    118 created getRecipes() 
        which returns an exact copy of the recipes array (thanks to method .slice()).
        If we had just returned this.recipes (without slice()) it would have returned a reference 
        to the property.
    */
    getRecipes(){
        return this.recipes.slice(); // returns a new array that is an exact copy of the property
    }
}