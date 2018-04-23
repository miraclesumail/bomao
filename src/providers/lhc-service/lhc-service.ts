import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the LhcServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LhcServiceProvider {
  gameSort:string = "总分";

  banbo:string = "红波"
  banboData:any;
  //快捷 自选玩法
  methodChoose:any = "快捷投注"

  mark:any = ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'];
  zodadic:Array<Array<any>> = [
      [11,23,35,47],
      [10,22,34,46],
      [9,21,33,45],
      [8,20,32,44],
      [7,19,31,43],
      [6,18,30,42],
      [5,17,29,41],
      [4,16,28,40],
      [3,15,27,39],
      [2,14,26,38],
      [1,13,25,37,49],
      [12,24,36,48]
  ]

  temaData:any = [
    [1,2,3,4,5,6,7],
    [8,9,10,11,12,13,14],
    [15,16,17,18,19,20,21],
    [22,23,24,25,26,27,28],
    [29,30,31,32,33,34,35],
    [36,37,38,39,40,41,42],
    [43,44,45,46,47,48,49]
]

allNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]

// 生肖数据
allData:any = [
  {'name':'大',choose:false,numbers:[25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]},
  {'name':'小',choose:false,numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]},
  {'name':'单',choose:false,numbers:[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]},
  {'name':'双',choose:false,numbers:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48]},
  {'name':'鼠',choose:false,numbers:[11,23,35,47],betNum:12.12},
  {'name':'牛',choose:false,numbers:[10,22,34,46],betNum:12.12},
  {'name':'虎',choose:false,numbers:[9,21,33,45],betNum:12.12},
  {'name':'兔',choose:false,numbers:[8,20,32,44],betNum:12.12},
  {'name':'龙',choose:false,numbers:[7,19,31,43],betNum:12.12},
  {'name':'蛇',choose:false,numbers:[6,18,30,42],betNum:12.12},
  {'name':'马',choose:false,numbers:[5,17,29,41],betNum:12.12},
  {'name':'羊',choose:false,numbers:[4,16,28,40],betNum:12.12},
  {'name':'猴',choose:false,numbers:[3,15,27,39],betNum:12.12},
  {'name':'鸡',choose:false,numbers:[2,14,26,38],betNum:12.12},
  {'name':'狗',choose:false,numbers:[1,13,25,37,49],betNum:12.12},
  {'name':'猪',choose:false,numbers:[12,24,36,48],betNum:12.12}
  
  // {'小':{choose:false,numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}},
  // {'单':{choose:false,numbers:[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]}},
  // {'双':{choose:false,numbers:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48]}},
  // {'鼠':{choose:false,numbers:[11,23,35,47]}},
  // {'牛':{choose:false,numbers:[10,22,34,46]}},
  // {'虎':{choose:false,numbers:[9,21,33,45]}},
  // {'兔':{choose:false,numbers:[8,20,32,44]}},
  // {'龙':{choose:false,numbers:[7,19,31,43]}},
  // {'蛇':{choose:false,numbers:[6,18,30,42]}},
  // {'马':{choose:false,numbers:[5,17,29,41]}},
  // {'羊':{choose:false,numbers:[4,16,28,40]}},
  // {'猴':{choose:false,numbers:[3,15,27,39]}},
  // {'鸡':{choose:false,numbers:[2,14,26,38]}},
  // {'狗':{choose:false,numbers:[1,13,25,37,49]}},
  // {'猪':{choose:false,numbers:[12,24,36,48]}},

]
  kinds:any = [];

  // 记录特码已选球
  hasChoose:any = []

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

  banboColor =[
    [1,2,7,8,12,13,18,19,23,24,29,30,34,35,40,45,46],  //红色
    [3,4,9,10,14,15,20,25,26,31,36,37,41,42,47,48],    //紫色
    [5,6,11,16,17,21,22,27,28,32,33,38,39,43,44,49]    //绿色
  ]

  zongfenData:any = [
      {betNum:1.99, kind:'大', des:'fwfweg3g43g434'},
      {betNum:1.99, kind:'小', des:'fwfweg3g43g434'},
      {betNum:1.99, kind:'单', des:'fwfweg3g43g434'},
      {betNum:1.99, kind:'双', des:'fwfweg3g43g434'},
      {betNum:1.99, kind:'大单', des:'fwfweg3g43g434'},
      {betNum:1.99, kind:'小单', des:'fwfweg3g43g434'},
      {betNum:1.99, kind:'大双', des:'fwfweg3g43g434'},
      {betNum:1.99, kind:'小双', des:'fwfweg3g43g434'}
  ]

  constructor(public http: HttpClient) {
    console.log('Hello LhcServiceProvider Provider');
    this.banboData = this.banboPlay[this.banbo]
    this.kinds = this.allData.map(item => Object.keys(item)[0]);
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

  changeMethodChoose(ss){
    this.methodChoose = ss.value
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

  toggleChoose(item){
    if(this.check(item))
      this.add_remove({type:'remove',content:item})
    else
      this.add_remove({type:'add',content:item})
  }

  check(ii){
    return this.hasChoose.includes(ii)
  }

  add_remove(playload){
    if(playload.type == 'add')
       this.hasChoose.push(playload.content)
    else
       this.hasChoose.splice(this.hasChoose.indexOf(playload.content),1)

    // this.allData = this.allData.map(item => {
    //    let key = Object.keys(item)[0];
    //    let flag = true;
    //    for(let i =0;i<item[key].numbers.length;i++){
    //        if(!this.hasChoose.includes(item[key].numbers[i])){
    //            flag = false
    //            break 
    //        }
              
    //    }
    //    return {[key]:{choose:flag,numbers:item[key].numbers}}
    // })
}

switch(key){
  //console.log(item[0])
    let temp = this.allData.filter(item => item.name == key)[0]
    if(!temp.choose){
        this.hasChoose = []
        this.allData = this.allData.map(item => {
            return {...item,choose:false}
        })
    }

    temp.numbers.forEach(ele => {
      this.toggleChoose(ele)
    })

            this.allData = this.allData.map(item => {
                 if(item.name == key)
                   return {...item,choose:!item.choose}
                 else
                   return item  
            })

  //let self = this;
    // this.allData = this.allData.map(element => {
    //      console.log(element)
    //      return element.hasOwnProperty(item) ? {[item]:{choose:!element[item].choose,numbers:element[item].numbers}}:element
    // });
    // console.log(this.allData);
    // this.allData.forEach(element => {
    //      let key = Object.keys(element)[0];
    //      let arr = element[key].numbers;
    //      if(key == item ){
    //           // if(element[key].choose){
    //               for(let i =0;i < arr.length;i++){
    //                   this.toggleChoose(arr[i])
    //               }
    //      }
         
    // });
    console.log(this.hasChoose)
}


  checkSort(key){
    let choose = this.allData.filter(item => item.name == key)[0]
    return choose.choose
  } 

  checkColor(item){
    let color;
    this.banboColor.forEach((ele,index) => {
      if(ele.indexOf(item) != -1){
          if(index == 0)
             color = 'red'
          else if(index == 1)
             color = 'purple'
          else
             color = 'green'
         
      }
    })
    return color
  }

  resetData(){
     if(this.gameSort == '半波'){
      console.log('quit')
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
     }else if(this.gameSort == '特码'){
                console.log('quit')
                this.hasChoose = []
                this.allData = this.allData.map(item => {
                    return {...item,choose:false}
                 })

     }
  }
}
