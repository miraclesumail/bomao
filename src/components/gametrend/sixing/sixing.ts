import {Component, ViewChild} from '@angular/core';
import { UtilProvider } from '../../../providers/util/util'
import { CommonProvider } from "../../../providers/common/common";
import { SscServiceProvider } from "../../../providers/ssc-service/ssc-service"
import { Slides } from 'ionic-angular';

/**
 * Generated class for the SixingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sixing',
  templateUrl: 'sixing.html'
})
export class SixingComponent {
  @ViewChild('contentSlides') contentSlides: Slides;

  menus:string[] = ['开奖','千位走势','百位走势','十位走势','个位走势']
  choose:string = '开奖';

  historyRecord: any;

  constructor(public common:CommonProvider,public util:UtilProvider, public ssc:SscServiceProvider) {
    console.log('Hello SixingComponent Component');
    this.historyRecord = this.util.sixingData
    //this.text = 'Hello World';
  }

  ionChange($event){
     console.log('wcnmb')
     console.log($event.value)
     this.contentSlides.slideTo(this.menus.indexOf($event.value))
  }
   
  slideChanged(){
      let index = this.contentSlides.getActiveIndex()
      this.choose = this.menus[index]
  }

  doInfinite(infiniteScroll){
    console.log('load')
    setTimeout(() => { infiniteScroll.complete()},1000)
  }

  toggle(row,column){
         this.ssc.changeToggle(row,column)
         this.ssc.wuxingfushi()
  }

  
}
