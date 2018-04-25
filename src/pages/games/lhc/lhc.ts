import { Component,ViewChild ,ElementRef,  ViewContainerRef, ComponentFactoryResolver, } from '@angular/core';
import { NavController,IonicPage,ModalController} from 'ionic-angular';
import { CommonProvider } from "../../../providers/common/common";
import { HttpClientProvider } from "../../../providers/http-client/http-client";
import { LhcServiceProvider } from "../../../providers/lhc-service/lhc-service"
import { BetComponent } from '../../../components/bet/bet';
import { GamemenuComponent } from '../../../components/gamemenu/gamemenu'
import { Effect } from '../../baseComponent'
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'lhc',
  templateUrl: 'lhc.html',
  providers:[GamemenuComponent]
})
export class LhcPage extends Effect{
 
  @ViewChild("alertContainer", { read: ViewContainerRef }) container: ViewContainerRef;
  
  axiba:any = '快捷投注'
//   data:any;  
  choosen:string;
//   method:string;
//   smallMethod:string;
//   small:any;
  get banbo(){
      //console.log(this.lhc.banbo) get
      switch (this.lhc.banbo){
          case '红波':
               return 'red'
          case '绿波':
               return 'green'
          case '蓝波':
               return  'blue'          
      }
 }
  

  visible:string = 'invisable';
  number:number;
  record:any;
  mark:any = ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'];
  zodadic:Array<Array<any>> = [
      [11,23,35,47],
      [10,22,34,46],
      [9,21,33,45],
      [8,20,32,44],
      [7,19,31,43],
      [6,18,30,42],
      [5,17,29,41],
      [4,16,28,40],
      [3,15,27,39],
      [2,14,26,38],
      [1,13,25,37,49],
      [12,24,36,48]
  ]
  timer:any;
  
  total:any = [
      [1,2,3,4,5,6,7],
      [8,9,10,11,12,13,14],
      [15,16,17,18,19,20,21],
      [22,23,24,25,26,27,28],
      [29,30,31,32,33,34,35],
      [36,37,38,39,40,41,42],
      [43,44,45,46,47,48,49]
  ]

  allData:any = [
      {'大':{choose:false,numbers:[25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]}},
      {'小':{choose:false,numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}},
      {'单':{choose:false,numbers:[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]}},
      {'双':{choose:false,numbers:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48]}},
      {'鼠':{choose:false,numbers:[11,23,35,47]}},
      {'牛':{choose:false,numbers:[10,22,34,46]}},
      {'虎':{choose:false,numbers:[9,21,33,45]}},
      {'兔':{choose:false,numbers:[8,20,32,44]}},
      {'龙':{choose:false,numbers:[7,19,31,43]}},
      {'蛇':{choose:false,numbers:[6,18,30,42]}},
      {'马':{choose:false,numbers:[5,17,29,41]}},
      {'羊':{choose:false,numbers:[4,16,28,40]}},
      {'猴':{choose:false,numbers:[3,15,27,39]}},
      {'鸡':{choose:false,numbers:[2,14,26,38]}},
      {'狗':{choose:false,numbers:[1,13,25,37,49]}},
      {'猪':{choose:false,numbers:[12,24,36,48]}},

  ]

  kinds:any = [];

  hasChoose:any = [];
  menus:any =  ['走势图','近期开奖','玩法说明']
  constructor(public navCtrl: NavController, public common:CommonProvider, public lhc:LhcServiceProvider,public http:HttpClientProvider,public modalCtrl: ModalController,public gamemenu:GamemenuComponent, public factoryResolver:ComponentFactoryResolver) {
      super(common,gamemenu)
      this.common.setActiveTheme('lhc');
      //this.initData();
      this.kinds = this.allData.map(item => Object.keys(item));

      //this.addDynamicComponent()
  }

//   toggle(){
//       this.visible = this.visible == 'invisable' ? 'visable':'invisable'
//       this.visible == 'visable' ? $('.body-bg').fadeIn(1000) : $('.body-bg').fadeOut(1000)
//       //$('.choose-game').toggleClass('alert-show')
//   }

  changeBanbo($event){
      
      this.lhc.changeBanbo($event)
  }

  turnVisible($event){
      this.common.visible = $event.visible
      this.common.visible == 'visable' ? $('.body-bg').fadeIn(1000) : $('.body-bg').fadeOut(1000)
      this.common.method = $event.method[0];
      console.log(this.common.method);
      this.common.smallMethod = $event.method[1];
      this.common.small = this.common.data.filter(item => item.name == this.common.method)[0].children;
  }

  bet(){
    let data = this.hasChoose.map((item,index) => {return {'name':this.common.smallMethod + '' + item}});
    let contactModal = this.modalCtrl.create(BetComponent,{data:data})
    contactModal.present()
  }

  change(val){
    console.log(val)
    if(val == '走势图')
      this.navCtrl.push('GameTrendPage')
  }

  newBet(){
     let data:Array<any> = []
     if(this.lhc.gameSort == '半波'){
           for(let ii in this.lhc.banboPlay){
               this.lhc.banboPlay[ii].forEach(ele => {
                    ele.allChoose ? data.push({name:ele.name}):''
               })
           }
           let contactModal = this.modalCtrl.create(BetComponent,{data:data})
           contactModal.present()
     }   

     if(this.lhc.gameSort == '特码'){
           for(let ii of this.lhc.hasChoose){
                data.push({name:'特码'+ii})
               
           }
           let contactModal = this.modalCtrl.create(BetComponent,{data:data})
           contactModal.present()
     }   
  }

}
