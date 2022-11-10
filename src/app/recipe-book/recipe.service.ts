import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shoping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    constructor(private slService: ShoppingListService){

    }
    private recipes: Recipe[] = [
        new Recipe("Fried Chicken", "A Chicken fried", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM14plxiMJ8tRH6YW2Y4PlbJZP3tVDGzj4VEQ9qxtPL3Iarfn-bZhCzNsEAcyxxqLpXdQ&usqp=CAU", 
            [new Ingredients('Chicken', 1)])
    ];
    getRecipes(){
        return this.recipes.slice();
    }
    addInShoppList( ingredients: Ingredients[]){
        this.slService.onIngredientAddedAr(ingredients);
    }
}