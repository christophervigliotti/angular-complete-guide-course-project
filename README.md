# Course Project

## Notes By Chapter

### 49. Creating The Components

#### Components: Recipe List, Recipe Detail and Recipe Detail

`ng g c recipes/recipe-list --skip-tests true`
This created this Component inside of the recipes folder `recipes/recipie-list`
`ng g c recipes/recipe-detail --skip-tests true`
`ng g c recipes/recipe-list/recipe-detail --skip-tests true`

#### Component: Recipes 

Created via `ng g c recipes --skipTests true`.  Note that this is shorthand for ng generate component recipes --skipTests true (older syntax has the switch `--spec false`).  Received this helpful message when running this command...

`Support for camel case arguments has been deprecated and will be removed in a future major version. Use '--skip-tests' instead of '--skipTests'.`

#### Component: Header

Created manually

Encountered an error when attempting to create header.component.ts and header.component.html...(TLDR, was a syntax error)

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
  
3 @Component(){    ```

##### Solution

changed...
  
```@Component(){  
  selector: 'app-header',  
  templateUrl: './header.component.html'  
}  ```
  
...to...  
  
```@Component({  
  selector: 'app-header',  
  templateUrl: './header.component.html'  
})  ```

## Getting Things Rolling

### Generate This Project

```ng new angular-complete-guide-course-project —no-strict  
npm install —save-boostrap@3  ```

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
typescript                      4.4.4  ```