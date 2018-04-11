import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger ,state,transition,animate,style} from "@angular/animations";
import * as $ from 'jquery';

/**
 * Generated class for the GamemenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'gamemenu',
  templateUrl: 'gamemenu.html',
  animations:[
    trigger('fading',[
       state('visable',style({
         opacity: 1,
         transform:'scale(1,1)'
         //transform:'translate3d(0, 0, 0)'
       })),
       state('invisable', style({
         opacity: 0,
         transform:'scale(1,0)'
         //transform:'translate3d(0, -100%, 0)'
       })),
       transition('* => *',animate('1s'))
    ])
   ]
})

export class GamemenuComponent {
  @Input('data')data:any;
  @Input('visible')visible:string;
  
  @Output('change')change :EventEmitter<any> = new EventEmitter<any>();
  method:any;
  small:any;
  choosen:any;
  //visible:string = 'invisable';

  constructor() {
    console.log('Hello GamemenuComponent Component');
  }

  changeMethod(name){
    this.method = name;
    this.small = this.data.list.filter(item => item.name == name)[0].children;
  }

  confirm(name){
    this.choosen = this.method + name
  }

  toggle(){
    console.log('dddd')
    this.change.emit('invisable')
  }
}
