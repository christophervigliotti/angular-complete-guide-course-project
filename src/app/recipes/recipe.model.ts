import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    // properties
    public name: string;
    public description: string;
    public imagePath: string; // url to image (we are using pics from the web)

    // 122 added...
    public ingredients: Ingredient[];

    constructor(
        name: string, 
        description: string, 
        imagePath: string, 
        ingredients: Ingredient[] // 122 
    ){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients; // 122 
    }
}