import {
  Component, ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, OnDestroy
} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { CommonProvider } from "../../providers/common/common";
import { UtilProvider } from '../../providers/util/util'
import { Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { WuxingComponent } from '../../components/gametrend/wuxing/wuxing'
import { SixingComponent } from '../../components/gametrend/sixing/sixing'
import { QiansanComponent } from '../../components/gametrend/qiansan/qiansan'
import { TrendHeadComponent } from '../../components/gametrend/trend-head/trend-head'
import { config } from '../../components/gameTrend.config'

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
  componentRef: ComponentRef<any>;
  swiper:any;

  canvas:any;

  observable: Observable<any>;
  observer: Observer<any>;

  @ViewChild("gameTrendContainer", { read: ViewContainerRef }) container: ViewContainerRef;

  // @ViewChild('contentSlides') contentSlides: Slides;
  // @ViewChild("alertContainer", { read: ViewContainerRef }) container: ViewContainerRef;
  // @ViewChild("headContainer", { read: ViewContainerRef }) head: ViewContainerRef;

  // menus: Array<string> ;
  // choose:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events,public util:UtilProvider, public common:CommonProvider,private resolver: ComponentFactoryResolver) { 
     this.observable = new Observable((observer: Observer<any>) => {
         this.observer = observer;
     })
     console.log(this.common.ballData)
     this.observable.subscribe((val:Promise<any>) => {
          val.then(() => {
              this.drawCanvas()
          })
     })

     this.events.subscribe('changeTrend',(val) => {
          setTimeout(() => {
         
            this.drawTrend()

          },0)
     })

    //  this.events.subscribe('changeIndex', (val) => {
    //       this.segmentChanged(val)
    //  })
  }



  ionViewWillEnter(){
      console.log('enterddd')
      this.drawTrend() 
  }

  drawCanvas(){
      


      let containers = document.getElementsByClassName('trend-container')
      // 加载新数据后需要清楚canvas
      for(let i = 0;i<containers.length;i++){
           let canvas = containers[i].querySelector('canvas')
           if(canvas){
              let ctx = canvas.getContext('2d')
              ctx.clearRect(0,0,canvas.width,canvas.height)
              containers[i].removeChild(canvas)
           }
      }
      console.log(containers.length)
              for(let i = 0;i<containers.length;i++){
             
              let container = document.getElementsByClassName('trend-container')[i]
              let canvas = document.createElement('canvas')
              canvas.width = container.offsetWidth
              canvas.height = container.offsetHeight
              container.appendChild(canvas)
              let ctx = canvas.getContext('2d')
              ctx.strokeStyle = this.getCtxColor(i)
              console.log(this.getCtxColor(i))
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

  create(gameMethod:string):Promise<any>{
      let trendComponent = config[gameMethod]
      const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(trendComponent)
      this.componentRef = this.container.createComponent(factory)

      //上拉加载数据 canvas重回
      this.componentRef.instance.output.subscribe(() => setTimeout(() => this.drawCanvas(),0))
      return new Promise((resolve,reject) => {
          setTimeout(resolve,0)
      })
  }

  drawTrend(){
      this.container.clear()
      this.observer.next(this.create(this.common.method))
       
        //this.componentRef.instance.historyRecord = this.util.wuxingData

      

      // if(this.common.method == '四星'){
      //   this.container.clear()
      //   const factory: ComponentFactory<SixingComponent> = this.resolver.resolveComponentFactory(SixingComponent)
      //   this.componentRef = this.container.createComponent(factory)
      //   this.componentRef.instance.historyRecord = this.util.sixingData
      // }

      // if(this.common.method == '前三'){
      //   this.container.clear()
      //   const factory: ComponentFactory<QiansanComponent> = this.resolver.resolveComponentFactory(QiansanComponent)
      //   this.componentRef = this.container.createComponent(factory)
      //   this.componentRef.instance.historyRecord = this.util.qiansanData
      // }

  }

  

  getCtxColor(i){
     switch(this.util.trendKind[this.common.method][i]) {
        case '万位走势':
             return 'yellow'
        case '千位走势': 
             return 'orange'
        case '百位走势':
             return 'green'
        case '十位走势': 
             return 'purple'  
        case '个位走势':
             return 'pink'      


     }
  }

  ionViewDidLeave(){
     this.container.clear()
  }
  
  segmentChanged($event){
    console.log('wcnmb')
    console.log($event.value)
    //this.contentSlides.slideTo(this.util.menus.indexOf($event.value))
  }

  slideChanged() {
    //let index = this.contentSlides.getActiveIndex();
    //console.log(index)
    //this.util.choose = this.util.menus[index]
    // this.setStyle(index);
    // this.swiper.slideTo(index, 300);
  }

  goSsc(){
     if(this.common.count > 0)
        this.navCtrl.push('SscPage')
  }

}
