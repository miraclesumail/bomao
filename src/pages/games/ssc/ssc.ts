import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { CommonProvider } from "../../../providers/common/common";
import * as $ from 'jquery'
import * as Hammer from 'hammerjs';

@IonicPage()
@Component({
  selector: 'ssc',
  templateUrl: 'ssc.html'
})
export class SscPage {
  record:any = [
    {number:23057,balls:'12345',shiwei:'大单',gewei:'小双',housan:'组六'},
    {number:23056,balls:'34567',shiwei:'大单',gewei:'小双',housan:'组六'},
  ]
  menus:any =  ['走势图','近期开奖','号码统计','玩法说明']
  over:boolean = false;
  open:boolean = false;

  constructor(public navCtrl: NavController,public common:CommonProvider) {
      this.common.setActiveTheme('ssc')
      document.body.addEventListener('click',(e)=>{
         
          if(e.target == document.getElementById('menu') || $(e.target).hasClass('small-menu') || !this.open) {
            return 
          }
          this.open = !this.open
          console.log('ddff')
      },false)
  }

  onDragDown(){
    console.log('eee')
  }

  ionViewDidLoad(){
    console.log(document.getElementById('qq'))
    let mc = new Hammer(document.getElementById('qq'));
    mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    mc.on('swipedown',()=>{
      console.log('axiba')
      this.record.push( {number:23056,balls:'34567',shiwei:'大单',gewei:'小双',housan:'组六'})
      this.over = true
    })
  }

  change(val){
    console.log(val)

  }
}
