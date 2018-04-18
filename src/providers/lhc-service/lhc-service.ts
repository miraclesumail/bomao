import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonProvider } from '../common/common'
/*
  Generated class for the LhcServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LhcServiceProvider {
  gameSort:string = "gg";

  banbo:string = "红波"
  banboData:any;



  banboPlay:any = {
    "红波":[
          {name:"红大", betNum:12.12, allChoose:false,number:
             [{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]  
          },
          {name:"红小", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
          {name:"红单", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
          {name:"红双", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
          {name:"红合单", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
          {name:"红合双", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        ],
    "蓝波":
      [
        {name:"蓝大", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝小", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝单", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝双", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝合单", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝合双", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
      ],
      "绿波":
      [
        {name:"蓝大", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝小", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝单", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝双", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝合单", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝合双", betNum:12.12, allChoose:false,number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
      ]        
  }

  constructor(public http: HttpClient, public common:CommonProvider) {
    console.log('Hello LhcServiceProvider Provider');
    this.banboData = this.banboPlay[this.banbo]
    //this.banboData = this.common.copy(this.banboPlay[this.banbo],true)
  }

  setGameKind(name){
     
     if(name == '半波'){
       console.log(this.banboPlay)
       this.banboData = this.banboPlay['红波']
     }
     this.gameSort = name
  }

  changeBanbo(ss){
    this.banbo = ss.value
    this.banboData = this.banboPlay[ss.value]
  }

  changeBanBo(row){
      this.banboData = this.banboData.map((ele,index) => {
         if(row == index){
            
            let number =  ele.number.map((item,index) => {
              return {...item,choose:!item.choose}
            })
             ele.allChoose = number[0].choose
             ele.number = number
             return ele
         }else{
             return ele
         }
    })
  }

  resetData(){
     if(this.gameSort == '半波'){
           for(let ii in this.banboPlay){
               let temp = this.banboPlay[ii]
               let newTemp = temp.map(ele => {
                   let number = ele.number.map(item => {
                     return {...item,choose:false}
                    })
                    ele.allChoose = false
                    ele.number = number
                    return ele
               })
               this.banboPlay[ii] = newTemp
           }
     }
  }
}
