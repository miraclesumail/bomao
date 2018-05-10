import {Component, ViewChild,ElementRef, Output, EventEmitter, OnInit} from '@angular/core';
import { Slides } from 'ionic-angular';
import * as $ from 'jquery'
import * as _ from 'lodash'
/**
 * Generated class for the QiansanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qiansan',
  templateUrl: 'qiansan.html'
})
export class QiansanComponent implements OnInit{
  @ViewChild('contentSlides') contentSlides: Slides;
  @ViewChild('drag') drag:ElementRef

  @Output() output = new EventEmitter();

  originX:number;
  gap:number = 0;

  domWidth:number;

  historyRecord: any;

  numbers:any[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]

  menus:string[] = ['开奖','万位走势','千位走势']
  choose:string = '开奖';

  constructor() {
    console.log('Hello QiansanComponent Component');
    //this.text = 'Hello World';
  }

  ngOnInit(){
     this.contentSlides.lockSwipes(true)
     this.domWidth = this.drag.nativeElement.offsetWidth
     console.log(this.domWidth)
    //  setTimeout(()=>{
    //      $('.head-part').scrollLeft(100)
    //  },1000)

     this.drag.nativeElement.addEventListener('touchstart', (e)=>{
          this.originX = e.changedTouches[0].pageX
          console.log('begin')
          console.log(this.originX)
     }, false)

      this.drag.nativeElement.addEventListener('touchmove', 
          _.throttle((e)=>{
          let x = e.changedTouches[0].pageX
          let total = this.gap + x - this.originX
          console.log(total)
          if( total > 0 || total < -18*this.domWidth/28){
             return
          }
          this.gap = this.gap + x - this.originX
          console.log(x)
     },80)
      , false)

      

  }
}
