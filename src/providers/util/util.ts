import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonProvider } from '../common/common'
/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {

  constructor(public http: HttpClient,public common:CommonProvider) {
    console.log('Hello UtilProvider Provider');
  }

  changeActive(index,name){
    switch(name){
       case "全":
           this.changeAll(index)
           break;
       case "奇":
           this.changeOdd(index)
           break;
       case "偶":
           this.changeEven(index)    
           break;
       case "大":
           this.changeBig(index)
           break;
       case "小":
           this.changeSmall(index)  
           break;  

    }
  }

  changeToggle(row,column){
      this.common.ballData = this.common.ballData.map((item,index) => {
           if(index == row){
               item.ball = item.ball.map((ele,index) => {
                    if(index == column){
                       return ele == 1 ? 0 : 1
                    }else{
                       return ele
                    }
               })
               return item
           }else{
               return item
           }
      })  

      this.common.calculate()
  }

  changeAll(line){
     this.common.ballData = this.common.ballData.map((item,index) => {
         if(index == line){
           item.ball = item.ball.map(ele => 1)
           return item
         }else{
           return item
         }
      })
  }

  changeBig(line){
    this.common.ballData = this.common.ballData.map((item,index) => {
        if(index == line){
          item.ball = item.ball.map((ele,index) => index > 4? 1:0)
          return item
        }else{
          return item
        }
     })
  }

  changeSmall(line){
    this.common.ballData = this.common.ballData.map((item,index) => {
        if(index == line){
          item.ball = item.ball.map((ele,index) => index > 4? 0:1)
          return item
        }else{
          return item
        }
     })
  }

  changeOdd(line){
    this.common.ballData = this.common.ballData.map((item,index) => {
      if(index == line){
        item.ball = item.ball.map((ele,index) => index %2 == 0? 0 : 1)
        return item
      }else{
        return item
      }
   })
  }

  changeEven(line){
    this.common.ballData = this.common.ballData.map((item,index) => {
      if(index == line){
        item.ball = item.ball.map((ele,index) => index %2 == 0? 1 : 0)
        return item
      }else{
        return item
      }
   })
  }
}
