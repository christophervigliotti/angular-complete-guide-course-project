import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() recipeAdded = new EventEmitter<{name: string, amount: string}>();
  @Output() recipeDeleted = new EventEmitter<{name: string, amount: string}>();

  @ViewChild('nameInput', {static:true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static:true}) amountInput: ElementRef;

  onAddIngredient(
    nameInput: HTMLInputElement,
    amountInput: HTMLInputElement
  ){
    console.log('shopping-edit > onAddIngredient');
    console.log(' name:' + this.nameInput.nativeElement.value);
    console.log(' amount:' + this.amountInput.nativeElement.value);
    // TODO: add the new Ingredient here
  }

  onDeleteIngredient(
    nameInput: HTMLInputElement,
    amountInput: HTMLInputElement
  ){
    console.log('shopping-edit > onDeleteIngredient');
    console.log(' name:' + this.nameInput.nativeElement.value);
    console.log(' amount:' + this.amountInput.nativeElement.value);
    // TODO: remove the Ingredient here
  }

  constructor() { }

  ngOnInit(): void {
  }

}
