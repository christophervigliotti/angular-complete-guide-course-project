# Course Project

## Notes By Chapter

### 49. Creating The Components

#### Error when attempting to create header.component.ts and header.component.html

Error: src/app/app.module.ts:10:5 - error NG6001: The class 'HeaderComponent' is listed in the declarations of the NgModule 'AppModule', but is not a directive, a component, or a pipe. Either remove it from the NgModule's declarations, or add an appropriate Angular decorator.  
  
10     HeaderComponent  
       ~~~~~~~~~~~~~~~  
  
  src/app/header/header.component.ts:7:14  
    7 export class HeaderComponent{  
                   ~~~~~~~~~~~~~~~  
    'HeaderComponent' is declared here.  
  
  
Error: src/app/header/header.component.ts:3:13 - error TS1146: Declaration expected.  
  
3 @Component(){              


## Getting Things Rolling

### Generate This Project

ng new angular-complete-guide-course-project —no-strict  
npm install —save-boostrap@3  

### ng --version

Angular CLI: 13.0.4  
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