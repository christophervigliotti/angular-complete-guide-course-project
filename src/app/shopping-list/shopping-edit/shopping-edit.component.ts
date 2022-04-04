// do I need this? import { ForwardRefHandling } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core'; // 120 removed Output, EventEmitter
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // 120 removed @Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static:true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static:true}) amountInputRef: ElementRef;

  onAddItem(){
    console.log('shopping-edit > onAddItem');
    const newIngredient = new Ingredient
      (
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
      );
    // 120 removed (bc error)... this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }

  constructor(
    // 120 added 
    private slService: ShoppingListService
  ) { }

  ngOnInit(): void {
  }

}
