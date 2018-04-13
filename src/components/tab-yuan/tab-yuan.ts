import { Component } from '@angular/core';
import { CommonProvider } from "../../providers/common/common";
import { trigger ,state,transition,animate,style} from "@angular/animations";
import { Events } from 'ionic-angular';
/**
 * Generated class for the TabYuanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tab-yuan',
  templateUrl: 'tab-yuan.html',
  animations:[
    trigger('show',[
       state('visable',style({
         opacity: 1,
         transform:'translate3d(0, 0, 0)'
       })),
       state('invisable', style({
         opacity: 0,
        transform:'translate3d(0, 100%, 0)'
       })),
       transition('* => *',animate('.5s'))
    ])
   ]
})
export class TabYuanComponent {
  tabYuan:Array<any> = [
     "元","角","分" 
  ]
  
  constructor(public common:CommonProvider, public events:Events) {
    console.log('Hello TabYuanComponent Component');
    
  }

  changeMode(name){
    this.common.tabYuan = name
    this.events.publish('changeYuan', name);
    this.common.tabVisible = 'invisable'
  }

}
