import { Component, ViewChild } from '@angular/core';
import { NavController,IonicPage, App} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Observable';
import { CommonProvider } from "../../providers/common/common";

//import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';
import * as $ from 'jquery'
declare let Swiper:any;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  latest:string ;
  oSwiper1:any;
  data:Array<number>;
  swipeOptions:any;
  index = 0;
  shake:boolean = false;

  notification:Array<any> = [
    "qqqqqqqqqqq",
    "wwwwwwwwww",
    "eeeeeeeeee",
    "ffffffffff",
    "gggggggggg",
    "bbbbbbbbbb"
  ]

  lotterys:Array<any> = [
    {name:'香港六合彩',src:'assets/imgs/lottery1.png',url:'LhcPage',number:[3,5,7,6,4],json:"./assets/lhc.json"},
    {name:'重庆时时彩',src:'assets/imgs/lottery2.png',url:'SscPage',number:[4,8,9,3,2],json:"./assets/ssc.json"},
    {name:'你是傻逼彩',src:'assets/imgs/lottery3.png',url:'SscPage',number:[2,5,3,9,4],json:"./assets/ssc.json"},
    {name:'日了狗子彩',src:'assets/imgs/lottery4.png',url:'SscPage',number:[1,6,3,4,7],json:"./assets/ssc.json"},
    {name:'鸡吧神马彩',src:'assets/imgs/lottery5.png',url:'SscPage',number:[3,8,7,2,4],json:"./assets/ssc.json"},
    {name:'去你妈逼彩',src:'assets/imgs/lottery6.png',url:'SscPage',number:[9,3,6,1,4],json:"./assets/ssc.json"},
    {name:'阿西吧的彩',src:'assets/imgs/lottery7.png',url:'SscPage',number:[8,5,2,6,3],json:"./assets/ssc.json"},
    {name:'么比较死彩',src:'assets/imgs/lottery8.png',url:'SscPage',number:[3,1,7,2,6],json:"./assets/ssc.json"}
  ]

  lottery:any;
  
  private get headerSlideData() {
    return [
      {
        alt: "双十一预热主场会",
        src: "assets/imgs/banner1.png"
      },
      {
        alt: "11月11天家电低价不停歇",
        src: "assets/imgs/banner2.png"
      },
      {
        alt: "家具盛典 好货提前抢",
        src: "assets/imgs/banner3.jpg"
      },
      {
        alt: "IT抢券节",
        src: "assets/imgs/banner4.png"
      }
    ]
  }


  constructor(public navCtrl: NavController,public storage: Storage, public common:CommonProvider, public app:App) {
     this.updateLate()
     console.log(Swiper)
     this.lottery = this.lotterys[Math.floor(Math.random()*this.lotterys.length)]
     //$('body').append('<audio id="betsvoice1"><source src="/assets/betsvoice.mp3" type="audio/mpeg"/></audio>')
    
    var speed = 15;    // 用来判定的加速度阈值，太大了则很难触发
    var x, y, z, lastX, lastY, lastZ;
    x = y = z = lastX = lastY = lastZ = 0;
     window.addEventListener('devicemotion', function(event){
        var acceleration = event.accelerationIncludingGravity;
        x = acceleration.x;
        y = acceleration.y;
        if((Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) && !this.shake)  {
            // 用户设备摇动了，触发响应操作
            // 此处的判断依据是用户设备的加速度大于我们设置的阈值
            //alert('摇了');
            this.shake = true;
            new Observable(observer => {
                setTimeout(() => {
                  observer.next();
                   }, 500);
            }).subscribe(value => {
                  this.lottery = this.lotterys[Math.floor(Math.random()*this.lotterys.length)]
                  this.shake = false
            })
        }
        lastX = x;
        lastY = y;
    }.bind(this), false);
  }

  ionViewDidEnter(){
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable :true
      },
     })

     console.log($('.system-content'))

     setInterval(() => {
       let aa = this.index
       this.index++
     
       $('.system-content').animate({"margin-top":-50 + 'px'},1000,function(){
          //console.log($('.system-content li:eq(0)'))
          //$(this).append($('.system-content li:eq(0)'))
          //console.log($('.system-content li:eq(0)').remove())
          let qq = $('.system-content li:eq(0)').remove()
          //$('.system-content').css("margin-top", (-this.index+1)*50 + 'px')
          
          $('.system-content').append(qq)
          $('.system-content').css("margin-top", '0px')
          // console.log(this.index)
          // $('.system-content').append($('li').eq(aa).clone())
       })

     
     },2000)
    
  }

  updateLate(){
    this.storage.get('late-time').then(val => {
      this.latest = val ? this.getDate(new Date(val)): 'no time'
    }) 
  }

  getDate(val):string{
     return "上次更新:" + val.getFullYear() + '/' + val.getMonth() + '/' + val.getDate() + '--' + val.getHours() + ':' + val.getMinutes() + ':' + val.getSeconds()
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.updateLate();
    setTimeout(() => {
      console.log('Async operation has ended');
      this.storage.set('late-time',+new Date());
      refresher.complete();
    }, 2000);
  }

  goPage(name){
     this.common.pid.next(name.json);
     //this.navCtrl.getRoot().push(name.url)
     this.app.getRootNav().push(name.url)
  }
}
