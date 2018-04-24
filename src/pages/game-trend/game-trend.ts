import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { CommonProvider } from "../../providers/common/common";
import { UtilProvider } from '../../providers/util/util'
declare let Swiper:any;

/**
 * Generated class for the GameTrendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-trend',
  templateUrl: 'game-trend.html',
})
export class GameTrendPage {
  swiper:any;
  @ViewChild('contentSlides') contentSlides: Slides;
  

  // menus: Array<string> ;
  // choose:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public util:UtilProvider, public common:CommonProvider) { 
     
  }



  ionViewWillEnter(){
     let containers = document.getElementsByClassName('trend-container')

     for(let i = 0;i<containers.length;i++){
      let container = document.getElementsByClassName('trend-container')[i]
      let canvas = document.createElement('canvas')
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
      container.appendChild(canvas)
      let ctx = canvas.getContext('2d')
      ctx.strokeStyle = "#f5d300"
      ctx.lineWidth = 1
      ctx.beginPath();
      let nodes = container.querySelectorAll('.highlight')
      for(let i=0; i< nodes.length; i++){
          console.log(nodes.length)
          if(i == 0)
             ctx.moveTo(nodes[i].offsetLeft + 14,nodes[i].offsetTop + 14)
          else
             ctx.lineTo(nodes[i].offsetLeft + 14,nodes[i].offsetTop + 14)
      }
      ctx.stroke()
      ctx.closePath()
     }
    
  }

  drawTrend(){
     
  }

  ionViewWillLeave(){
     
  }

  // selectPageMenu($event, index) {
  //   this.contentSlides.slideTo(index);
  // }

  segmentChanged($event){
    console.log($event.value)
    this.contentSlides.slideTo(this.util.menus.indexOf($event.value))
  }

  slideChanged() {
    let index = this.contentSlides.getActiveIndex();
    console.log(index)
    this.util.choose = this.util.menus[index]
    // this.setStyle(index);
    // this.swiper.slideTo(index, 300);
  }

}
