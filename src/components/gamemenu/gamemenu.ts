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
  private _data;
  
  @Input()
  set data(val:any){
      console.log(val);
      this._data = val
      // if(val)
      //   this.small = val.filter(item => item.name == this.method)[0];
  }

  get data(){
      return this._data
  }
  @Input('visible')visible:string;
  @Input('small')small:any;
  @Output('change')change :EventEmitter<any> = new EventEmitter<any>();
  @Input('method')method:string;
  @Input('smallMethod')smallMethod:string;
  
  choosen:any;
  //visible:string = 'invisable';

  constructor() {
    console.log('Hello GamemenuComponent Component');
    //this.getSmall()
  }

  ngAfterViewInit(){
    console.log('ddwd')
    console.log(this.data)

  }

  changeMethod(name){
    this.method = name;
    this.small = this.data.filter(item => item.name == name)[0].children;
    this.smallMethod = this.small[0]
  }

  confirm(name){
    this.smallMethod = name
  }

  toggle(){
    console.log('dddd')
    this.change.emit({visible:'invisable',method:[this.method,this.smallMethod]})
  }
}
