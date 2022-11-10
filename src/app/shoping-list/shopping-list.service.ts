import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService {
    inChanged = new EventEmitter<Ingredients[]>();
    private ingredients: Ingredients[] = [
        new Ingredients('Oil', 4),
    ];
    onIngredientAdded(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        this.inChanged.emit(this.ingredients.slice());
    }
    getIngredients(){
        return this.ingredients.slice();
    }
    onIngredientAddedAr(ingredients: Ingredients[]){
        this.ingredients.push(...ingredients);
        this.inChanged.emit(this.ingredients.slice());
    }
}