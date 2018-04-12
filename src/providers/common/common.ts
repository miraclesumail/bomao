import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import { HttpClientProvider } from "../http-client/http-client";
import * as $ from 'jquery'
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {
  theme: BehaviorSubject<boolean>; 
  pid = new Subject();
  timer:any;
  countTime:any = {
    'total': '',
    'days': '',
    'hours': '',
    'minutes': '',
    'seconds': ''
  };

  data:any;
  method:string;
  smallMethod:string;
  small:any;
  visible:string = 'invisable';

  ballData = [];

  constructor(public http: HttpClientProvider) {
    console.log('Hello CommonProvider Provider');
    this.theme = new BehaviorSubject(false);
    this.produce();
    this.pid.subscribe((val:any) =>{
      this.initData(val);
      this.ballData = [
        {name:"万位", ball:[0,0,0,0,0,0,0,0,0,0],
           btn:[{name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}]
        },
        {name:"千位", ball:[0,0,0,0,0,0,0,0,0,0],
           btn:[{name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}]
        },
        {name:"百位", ball:[0,0,0,0,0,0,0,0,0,0],
           btn:[{name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}]
        },
        {name:"十位", ball:[0,0,0,0,0,0,0,0,0,0],
           btn:[{name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}]
        },
        {name:"个位", ball:[0,0,0,0,0,0,0,0,0,0],
           btn:[{name:"全",flag:false},{name:"大",flag:false},{name:"小",flag:false},{name:"奇",flag:false},{name:"偶",flag:false},{name:"清",flag:false}]
        }
      ]
    })
   
  }

  async initData(name){
    this.data = (await this.http.fetchData(name)).list;
    this.method = this.data[0].name;
    this.small = this.data.filter(item => item.name == this.method)[0].children;
    this.smallMethod = this.small[0].children[0];
    //this.changeMethod(this.data.list[0].name);
    console.log(this.data)
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
      this.countDown(Math.floor(Math.random()*60)*1000)
  }

  countDown(time){
    this.timer = setInterval(()=> {
       if(time <1000){
          clearInterval(this.timer)
          this.produce()
       } 
       this.countTime = this.getTimeRemaining(time)
       time -= 1000
    },1000)
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
