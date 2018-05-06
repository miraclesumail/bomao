import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import { HttpClientProvider } from "../http-client/http-client";
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as $ from 'jquery'
import { Subject } from 'rxjs/Subject';
import { Events } from 'ionic-angular';
import { UtilProvider } from '../util/util'
import { GlobalShareProvider } from '../global-share/global-share'
import { LhcServiceProvider } from '../lhc-service/lhc-service'
/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {
  open:boolean = false

  theme: BehaviorSubject<boolean>; 
  pid = new Subject();
  timer:any;

  lhcData:any;
  countTime:any = {
    'total': '',
    'days': '',
    'hours': '',
    'minutes': '',
    'seconds': ''
  };
  record:any;

  data:any;
  method:string;
  smallMethod:string;
  small:any;
  bigIndex:number;
  
  //gametrend  zhixuan zuxuan
  zhixuan:boolean = true

  visible:string = 'invisable';

  ballData = [];
  //形成的注单数
  count:number = 0;

  cartNumber:number = 0;
  betPrice:number = 0;
  tabYuan:string = "元";
  tabVisible:string = 'invisable'

  observable: Observable<any>;
  observer: Observer<any>;
  //用于存储现在游戏所有的玩法
  gameMethodConfig:Array<any> = [];

  btn:Array<any> = [
    {name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}
  ]

  constructor(public http: HttpClientProvider,public events:Events, public global:GlobalShareProvider, public lhc:LhcServiceProvider) {
    console.log('Hello CommonProvider Provider');
    this.theme = new BehaviorSubject(false);
    this.produce()

     this.observable = new Observable((observer: Observer<any>) => {
         this.observer = observer;
         
     });

    this.pid.subscribe((val:any) =>{
      this.initData(val);

      this.record = this.mockData()
      
      

      // this.ballData = [
      //   {name:"万位", ball:[0,0,0,0,0,0,0,0,0,0],
      //      btn:[{name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}]
      //   },
      //   {name:"千位", ball:[0,0,0,0,0,0,0,0,0,0],
      //      btn:[{name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}]
      //   },
      //   {name:"百位", ball:[0,0,0,0,0,0,0,0,0,0],
      //      btn:[{name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}]
      //   },
      //   {name:"十位", ball:[0,0,0,0,0,0,0,0,0,0],
      //      btn:[{name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}]
      //   },
      //   {name:"个位", ball:[0,0,0,0,0,0,0,0,0,0],
      //      btn:[{name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}]
      //   }
      // ]
    })
   
    this.events.subscribe('changeYuan',(val) => {
        let percent = val == '元' ? 1 : this.tabYuan == '角' ? 0.1 : 0.01
        this.betPrice = this.count*2*percent
    })
  }

  isObject(val){
    return Object.prototype.toString.call(val).slice(8, -1) == 'Object';
  }

  isArray(val){
    return Object.prototype.toString.call(val).slice(8, -1) == 'Array';
  }

  isFunction(val){
    return Object.prototype.toString.call(val).slice(8, -1) == 'Function';
  }

  copy(obj:any,deep){ 
    if (obj === null || (typeof obj !== "object" && !this.isFunction(obj))) { 
        return obj; 
    } 

    if (this.isFunction(obj)) {
    	return new Function("return " + obj.toString())();
    }
    else {
        var name, target = this.isArray(obj) ? [] : {}, value; 

        for (name in obj) { 
            value = obj[name]; 

            if (value === obj) {
            	continue;
            }

            if (deep) {
                if (this.isArray(value) || this.isObject(value)) {
                    target[name] = this.copy(value,deep);
                } else if (this.isFunction(value)) {
                    target[name] = new Function("return " + value.toString())();
                } else {
            	    target[name] = value;
                } 
            } else {
            	target[name] = value;
            } 
        } 
        return target;
    }　        
}

  async initData(name){
    console.log('wcnm')
    this.data = (await this.http.fetchData(name)).list;
    this.gameMethodConfig = this.data;

    // let bet_numberArrObj = this.gameMethodConfig[0].children[0].children[0].bet_numberArrObj
    // let arr = []
    // bet_numberArrObj.forEach(ele => arr.push(ele))
    this.small = this.gameMethodConfig[0].children;
    if(this.small.length)
       this.ballData = this.copy(this.gameMethodConfig[0].children[0].children[0].bet_numberArrObj, true)
    //this.ballData = arr
    this.method = this.gameMethodConfig[0].name;
    this.bigIndex = 0
    
    if(this.small.length)
       this.smallMethod = this.small[0].children[0].name;
    //this.changeMethod(this.data.list[0].name);
    this.btn = this.ballData.map(ele => [{name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}])
    console.log(this.ballData)
    console.log(this.btn)
  }

  // xiao wan fa qiehuan
  setGameConfig(index,index2,name){
    if(this.bigIndex!=index || name!=this.smallMethod){
      this.ballData = this.copy(this.gameMethodConfig[index].children[index2].children.filter(ele => ele.name == name)[0].bet_numberArrObj, true)
      
      this.btn = this.ballData.map(ele => [{name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}])
      
      console.log(this.ballData)
      console.log(this.btn)
    }
    console.log(index)
    console.log(name)

    console.log(this.gameMethodConfig[index].children[index2].name)

    if(this.gameMethodConfig[index].children[index2].name == '直选')
       this.zhixuan = true
    else
       this.zhixuan = false   

    this.bigIndex = index
    if(this.method != this.gameMethodConfig[index].name){
      // console.log('method change')
      // this.observer.next('change')
      this.events.publish('changeTrend')
    }
       
    this.method = this.gameMethodConfig[index].name
    
    this.small = this.gameMethodConfig[0].children
    this.smallMethod = name  
  }

  //计算注单
  calculate(){
     let count = 1;
     this.ballData.forEach((item,index) => {
         count *=  item.value.filter(ele => ele == 1).length
     })
     this.count = count
     let percent = this.tabYuan == '元' ? 1 : this.tabYuan == '角' ? 0.1 : 0.01
     this.betPrice = this.count*2*percent
  }

  openTab(){
    console.log('asss')
    this.tabVisible = 'visible'
  }

  toggle(){
    this.visible = this.visible == 'invisable' ? 'visable':'invisable'
    this.visible == 'visable' ? $('.body-bg').fadeIn(1000) : $('.body-bg').fadeOut(1000)
  }

  setActiveTheme(theme) {
    this.theme.next(theme);
  }

  getActiveTheme() {
    return this.theme.asObservable();
  }

  produce(){
      this.countDown(Math.floor(Math.random()*30)*1000)
      
  }

  countDown(time){
    this.timer = setInterval(()=> {
       if(time <1000){
          clearInterval(this.timer)
          this.global.showToast('进入新一期开奖',2000)
          this.record = this.mockData()
          this.produce()
       } 
       this.countTime = this.getTimeRemaining(time)
       time -= 1000
    },1000)
  }

  mockData(){
    let random = Math.floor(Math.random()*100)
    let end = random<10 ? '00' + random : '0' + random 
    let month = new Date().getMonth()<10 ? '0'+new Date().getMonth():new Date().getMonth()
    let date = new Date().getDate()<10 ? '0'+new Date().getDate():new Date().getDate()
    console.log(month)
    let number = new Date().getFullYear().toString().substr(2) 
     + month + date + end
     console.log(number)
           
    let record = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let result:Array<any> = [0,0,0,0,0,0,0,0].map((ele,index) => {
        if(index == 6)
           return {choose:'+',color:''}
        let choose = record[Math.floor(Math.random()*(record.length - 1))]
        record.splice(record.indexOf(choose),1)
        choose < 10 ? '0' + choose : choose;
        let color = ''
        this.lhc.banboColor.forEach((ele,index) => {
             if(ele.indexOf(choose) != -1){
                 if(index == 0)
                    color = 'red'
                 else if(index == 1)
                    color = 'purple'
                 else
                    color = 'green'
                 return   
             }

        })
        return {choose,color:color}
    })

    let axiba = [0,0,0,0,0,0,0,0].map((ele,index) =>{
        if(index == 6)
           return ' '
        let filter = this.lhc.zodadic.filter(ele => ele.indexOf(result[index].choose) != -1)[0]  
        return this.lhc.mark[this.lhc.zodadic.indexOf(filter)]
    })
    
    return {
        result,
        number,
        axiba
    }
}

  getTimeRemaining(t) {
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      'total': t,
      'days': days,
      'hours': ('0' + hours).slice(-2),
      'minutes': ('0' + minutes).slice(-2),
      'seconds': ('0' + seconds).slice(-2)
    };
  }

}
