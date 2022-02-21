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
  @Output() sectionLinkClickEventEmitter = new EventEmitter<string>();

  // methods
  onClickSectionLink(section: string){
    this.section = section;
    console.log('header > handleSectionChange');
    console.log('  section:' + section);
    this.sectionLinkClickEventEmitter.emit(section);
  }

  getColor(section: string){
    return this.section === section ? 'pink' : 'red';
  }

  // methods, constructor & lifecycle hooks
  ngOnInit(): void {
      console.log('header > ngOnInit');
  }
}