import { Component, Input, Output, EventEmitter, ViewChild,  } from '@angular/core';
import { Nav} from 'ionic-angular';
import { trigger ,state,transition,animate,style} from "@angular/animations";
import { CommonProvider } from "../../providers/common/common";
import { LhcServiceProvider } from '../../providers/lhc-service/lhc-service'
import { UtilProvider } from '../../providers/util/util'
import * as $ from 'jquery';

/**
 * Generated class for the GamemenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'gamemenu',
  templateUrl: 'gamemenu.html',
  animations:[
    trigger('fading',[
       state('visable',style({
         opacity: 1,
         transform:'scale(1,1)'
         //transform:'translate3d(0, 0, 0)'
       })),
       state('invisable', style({
         opacity: 0,
         transform:'scale(1,0)'
         //transform:'translate3d(0, -100%, 0)'
       })),
       transition('* => *',animate('1s'))
    ])
   ]
})

export class GamemenuComponent {
  private _data;
  //@ViewChild(Nav) nav: Nav;
  // @Input()
  // set data(val:any){
  //     console.log(val);
  //     this._data = val
  // }

  // get data(){
  //     return this._data
  // }

  // @Input('visible')visible:string;
  // @Input('small')small:any;
  // @Input('method')method:string;
  // @Input('smallMethod')smallMethod:string;
  //@Output('change')change :EventEmitter<any> = new EventEmitter<any>();
  
  choosen:any;

  //大玩法
  method:string;
  small:any;
  //小玩法
  smallMethod:string;

  bigIndex:number;

  constructor(public common:CommonProvider, public nav:Nav, public lhc:LhcServiceProvider, public util:UtilProvider) {
    console.log('Hello GamemenuComponent Component');
    let self = this;
    // $(document).on('click','.body-bg',function(){
    //    if(self.common.visible = 'visable'){
    //           console.log('fff');self.toggle()
    //     }
    // });
    //this.getSmall()
    this.method = this.common.method
    this.small = this.common.small
    this.smallMethod = this.common.smallMethod
    this.bigIndex = this.common.bigIndex
  }

  ngAfterViewInit(){
    console.log('ddwd')
    console.log(this.nav.getActive().name)  
  }

  setMethodIndex(index){
     this.bigIndex = index
     this.method = this.common.gameMethodConfig[index].name

     if(this.common.gameMethodConfig[index].children.length){
        this.small = this.common.gameMethodConfig[index].children
        this.smallMethod = this.common.gameMethodConfig[index].children[0].children[0].name
     }else{
        this.small = this.common.small = []
        this.smallMethod = this.common.smallMethod = ''
        this.common.method = this.common.gameMethodConfig[index].name
        this.lhc.gameSort = this.common.gameMethodConfig[index].name
        console.log('wfwfwef')
        console.log(this.lhc.gameSort)
        this.common.visible = 'invisable';
        this.lhc.resetData()
        this.util.setData()
        $('.body-bg').fadeOut(1000)
     }
    console.log('dddddd')
    
  }

  setSmallIndex(j,name){
      this.common.setGameConfig(this.bigIndex,j,name)
      this.util.setData()
      this.common.visible = 'invisable';
      $('.body-bg').fadeOut(1000)
      console.log(name)
      // 切换小玩法 判断是lhc
      if(this.nav.getActive().name == "LhcPage"){
          this.lhc.resetData()
          this.lhc.setGameKind(name)
      }
  }

  renderTrend(){
     
  }

  confirm(name){
    this.common.smallMethod = name
  }

  toggle(){
    console.log('dddd')
    this.common.visible = 'invisable';
    $('.body-bg').fadeOut(1000)
  }
}
