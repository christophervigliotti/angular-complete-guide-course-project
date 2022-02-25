# Course Project

*This is one of several repos that I created for the course "Angular - The Complete Guide (2022 Edition)".  For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .*

## Section 6: Course Project - Components & Databinding

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
