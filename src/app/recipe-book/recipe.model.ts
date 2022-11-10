import { Ingredients } from "../shared/ingredients.model";

export class Recipe{
    public name: string;
    public description: string;
    public imagPath: string;
    public ingredients: Ingredients[];
    
    constructor(name: string, desc:string, imagPath: string, ingredients: Ingredients[]){
        this.name = name;
        this.description = desc;
        this.imagPath = imagPath;
        this.ingredients = ingredients;
        
    }

}