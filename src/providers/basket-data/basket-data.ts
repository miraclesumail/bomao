import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonProvider } from '../common/common'
import { UtilProvider } from '../util/util'
/*
  Generated class for the BasketDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BasketDataProvider {
  betData:Array<any> = []

  constructor(public http: HttpClient, public util:UtilProvider, public common:CommonProvider) {
    console.log('Hello BasketDataProvider Provider');
  }

  addBetData(){
    this.betData.push(this.util.processOrder())
  }

  removeByIndex(index:number){
    this.betData.splice(index,1)
  }

  randomChoose(){
    //  let randomData = this.common.ballData.map(item => {
    //     let random = Math.floor(Math.random()*10)
    //     let balls = item.ball.map((ele,index) => index == random ? 1 : 0)
    //     item.ball = balls
    //     return item
    // })
    this.util.randomChoose()
    this.betData.push(this.util.processOrder())
    this.util.resetData()
  }
}
