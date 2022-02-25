import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>(); // so we can listen to this event from outside

  constructor() { }

  onSelected(){
    console.log('recipe-item > onSelected');
    this.recipeSelected.emit();
  }

  ngOnInit(): void {
  }

}
