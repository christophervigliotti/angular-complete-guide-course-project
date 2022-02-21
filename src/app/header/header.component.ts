import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; // via https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent 
  implements 
    OnInit
{
  // properties
  collapsed = true;
  section = 'recipes';
  @Output() sectionEventEmitter = new EventEmitter<string>();

  // methods
  doSection(section: string){
    this.section = section;
    console.log('header > doSection');
    console.log('  section:' + section);
    this.sectionEventEmitter.emit(section);
  }

  getColor(section: string){
    return this.section === section ? 'pink' : 'red';
  }

  // methods, constructor & lifecycle hooks
  ngOnInit(): void {
      console.log('header > ngOnInit');
  }
}