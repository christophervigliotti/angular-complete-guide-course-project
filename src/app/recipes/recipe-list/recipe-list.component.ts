import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Droopy Cheeseburger',
      'Salt and science.  Put it in your mouth!',
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/Burger-King-Bacon-Cheeseburger.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}