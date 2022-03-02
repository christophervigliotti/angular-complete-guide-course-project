import { ForwardRefHandling } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static:true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static:true}) amountInputRef: ElementRef;

  onAddItem(){
    console.log('shopping-edit > onAddItem');
    const newIngredient = new Ingredient
      (
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
      );
    this.ingredientAdded.emit(newIngredient);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
