import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonProvider } from '../common/common'
import { UtilProvider } from '../util/util'
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import {observe} from "../../tools/observe";
let _ = new observe();

/*
  Generated class for the BasketDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BasketDataProvider {
  betData:Array<any> = []
  totalAmount:number;
  
  statistic:any = {
     multiple: 1,
     trace:1
  }
  
  observable: Observable<any>;
  observer: Observer<any>;
  changeDetect:(option:any) => void;


  constructor(public http: HttpClient, public util:UtilProvider, public common:CommonProvider) {
    console.log('Hello BasketDataProvider Provider');
    this.observable = new Observable((observer: Observer<any>) => {
         this.observer = observer;
         this.changeDetect = (option) => {
                
                this.observer.next('')
         }
    });
    _.observe([this.betData,this.statistic],()=> this.calculateTotal())
    //_.observe(this.statistic,()=> console.log('axiba'))

  }

  calculateTotal(){
     if(this.betData.length>0)
        this.totalAmount = this.betData.reduce((r1,r2) => {
            return {...r1, price:r1.price + r2.price}
        }).price*this.statistic.multiple
     else
        this.totalAmount = 0   
  }

  addBetData(name){
    this.betData.push(this.util.processOrder(name))
    //this.calculateTotal()
  }

  removeByIndex(index:number){
    this.betData.splice(index,1)
  }

  randomChoose(number){
    //  let randomData = this.common.ballData.map(item => {
    //     let random = Math.floor(Math.random()*10)
    //     let balls = item.ball.map((ele,index) => index == random ? 1 : 0)
    //     item.ball = balls
    //     return item
    // })
    for(let i=0;i<number;i++){
      this.util.randomChoose(number)
      this.betData.push(this.util.processOrder())
    }
    //this.calculateTotal()
   
    this.util.resetData()
  }

  // getSubmitData(): Object {
  //   return {
  //     "gameId": this.share.pid,
  //     "isTrace": +(this.share.globalData.trace > 1),
  //     "traceWinStop": +this.traceWinStop,
  //     "traceStopValue": 1,
  //     "balls": this.getBallsString(),
  //     "orders": this.getOrderIssure(),
  //     "amount": this.totalAllCount,
  //     is_encoded: 1,
  //     _token: this.share.user.token,
  //     bet_source: this.share.plat
  //   }
  // }
}
