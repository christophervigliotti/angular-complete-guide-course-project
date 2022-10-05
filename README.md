# Course Project

*This is one of several repos that I created for the course ["Angular - The Complete Guide (2022 Edition)"](https://www.udemy.com/course/the-complete-guide-to-angular-2/).  For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .*

## Section 12: Course Project - Routing

### 157? Adding Navigation to the App

```
goal
    to add navigation to the app

what changed

    tbd
```

### 156 Setting Up Routes

```
goal
    implement routing

what changed?

    app-routing.module.ts
        created file
        defined class AppRoutingModule
        imported and configured NgModule
        imported Routes
        registered (defined) three routes in constant "appRoutes" (of type "route")
            the default route would not redirect until I added pathMatch and set it to 'full'
                {
                    path: '',
                    redirectTo: '/recipes', 
                    pathMatch: 'full'
                }

    app.component.html
        replaced our "ngIf" trick (using <app-recipes> and <app-shopping-list> code blocks) with <router-outlet> tag

    app.module.ts
        imported AppRoutingModule so that we can define routes


what's next?
    adding navigation to the app
```

## Section 10: Course Project - Services & Dependency Injection

### 123 Passing Ingredients from Recipes to the Shopping List (via a Service) 

* (7 min) https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656246#overview 

### 122. Adding Ingredients to Recipes

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656244#overview

### 121. Using Services for Pushing Data from A to B

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656242#overview

### 120. Adding the Shopping List Service

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656240#overview 

### 119. Using a Service for Cross-Component Communication

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656238#overview

### 118. Managing Recipes in a Recipe Service

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656236#overview

notes added directly to files

### 117. Setting up the Services

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656234#overview 

files reciope.service.ts and shopping-list.service.ts created, `export` code added

### 116. Introduction

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656232#overview 

## Section 7: Course Project - Directives

### 104. Closing the Dropdown From Anywhere

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14906174#overview

#### dropdown.directive.ts

```
import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
```

### 103. Building and Using a Dropdown Directive

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656192#overview

#### Requirement

Create dropdown.directive.ts and add the 'open' class to the Manage Recipe button group when clicked (and remove it when clicking anywhere else)

#### dropdown.directive.ts

* to listen to a click, add `@HostListener`, which will fire method `toggleOpen()`
* add `isOpen` variable to track open/closed status
* add logic inside of `HostListener` to toggle the boolean variable `isOpen`
* dynamically attach/detatch a css class via `@HostBindings`.  This allow us to bind to properties of the element that this directive is attached to
* ('class.open') where `class` is an array of classes and `open` is the class name that we want to add but only when `isOpen = false` (conversely is removed when the element attached to this directive is clicked when isOpen is true)

```
import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
```

##### app.module.ts
`import { DropdownDirective } from './shared/dropdown.directive';` and add `DropdownDirective` to the `declarations` array

#### recipe-detail.component.html
Implemented the directive by adding `appDropdown` to `<div appDropdown class="btn-group">`

#### header.component.html
Implemented the directive by adding `appDropdown` to `<li appDropdown class="dropdown">`

## Section 6: Course Project - Components & Databinding

DONE!

### 90 Allowing the User to Add Ingredients to the Shopping List
* In shopping-edit template, added local references #nameInput and #amountInput to their respective text input fields
* challenge: make add,buttons functional (by passing by argument or by selecting them with @viewchild)
* from my earlier notes: `@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;`
* rewatched https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656094#overview

#### shopping-edit template
add local references #nameInput and #amountInput...
```
<input 
    type="text" 
    id="name" 
    class="form-control" 
    #nameInput
/>
<input 
    type="number" 
    id="amount" 
    class="form-control" 
    #amountInput 
/>
```
...and also add click listener...
```
<button 
    class="btn btn-success" 
    type="submit" 
    (click)="onAddItem()"
>Add</button>
```

#### shopping-edit component
add an event emitter to broadcast to the parent...
```
@Output() ingredientAdded = new EventEmitter<Ingredient>();
```
...add viewChild decorator sso that we can grab the values from the template...
```
@ViewChild('nameInput', {static:true}) nameInputRef: ElementRef;
@ViewChild('amountInput', {static:true}) amountInputRef: ElementRef;
```
...lastly add the onAddItem() method that we are calling in the click listener in the cooresponding template...
```
onAddItem(){
    const newIngredient = new Ingredient
        (
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
        );
    this.ingredientAdded.emit(newIngredient);
}
```

#### shopping-list template (parent of shopping-edit)
add a listener to listen for the ingredientAdded event
```
<app-shopping-edit
    (ingredientAdded)="onIngredientAdded($event)"
></app-shopping-edit>
```

#### shopping-list component
implement the method that our listener is calling...have it push the new ingredient to the ingredients array.  Magic!
```
onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
}
```

### 89 Make sure you have FormsModule added!

One quick note: In case you're hitting an error in the next lecture, make sure you have FormsModule added to your imports[] in the AppModule. Also have a look at the following Q&A thread for more info: https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/questions/4924644  

DONE!

### 88 Passing Data with Event and Property Binding (Combined)

#### 1. Define an event emitter in recipe-item (using both the component and the template)

`(click)="onSelected()"` is a click listener...specifically it is a click listener that fires method `onSelected()` when clicked.
```
<!-- recipe-item template -->
<a 
    href="#" 
    class="list-group-item clearfix" 
    (click)="onSelected()"
>
```

`@Output() recipeSelected ` allows the code to emit an event (via method `onSelected()`).   `@Output` means that it can be listened to from outside of this component. Method  `onSelected` triggers an event...specifically this code is what triggers the event: `this.recipeSelected.emit();`.  
```
// recipe-item component
@Input() recipe: Recipe;
@Output() recipeSelected = new EventEmitter<void>(); // so we can listen to this event from outside

onSelected(){
    this.recipeSelected.emit();
}

```
#### 2. Implement the event emitter in the recipe-list template (and define another event emitter to pass data along to the parent of recipe-list, which is 'recipes')

Here we implement the event defined in the previous step with `(recipeSelected)="onRecipeSelected(recipeEl)"`.  This listens for the event (that is emitted in recipe-item when a recipe is clicked.  
  
`[recipe]="recipeEl"` declares a local variable recipe

We define another event with `(recipeSelected)="onRecipeSelected(recipeEl)"` and `@Output() recipeWasSelected = new EventEmitter<Recipe>();` and we emit (or fire) it (passing the recipe) with method `onRecipeSelected()`.

```
<!-- recipe-list template -->
<app-recipe-item
    *ngFor="let recipeEl of recipes" 
    [recipe]="recipeEl" 
    (recipeSelected)="onRecipeSelected(recipeEl)" 
></app-recipe-item>

// recipe-list component
@Output() recipeWasSelected = new EventEmitter<Recipe>(); 
// and...
onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
}
```

#### 3. In recipes we listen for and receive the event emitted by recipe-list and then display recipe details

listens for the event from the child recipe-list `(recipeWasSelected)="selectedRecipe = $event"`

Also note the ngIf / ng-template code...this displays 'select a recipe' until one is selected.  Cool stuff

```
// recipes component
selectedRecipe: Recipe;
<!-- recipes template -->
<h2>Recipes</h2>
<div class="row">
    <div class="col-md-5">
        <app-recipe-list
            (recipeWasSelected)="selectedRecipe = $event"
        ></app-recipe-list>
    </div>
    <div class="col-md-7">
        <app-recipe-detail
            *ngIf="selectedRecipe; else infoText" 
            [recipe]="selectedRecipe"
        ></app-recipe-detail>
        <ng-template #infoText>
            <p>Please select a recipe.</p>
        </ng-template>
    </div>
</div>
```
#### 4. Recipe detail displays...the recipe details (naturally)


recipe-detail component
```
import { Recipe } from '../recipe.model';
// and
@Input() recipe: Recipe;
```

recipe-detail template
```
<div class="row">
    <div class="col-xs-12">
        <h1>{{recipe.name}}</h1>
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        <img 
        [src]="recipe.imagePath" 
        alt="{{recipe.name}}" 
        class="img-responsive" 
        style="max-height:200px;" />
    </div>
</div>
```

### 87 Passing Recipe Data with Property Binding

#### What's Happening Here?!

1. recipe.model.ts - Recipe is defined in the model
2. recipe-list.component.ts - the Recipes array is defined in recipe-list component (contains a few hard-coded examples so we can see something)
3. recipe-item.component.ts - The recipe model is imported and defined as an @Input var so we can pass it to the 
4. The recipe-list component loops through the Recipes array, passing in each recipe to the recipe-item template.  

#### The Code

In recipe-list template, pass in each recipe to the recipe-item template...
```
<app-recipe-item
    *ngFor="let recipeEl of recipes" 
    [recipe]="recipeEl"
></app-recipe-item>
```

In recipe item template, display the recipe details...
```
<a 
href="#" 
class="list-group-item clearfix" 
>
    <div class="pull-left">
        <h4 class="list-group-item-heading">{{recipe.name}}</h4>
        <p class="list-group-item-text">{{recipe.description}}</p>
    </div>
    <span class="pull-right">
        <img 
            [src]="recipe.imagePath"
            alt="{{recipe.name}}" 
            class="img-responsive" 
            style="max-height: 50px;" 
        />
    </span>
</a>
```

In recipe item component, import the model and add an @Input() decorator.  This allows us to bind this property from elsewhere...
```
import { Recipe } from '../../recipe.model';
// and
@Input() recipe: Recipe;
```

#### More Stuff

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656142#questions 


### 86 Adding Navigation with Event Binding and ngif

* Challenge: use ngif to only load one of the two sections at a time 

#### Step One: Sketch Out My Idea
 
```
// app.component.html...
<app-recipes *ngIf="section == 'recipes'"></app-recipes>
<app-shopping-list *ngIf="section == 'shopping-list'"></app-shopping-list>

// app.component.ts...
section = 'recipes';

// header.component.html...
<ul class="nav navbar-nav">
    <li><a href="#" (click)="handleSectionChange('recipes')">Recipes</a></li>
    <li><a href="#" (click)="handleSectionChange('shopping-list')">Shopping List</a></li>
</ul>

// header.component.ts...
handleSectionChange(section: string){
  console.log(section);
}
```


#### Step Two: Tie It Together

* have header.component speak to app.component 

```
// app.component.ts...
handleSectionChange(section: string){
  console.log('app > handleSectionChange, section: ' + section);
  this.section = section;
}

// app.component.html...
<app-header
  (sectionLinkClickEventEmitter)="handleSectionChange($event)"
></app-header>
```

#### Step Three: A Little Extra

I wanted to add conditional code that colored the active link.  I am certain that there is a better/different way to do this (but have not learned yet).

```
// app.component.ts...
getColor(section: string){
  return this.section === section ? 'pink' : 'red';
}

// app.component.html...
<li>
    <a 
        href="#" 
        (click)="handleSectionChange('recipes')" 
        [ngStyle]="{'color':(getColor('recipes'))}"
    >Recipes</a>
</li>
<li><a 
        href="#" 
        (click)="handleSectionChange('shopping-list')" 
        [ngStyle]="{'color':(getColor('shopping-list'))}"
    >Shopping List</a>
</li>

```

#### Step Four: How The Instructor Did It

Yup I got it.

## Section 5: Components & Databinding Deep Dive

work for this section is performed in repo https://github.com/christophervigliotti/angular-complete-guide-components-and-databinding

## Section 4: Debugging

see https://github.com/christophervigliotti/angular-complete-guide-debugging

## Section 3: Course Project - The Basics

### 61 Wrap Up & Next Steps

lecture https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656048#questions

### 60 Adding a Shopping List Edit Section

- added layout elements to shopping-edit component html

lecture https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656046#questions

### 59 Creating and Outputting the Shopping List

- integrated the recipe-item model into the shopping-list component (ts, html)

lecture https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656042#notes

### 58 Creating an "Ingredient" Model

- app/shared/ingredient.model.ts...

```
export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name:string, amount: number){
            this.name = name;
            this.amount = amount;
    }

}
```
...you can rewrite the above by adding accessor "public" to the constructor arguments...
```
export class Ingredient {
    constructor(public name:string, public amount: number){
    }
}
```

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656040#notes

### 57 Working on the ShoppingListComponent

- changes to shopping-list.component.html & .ts

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656038#notes 

### 56 Displaying Recipe Details

#### recipe-list.component.html...
- added layout elements

lecture https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656036#notes

### 55 Outputting a List of Recipes with ngFor

####  recipe-list.component.html
- string interpolation `src="{{recipe.imagePath}}"` 
- property binding `[src]="recipe.imagePath`

lecture https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656034#notes

### 54 Adding Content to the Recipes Components

* recipe-list-component.html - added a hard-coded recipe
* recipe-list-component.ts - changed the recipe property from an array to an array of recipes
* lecture https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656030

### 53 Creating a "Recipe" Model

created a simple model in recipe.model.ts

```
export class Recipe {
    // properties
    public name: string;
    public description: string;
    public imagePath: string; // url to image (we are using pics from the web)

    constructor(name: string, description: string, imagePath: string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}
```

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656026#questions

### 52 Alternative Non-Collapseable Navigation Bar

added code that was provided by the course

### 51 Adding a Navigation Bar

adding layout elements to the header component

### 50 Using the Components

sketching out a layout...adding some component tags

### 49 Creating The Components

#### Components: Recipe List, Recipe Detail and Recipe Detail

`ng g c recipes/recipe-list --skip-tests true` 
This created this Component inside of the recipes folder `recipes/recipie-list` 

`ng g c recipes/recipe-detail --skip-tests true` 

`ng g c recipes/recipe-list/recipe-detail --skip-tests true`

(other components created)

#### Component: Recipes
Created via `ng g c recipes --skipTests true`. Note that this is shorthand for `ng generate component recipes --skipTests true` (older syntax has the switch `--spec false`). Received this helpful message when running this command...

`Support for camel case arguments has been deprecated and will be removed in a future major version. Use '--skip-tests' instead of '--skipTests'.`

#### Error when attempting to create header.component.ts and header.component.html

##### Stuck At 

https://github.com/christophervigliotti/angular-complete-guide-course-project/tree/913158e94aa811ff0d570335f4f57797070d883e

##### Error Message

```Error: src/app/app.module.ts:10:5 - error NG6001: The class 'HeaderComponent' is listed in the declarations of the NgModule 'AppModule', but is not a directive, a component, or a pipe. Either remove it from the NgModule's declarations, or add an appropriate Angular decorator.  
  
10     HeaderComponent  
       ~~~~~~~~~~~~~~~  
  
  src/app/header/header.component.ts:7:14  
    7 export class HeaderComponent{  
                   ~~~~~~~~~~~~~~~  
    'HeaderComponent' is declared here.  
  
  
Error: src/app/header/header.component.ts:3:13 - error TS1146: Declaration expected.  
  
3 @Component(){
```

##### Solution

changed...
  
```@Component(){  
  selector: 'app-header',  
  templateUrl: './header.component.html'  
}```  
  
...to...  
  
```@Component({  
  selector: 'app-header',  
  templateUrl: './header.component.html'  
})```  

## Getting Things Rolling

### Generate This Project

```ng new angular-complete-guide-course-project —no-strict  
npm install —save-boostrap@3
```

### ng --version

```Angular CLI: 13.0.4  
Node: 16.13.0  
Package Manager: npm 8.1.3  
OS: linux arm64  
  
Angular: 13.0.3  
... animations, common, compiler, compiler-cli, core, forms  
... platform-browser, platform-browser-dynamic, router  
  
Package                         Version  
  
@angular-devkit/architect       0.1300.4  
@angular-devkit/build-angular   13.0.4  
@angular-devkit/core            13.0.4  
@angular-devkit/schematics      13.0.4  
@angular/cli                    13.0.4  
@schematics/angular             13.0.4  
rxjs                            7.4.0  
typescript                      4.4.4
```
