import { Component, ElementRef } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { CommonProvider } from "../../../providers/common/common";
import { HttpClientProvider } from "../../../providers/http-client/http-client";
import { UtilProvider } from '../../../providers/util/util'
import { GamemenuComponent } from '../../../components/gamemenu/gamemenu'
import { BasketDataProvider } from '../../../providers/basket-data/basket-data'
import { Effect } from '../../baseComponent'

import * as $ from 'jquery'
import * as Hammer from 'hammerjs';

let tt = 0;
let top = 0;

function easeOutCubic(t, b, c, d) {
  return c*((t=t/d-1)*t*t + 1) + b;
}

// 小球达到最高点开始变小
// function move(obj){
//   tt += 1000/60;
//   let width = document.getElementById('bet-statistic').offsetWidth
//   let ball = document.getElementById('ball');
//   if(tt < 1000){
//      let left = Math.ceil(easeOutCubic(tt,50,width,1000))
//      ball.style.left = left + 'px'

//      // let high = -(width*(left - 150 ) -((left - 150)*(left - 150)))/500;
//      let high = width*width/1200
//      let top = -(width - left + 50)*(left -50)/300
//      // y = -(x- width)x/300 = (width - left + 150)(left -150)/300   high = width*width/1200
//      ball.style.top =  top  + 'px'
//      if(Math.abs(top)>=high){
//         let time = 1000 - tt
//         $('#ball').animate({width:0,height:0},time,function(){
        
//            // $(this).remove()
//             console.log('finish')
//         })
//      }
//      top = Math.abs(high)
//      requestAnimationFrame(move)
//   }else{
//     console.log('ssss')
    
//      $('#ball').remove()
//      tt = 0
//      console.log('wwww')
//   }
// }


@IonicPage()
@Component({
  selector: 'ssc',
  templateUrl: 'ssc.html',
  providers:[GamemenuComponent]
})
export class SscPage extends Effect{
  data:any;
  high:number = 0

  shadow:boolean = true
  author:string='fwwwgwg';
  method:string;
  smallMethod:string;
  small:any;
  visible:string = 'invisable';
  record:any = [
    {number:23057,balls:'12345',shiwei:'大单',gewei:'小双',housan:'组六'},
    {number:23056,balls:'34567',shiwei:'大单',gewei:'小双',housan:'组六'},
    {number:23057,balls:'12345',shiwei:'大单',gewei:'小双',housan:'组六'},
    {number:23056,balls:'34567',shiwei:'大单',gewei:'小双',housan:'组六'},
    {number:23057,balls:'12345',shiwei:'大单',gewei:'小双',housan:'组六'},
    {number:23056,balls:'34567',shiwei:'大单',gewei:'小双',housan:'组六'},
    {number:23057,balls:'12345',shiwei:'大单',gewei:'小双',housan:'组六'},
    {number:23056,balls:'34567',shiwei:'大单',gewei:'小双',housan:'组六'},
    {number:23057,balls:'12345',shiwei:'大单',gewei:'小双',housan:'组六'},
    {number:23056,balls:'34567',shiwei:'大单',gewei:'小双',housan:'组六'}
  ]

  loadNumber:any = 0
  list:any = []

  menus:any =  ['走势图','近期开奖','号码统计','玩法说明']
  over:boolean = false;
  open:boolean = false;

  /*
     x*2 + 50x
  */

  constructor(public navCtrl: NavController,public common:CommonProvider,public http:HttpClientProvider,public util:UtilProvider,public basket:BasketDataProvider,public gamemenu:GamemenuComponent) {
      super(common,gamemenu)
      this.common.setActiveTheme('ssc')
      this.util.setData()
      this.list = this.record.slice(0,2)
      this.util.shakePhone(this.util.randomChoose)
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
      //this.record.push( {number:23056,balls:'34567',shiwei:'大单',gewei:'小双',housan:'组六'})
      if(++this.loadNumber == 2)
         this.over = true
      
      if(this.loadNumber == 1)
         this.high = 90

      if(this.loadNumber == 2)
         this.high = 240

      this.list = this.record.slice(0, this.loadNumber*5)
    
    })

    let touch = new Hammer(document.getElementById('touch'));
    touch.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    touch.on('swipeup',()=>{
       if(this.loadNumber == 2){
        this.loadNumber = 0
        this.over = false
        this.high = 0


       setTimeout(()=> {
        let mc = new Hammer(document.getElementById('qq'));
        mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
        mc.on('swipedown',()=>{
          console.log('axiba')
          //this.record.push( {number:23056,balls:'34567',shiwei:'大单',gewei:'小双',housan:'组六'})
        
           //this.record.push( {number:23056,balls:'34567',shiwei:'大单',gewei:'小双',housan:'组六'})
          if(++this.loadNumber == 2)
              this.over = true
          
          if(this.loadNumber == 1)
              this.high = 90

          if(this.loadNumber == 2)
              this.high = 240
        })
      },0)
       }

     })
  }

  move(){
    tt += 1000/60;
    let width = document.getElementById('bet-statistic').offsetWidth
    let ball = document.getElementById('ball');
    if(tt < 600){
       let left = Math.ceil(easeOutCubic(tt,50,width,600))
       ball.style.left = left + 'px'
  
       // let high = -(width*(left - 150 ) -((left - 150)*(left - 150)))/500;
       let high = width*width/1200
       let top = -(width - left + 50)*(left -50)/300
       // y = -(x- width)x/300 = (width - left + 150)(left -150)/300   high = width*width/1200
       ball.style.top =  top  + 'px'
       if(Math.abs(top)>=high){
          let time = 600 - tt
          $('#ball').animate({width:0,height:0},time,function(){
              console.log('finish')
          })
       }
       top = Math.abs(high)
       
       requestAnimationFrame(this.move.bind(this))
    }else{
      console.log('wwww')
       this.common.cartNumber++
       $('#ball').remove()
       tt = 0  
    }
  }

  addToCart(dom){
    console.log(dom.innerText)
    if(this.common.count == 0){return}
    // 把数据放进购彩蓝
    this.basket.addBetData(dom.innerText)
    $('<div id="ball"></div>').appendTo($('#bet-statistic'));
    this.move()

    this.util.resetData()
    
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
    if(val == '走势图')
      this.navCtrl.push('GameTrendPage')
  }

  qqq(number){
    return number + 5
  } 

  say(ss){
    console.log(ss)
  }

  goToBasket(){
    if(this.common.cartNumber > 0 )
       this.navCtrl.push('BasketPage')
  }

  goToTrend(){
       this.navCtrl.push('GameTrendPage')
  }
  // touchStartEvent(event ){
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
