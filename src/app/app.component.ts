import { ForwardRefHandling } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-complete-guide-course-project';
  section = 'recipes';
  // section = 'shopping-list';

  // constructor(private route: ActivatedRoute){}

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
