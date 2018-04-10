import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {
  theme: BehaviorSubject<boolean>; 
  pid:string;
  timer:any;
  countTime:any = {
    'total': '',
    'days': '',
    'hours': '',
    'minutes': '',
    'seconds': ''
  };

  constructor(public http: HttpClient) {
    console.log('Hello CommonProvider Provider');
    this.theme = new BehaviorSubject(false);
    this.produce()
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
