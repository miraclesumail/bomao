import { Component, Input, Output, EventEmitter, ViewChild,  } from '@angular/core';
import { UtilProvider } from '../../../providers/util/util'
import { Events } from 'ionic-angular';

/**
 * Generated class for the TrendHeadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'trend-head',
  templateUrl: 'trend-head.html'
})
export class TrendHeadComponent {
  //@Output('changeIndex')change :EventEmitter<any> = new EventEmitter<any>();

  headInfo:any;

  constructor(public util:UtilProvider,public events:Events) {
    console.log('Hello TrendHeadComponent Component');
   // this.text = 'Hello World';
  }

  ionChange($event){
     this.events.publish('changeIndex', $event)
  }
}
