import { Component,Input,Output,EventEmitter } from '@angular/core';

/**
 * Generated class for the RightmenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rightmenu',
  templateUrl: 'rightmenu.html'
})
export class RightmenuComponent {
  @Input('menus')menus:any;
  @Input('open')open:any;
  @Output('switch') change: EventEmitter<any> = new EventEmitter<any>();
  
  text: string;

  constructor() {
    console.log('Hello RightmenuComponent Component');
    this.text = 'Hello World';
  }

  switch(title){
    this.change.emit(title)
  }
}
