import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
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
  

  menus: Array<string> = ["滑动菜单1", "滑动菜单2", "滑动菜单3", "滑动菜单4"]
  choose:string = this.menus[0];

  constructor(public navCtrl: NavController, public navParams: NavParams, public util:UtilProvider) { 
    
  }

  ionViewWillEnter(){
     let container = document.getElementById('trend-container')
     let canvas = document.createElement('canvas')
     canvas.width = container.offsetWidth
     canvas.height = container.offsetHeight
     container.appendChild(canvas)
     let ctx = canvas.getContext('2d')
     ctx.strokeStyle = "#f5d300"
     ctx.lineWidth = 2
     ctx.beginPath();
     let nodes = document.querySelectorAll('.highlight')
    //  for(let i=0; i< nodes.length; i++){
    //      console.log(nodes.length)
    //      if(i == 0)
    //         ctx.moveTo(nodes[i].offsetLeft + 14,nodes[i].offsetTop + 14)
    //      else
    //         ctx.lineTo(nodes[i].offsetLeft + 14,nodes[i].offsetTop + 14)
    //  }
     ctx.stroke()
     ctx.closePath()
  }

  ionViewWillLeave(){
     
  }

  selectPageMenu($event, index) {
    this.contentSlides.slideTo(index);
  }

  segmentChanged($event){
    console.log($event.value)
    this.contentSlides.slideTo(this.menus.indexOf($event.value))
  }

  slideChanged() {
    let index = this.contentSlides.getActiveIndex();
    console.log(index)
    this.choose = this.menus[index]
    // this.setStyle(index);
    // this.swiper.slideTo(index, 300);
  }

}
