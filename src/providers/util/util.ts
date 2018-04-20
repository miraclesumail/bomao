import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonProvider } from '../common/common'
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {
  shake:boolean = false;

  fakeTrend:Array<number> = [5,3,9,8,6,2,9,1,8,6,4]
  fakeData:Array<any> = []


  constructor(public http: HttpClient,public common:CommonProvider) {
    console.log('Hello UtilProvider Provider');
    this.generateFake()
  }

  generateFake(){
    let arr = []
    for(let i = 1; i<=this.fakeTrend.length; i++){
        let inner = []
        for(let j = 0; j<=9;j++){
            if(j == this.fakeTrend[i-1]){
               inner.push({number:this.fakeTrend[i-1], choose:true})
            }else{
               if(i == 1){
                 inner.push({number:1,choose:false})
               }else{
                 if(arr[i-2][j].choose){
                    inner.push({number:1, choose:false})
                 }else{
                    inner.push({number:arr[i-2][j].number+1, choose:false})
                 }
               }
            }  
        }  
        arr.push(inner)
    }
    this.fakeData = arr
    console.log(arr)
  }

  beginCanvas(){
    
  }
  
  processOrder(name?){
    let dataArr = []
    this.common.ballData.forEach(item => {
         let arr = []
         item.value.forEach((ele,index) => {
              ele == 1 ? arr.push(('0'+index).slice(-2)):''
         })
         dataArr.push(arr.join(' '))
    })
    console.log(dataArr)
    // dataArr = dataArr.map(item => item.join(''))
   
    return {
         betData:dataArr,
         gameName:name?name:this.common.method + this.common.smallMethod,
         count:this.common.count,
         price:this.common.betPrice
    }
  }

  generateTwo(number){
        
        let arr = [0,1,2,3,4,5,6,7,8,9]
        let temp = []
        for(let i = 0;i<number;i++){
            let index = Math.floor(Math.random()*(arr.length+1))
            temp.push(arr[index])
            arr.splice(index,1)
        }
        return temp
  }

  // 机选注单
  randomChoose(number?){
    this.common.ballData = this.common.ballData.map(item => {
        // let arr = [0,1,2,3,4,5,6,7,8,9]
        let random = Math.floor(Math.random()*10)
        //let arr = this.generateTwo(number)
        let balls = item.value.map((ele,index) => index == random ? 1 : 0)
        item.value = balls
        return item
    })
    this.common.calculate()
  }
  
  // 重置数据
  resetData(){
    this.common.ballData = this.common.ballData.map(item => {
         let balls = item.value.map(ele => 0)
         item.value = balls
         return item
    })
    this.common.calculate()
  }

  changeActive(index,choice,name){
    this.changeChooseStatus(index,choice)
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

  changeChooseStatus(index1,index2){
      this.common.btn = this.common.btn.map((item,index) => {
           if(index == index1){
              let ele = item.map((todo,order) => order == index2 ? {...todo,flag:true}:{...todo,flag:false})
              return ele
           }else{
              return item
           }
      })
  }

  changeToggle(row,column){
      console.log('wcnmbg')
      this.common.ballData = this.common.ballData.map((item,index) => {
           if(index == row){
               item.value = item.value.map((ele,index) => {
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
     //this.ballData
     console.log(line)
     this.common.ballData = this.common.ballData.map((item,index) => {
         if(index == line){
           item.value = item.value.map(ele => 1)
           return item
         }else{
           return item
         }
      })
  }

  changeBig(line){
    this.common.ballData = this.common.ballData.map((item,index) => {
        if(index == line){
          item.value = item.value.map((ele,index) => index > 4? 1:0)
          return item
        }else{
          return item
        }
     })
  }

  changeSmall(line){
    this.common.ballData = this.common.ballData.map((item,index) => {
        if(index == line){
          item.value = item.value.map((ele,index) => index > 4? 0:1)
          return item
        }else{
          return item
        }
     })
  }

  changeOdd(line){
    this.common.ballData = this.common.ballData.map((item,index) => {
      if(index == line){
        item.value = item.value.map((ele,index) => index %2 == 0? 0 : 1)
        return item
      }else{
        return item
      }
   })
  }

  changeEven(line){
    this.common.ballData = this.common.ballData.map((item,index) => {
      if(index == line){
        item.value = item.value.map((ele,index) => index %2 == 0? 1 : 0)
        return item
      }else{
        return item
      }
   })
  }

  shakePhone(func:Function){
     var speed = 15;    // 用来判定的加速度阈值，太大了则很难触发
     var x, y, z, lastX, lastY, lastZ;
     x = y = z = lastX = lastY = lastZ = 0;

     window.addEventListener('devicemotion', (event) => {
        var acceleration = event.accelerationIncludingGravity;
        x = acceleration.x;
        y = acceleration.y;
        //alert(this.shake)
        if((Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) && !this.shake)  {
            // 用户设备摇动了，触发响应操作
            // 此处的判断依据是用户设备的加速度大于我们设置的阈值
            //alert('摇了');
            this.shake = true;
            new Observable(observer => {
                setTimeout(() => {
                  observer.next();
                   }, 500);
            }).subscribe(value => {
                  func.bind(this)()
                  this.shake = false
                  
            })
        }
        lastX = x;
        lastY = y;
    }, false);
  }
}
