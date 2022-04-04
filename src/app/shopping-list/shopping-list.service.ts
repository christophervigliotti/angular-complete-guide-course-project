import { Ingredient } from "../shared/ingredient.model";
export class ShoppingListService {

    // 120 added
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Scrapple',10),    
    ];
    
    // 120 added
    getIngredients(){
        return this.ingredients.slice();
    }

    // 120 added
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

}