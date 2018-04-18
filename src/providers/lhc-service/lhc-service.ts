import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LhcServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LhcServiceProvider {
  gameSort:string = "半波";

  banbo:string = "红波"
  banboData:any;



  banboPlay:any = {
    "红波":[
          {name:"红大", betNum:12.12, number:
             [{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]  
          },
          {name:"红小", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
          {name:"红单", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
          {name:"红双", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
          {name:"红合单", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
          {name:"红合双", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        ],
    "蓝波":
      [
        {name:"蓝大", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝小", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝单", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝双", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝合单", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝合双", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
      ],
      "绿波":
      [
        {name:"蓝大", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝小", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝单", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝双", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝合单", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
        {name:"蓝合双", betNum:12.12, number:[{number:29, choose:false},{number:30, choose:false},{number:34, choose:false},{number:35, choose:false},{number:40, choose:false}]},
      ]        
  }

  constructor(public http: HttpClient) {
    console.log('Hello LhcServiceProvider Provider');
    this.banboData = this.banboPlay[this.banbo]
  }

  setGameKind(name){
     this.gameSort = name
  }

  changeBanbo(ss){
    this.banbo = ss.value
    this.banboData = this.banboPlay[ss.value]
  }

  changeToggle(row,column){
    //console.log(this.banbo)
    //this.banboData.map((ele,index))
  }
}
