import { Component, Input, OnInit } from '@angular/core'; // 119 removed imports for Output, EventEmitter
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  onSelected(){
    console.log('recipe-item > onSelected');
    // 119 removed this.recipeSelected.emit();
    // 119 added
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  constructor(
    // 119 added 
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
  }

}
