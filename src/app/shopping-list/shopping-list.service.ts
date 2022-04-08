import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
export class ShoppingListService {

    /* 
    121 added this new event emitter (that we will trigger via the addIngredient() method below)
    */
    ingredientsChanged = new EventEmitter<Ingredient[]>(); 

    // 120 added
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Scrapple',10),    
        new Ingredient('Snapple',6),    
        new Ingredient('Crabapples',42)    
    ];
    
    // 120 added
    getIngredients(){
        console.log('shopping-list.service getIngredients');
        return this.ingredients.slice();
    }

    // 120 added
    addIngredient(ingredient: Ingredient){
        console.log('shopping-list.service addIngredient');
        this.ingredients.push(ingredient);

        // 121 we pass in the updated ingredients array via the event emitter (defined above)
        this.ingredientsChanged.emit(this.ingredients.slice()); 
    }

}