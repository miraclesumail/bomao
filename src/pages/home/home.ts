import { Component, ViewChild } from '@angular/core';
import { NavController,IonicPage} from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

  notification:Array<any> = [
    "qqqqqqqqqqq",
    "wwwwwwwwww",
    "eeeeeeeeee",
    "ffffffffff",
    "gggggggggg",
    "bbbbbbbbbb"
  ]

  
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

  constructor(public navCtrl: NavController,public storage: Storage) {
     this.updateLate()
     console.log(Swiper)
    
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

  
}
