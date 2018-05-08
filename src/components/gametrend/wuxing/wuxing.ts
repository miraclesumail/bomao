import {Component, ViewChild,Output, EventEmitter } from '@angular/core';
import { UtilProvider } from '../../../providers/util/util'
import { CommonProvider } from "../../../providers/common/common";
import { SscServiceProvider } from "../../../providers/ssc-service/ssc-service"
import { Slides } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { baseTrend} from '../baseTrend'
/**
 * Generated class for the WuxingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wuxing',
  templateUrl: 'wuxing.html'
})
export class WuxingComponent extends baseTrend{
  @ViewChild('contentSlides') contentSlides: Slides;
  @Output() output = new EventEmitter();

  menus:string[] = ['开奖','万位走势','千位走势','百位走势','十位走势','个位走势']
 
  choose:string = '开奖';

  historyRecord: any;

  load:boolean = false;

  kaijiangData:any[];

  page:number = 1

  finish:boolean = false

  constructor(public common:CommonProvider,public util:UtilProvider, public ssc:SscServiceProvider, public event:Events) {
    super(util)
    console.log('Hello WuxingComponent Component');
    // this.historyRecord = this.util.historyNumbers.slice(0,this.page*11)
    // this.getKaijiang()
  }

  //huoqu kaijiang
  getKaijiang(){
    this.kaijiangData = this.historyRecord.map((ele,index) => {
        let sum = ele.history.reduce((l,r) => l+r)
        let max = Math.max(...ele.history)
        let min = Math.min(...ele.history)
        let gap = max - min
        let da = ele.history.filter(el => el >= 5).length
        let daxiao = da + ':' + (5 - da)
        let odd = ele.history.filter(el => el%2 != 0).length
        let oddeven = odd + ':' + (5 -odd)
        return {...ele, sum,gap, daxiao, oddeven}
    })
  }

  // ionChange($event){
  //    console.log('wcnmb')
  //    console.log($event.value)
  //    this.contentSlides.slideTo(this.menus.indexOf($event.value))
  // }
   
  // slideChanged(){
  //     let index = this.contentSlides.getActiveIndex()
  //     this.choose = this.menus[index]
  // }

  doInfinite(infiniteScroll){
    if(this.load ) {
       
       //infiniteScroll.complete()
       //this.finish = true
       return
    }
    console.log('wegwgwe  ')
    let self = this
    this.load = true
    
        setTimeout(() => {
      //this.item.push(...this.item)
      this.historyRecord = this.util.historyNumbers.slice(0,++this.page*11)
      console.log(this.page)
          
           if(this.page>3){
                                  infiniteScroll.complete()

              this.finish = true

              return
           }
 
           this.getKaijiang()
    
           this.event.publish('changeHistory')
           this.output.next()
        
     
        this.load = false
        infiniteScroll.complete()

        //  if(this.page*11 == this.util.historyNumbers.length){
         
        //     this.finish = true
           
        //  }
      },600)
    
   
     
   
  }

  toggle(row,column){
         this.ssc.changeToggle(row,column)
         this.ssc.wuxingfushi()
  }
  
  say(){
    console.log('wuxing')
  }

}
