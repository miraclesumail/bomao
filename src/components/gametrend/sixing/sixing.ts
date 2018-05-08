import {Component, ViewChild, Output, EventEmitter} from '@angular/core';
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
  @Output() output = new EventEmitter();


  menus:string[] = ['开奖','千位走势','百位走势','十位走势','个位走势']
  choose:string = '开奖';
  page:number = 1
  historyRecord: any;
  kaijiangData:any[];


  constructor(public common:CommonProvider,public util:UtilProvider, public ssc:SscServiceProvider) {
    console.log('Hello SixingComponent Component');
    this.historyRecord = this.util.historyNumbers.slice(0,this.page*11)
    this.getKaijiang()
    //this.text = 'Hello World';
  }

  getKaijiang(){
      this.kaijiangData = this.historyRecord.map((ele,index) => {
        let qianwei,baiwei,shiwei,gewei;
        qianwei = this.judgeKind(ele.history[1])
        baiwei = this.judgeKind(ele.history[2])
        shiwei = this.judgeKind(ele.history[3])
        gewei = this.judgeKind(ele.history[4])
        return {...ele, qianwei, baiwei, shiwei, gewei}
      })
  }

  judgeKind(number){
     if(number%2 == 0 && number >=5)
        return '大双'
     if(number%2 == 0 && number < 5)
        return '小双'
     if(number%2 != 0 && number >= 5)
        return '大单'
     if(number%2 != 0 && number < 5)
        return '小单'
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
