import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { CommonProvider } from "../../../providers/common/common";
import { HttpClientProvider } from "../../../providers/http-client/http-client";
import { UtilProvider } from '../../../providers/util/util'
import * as $ from 'jquery'
import * as Hammer from 'hammerjs';

let tt = 0;

function easeOutCubic(t, b, c, d) {
  return c*((t=t/d-1)*t*t + 1) + b;
}

function move(){
  tt += 1000/60;
  
  let ball = document.getElementById('ball');
  if(tt < 500){
     let left = Math.ceil(easeOutCubic(tt,150,350,500))
     ball.style.left = left + 'px'
     ball.style.top =  -(350*(left - 150 ) -((left - 150)*(left - 150)))/1000  + 'px'
     requestAnimationFrame(move)
  }else{
     console.log('wwww')
  }
}


@IonicPage()
@Component({
  selector: 'ssc',
  templateUrl: 'ssc.html'
})
export class SscPage {
  data:any;
  
  method:string;
  smallMethod:string;
  small:any;
  visible:string = 'invisable';
  record:any = [
    {number:23057,balls:'12345',shiwei:'大单',gewei:'小双',housan:'组六'},
    {number:23056,balls:'34567',shiwei:'大单',gewei:'小双',housan:'组六'},
  ]
  menus:any =  ['走势图','近期开奖','号码统计','玩法说明']
  over:boolean = false;
  open:boolean = false;

  /*
     x*2 + 50x
  */

  constructor(public navCtrl: NavController,public common:CommonProvider,public http:HttpClientProvider,public util:UtilProvider) {
      this.common.setActiveTheme('ssc')
    
      document.body.addEventListener('click',(e)=>{
         
          if(e.target == document.getElementById('menu') || $(e.target).hasClass('small-menu') || !this.open) {
            return 
          }
          this.open = !this.open
          console.log('ddff')
      },false)
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

  addToCart(){
    if(this.common.count == 0){return}
    move()
    this.common.cartNumber++
  }  

  toggle(){
    this.visible = this.visible == 'invisable' ? 'visable':'invisable'
    this.visible == 'visable' ? $('.body-bg').fadeIn(1000) : $('.body-bg').fadeOut(1000)
    //$('.choose-game').toggleClass('alert-show')
  }

  turnVisible($event){
    this.visible = $event.visible
    this.visible == 'visable' ? $('.body-bg').fadeIn(1000) : $('.body-bg').fadeOut(1000)
    this.method = $event.method[0];
    console.log(this.method);
    this.smallMethod = $event.method[1];
    this.small = this.data.filter(item => item.name == this.method)[0].children;
  }

  change(val){
    console.log(val)
  }

  qqq(number){
    return number + 5
  } 
  // touchStartEvent(event){
  //   event.stopPropagation();
  //   event.preventDefault();
    
  //   console.log(event)
  //   console.log(event.changedTouches[0].pageX)
  // }

  // touchMoveEvent(event){
  //   event.stopPropagation();
  //   event.preventDefault();
    
  //   console.log(event)
  //   console.log(event.changedTouches[0].pageX)
  // }
}
