import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable() // 123

export class RecipeService {
    // 119 added
    recipeSelected = new EventEmitter<Recipe>();

    // 118 moved the recipes array declration here and set it to private.  as such it cannot be directly accessed
    private recipes: Recipe[] = [
        new Recipe
        (
            'Le Big Mac',
            'Salt and science.',
            'https://www.stockvault.net/data/2016/05/31/200979/preview16.jpg',          
            // 122 added fourth ingredients array argument 
            [
                new Ingredient('All-Beef Patties',2),
                new Ingredient('Special Sauce',1),
                new Ingredient('Lettuce',1),
                new Ingredient('Cheese',1),
                new Ingredient('Pickles',1),
                new Ingredient('Onions',1),
                new Ingredient('Sesame Seed Bun',1)
            ]
        ),
        new Recipe
        (
            'Crabapple Surprise',
            'Surprise!  It tastes horrible!',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Malus_tschonoskii_fruits.JPG/1024px-Malus_tschonoskii_fruits.JPG',
            // 122 added fourth ingredients array argument 
            [
                new Ingredient('Crabapples',42),
                new Ingredient('Apples',3),
                new Ingredient('Snapple',1)
            ]
        )
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

    // 123
    constructor(
        private slService: ShoppingListService
    ){

    }

    // 123
    addIngredientsToShoppingList(
        ingredients: Ingredient[]
    ){
        this.slService.addIngredients(ingredients);
    }
}