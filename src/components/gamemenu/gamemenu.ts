import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger ,state,transition,animate,style} from "@angular/animations";
import { CommonProvider } from "../../providers/common/common";

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
  private _data;
  
  // @Input()
  // set data(val:any){
  //     console.log(val);
  //     this._data = val
  // }

  // get data(){
  //     return this._data
  // }

  // @Input('visible')visible:string;
  // @Input('small')small:any;
  // @Input('method')method:string;
  // @Input('smallMethod')smallMethod:string;
  //@Output('change')change :EventEmitter<any> = new EventEmitter<any>();
  
  choosen:any;

  constructor(public common:CommonProvider) {
    console.log('Hello GamemenuComponent Component');
    //this.getSmall()
  }

  ngAfterViewInit(){
    console.log('ddwd')
  }

  changeMethod(name){
    this.common.method = name;
    this.common.small = this.common.data.filter(item => item.name == name)[0].children;
    this.common.smallMethod = this.common.small[0].children[0]
  }

  confirm(name){
    this.common.smallMethod = name
  }

  toggle(){
    console.log('dddd')
    this.common.visible = 'invisable';
    $('.body-bg').fadeOut(1000)
  }
}
