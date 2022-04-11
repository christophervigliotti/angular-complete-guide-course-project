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

    // 123 
    addIngredients(
        ingredients: Ingredient[]
    ){
        /* 
        we could do it this way...the down-side is 
        that we emit a lot of events

        for(let ingredient of ingredients){
            this.addIngredient(ingredient);
        }

        instead we directly add all ingredients in one go and then emit the event
        */
        this.ingredients.push(...ingredients); // the three dots is the "spread operator"
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}