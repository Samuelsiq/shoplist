import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe("Fried Chicken", "A Chicken fried", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM14plxiMJ8tRH6YW2Y4PlbJZP3tVDGzj4VEQ9qxtPL3Iarfn-bZhCzNsEAcyxxqLpXdQ&usqp=CAU")
    ];
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    constructor() { }
    
    ngOnInit(): void {
    
    }
    onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
    }

}
