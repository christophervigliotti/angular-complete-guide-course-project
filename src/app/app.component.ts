import { ForwardRefHandling } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // properties 
  title = 'angular-complete-guide-course-project';
  section = 'recipes';

  // methods
  doSection(section: string){
    console.log('app > doSection, section: ' + section);
    this.section = section;
  }

  // methods, constructor & lifecycle hooks
  ngOnInit(){
    // console.log(this.section);
    /*
    this.route.queryParams.subscribe(params => {
      console.log(params); 
      this.section = params.section;      
    });
    */
  }
}
