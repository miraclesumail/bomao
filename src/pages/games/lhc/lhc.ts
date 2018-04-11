import { Component } from '@angular/core';
import { NavController,IonicPage,ModalController } from 'ionic-angular';
import { CommonProvider } from "../../../providers/common/common";
import { HttpClientProvider } from "../../../providers/http-client/http-client";
import { BetComponent } from '../../../components/bet/bet';
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'lhc',
  templateUrl: 'lhc.html'
 
})
export class LhcPage {
  data:any = 3;  
  choosen:string;
  method:string;
  small:any;
  visible:string = 'invisable';
  number:number;
  record:any;
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
  timer:any;
  
  total:any = [
      [1,2,3,4,5,6,7],
      [8,9,10,11,12,13,14],
      [15,16,17,18,19,20,21],
      [22,23,24,25,26,27,28],
      [29,30,31,32,33,34,35],
      [36,37,38,39,40,41,42],
      [43,44,45,46,47,48,49]
  ]

  allData:any = [
      {'大':{choose:false,numbers:[25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]}},
      {'小':{choose:false,numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}},
      {'单':{choose:false,numbers:[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]}},
      {'双':{choose:false,numbers:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48]}},
  ]

  kinds:any = [];

  hasChoose:any = [];

  constructor(public navCtrl: NavController, public common:CommonProvider, public http:HttpClientProvider,public modalCtrl: ModalController) {
      this.common.setActiveTheme('lhc');
      this.record = this.mockData();
      this.initData();
      this.kinds = this.allData.map(item => Object.keys(item));
      //let aa = async this.http.fetchData('/assets/lhc.json');
  }

  toggle(){
      this.visible = this.visible == 'invisable' ? 'visable':'invisable'
      this.visible == 'visable' ? $('.body-bg').fadeIn(1000) : $('.body-bg').fadeOut(1000)
      //$('.choose-game').toggleClass('alert-show')
  }

  turnVisible($event){
      this.visible = $event
      this.visible == 'visable' ? $('.body-bg').fadeIn(1000) : $('.body-bg').fadeOut(1000)
  }

  switch(item){
    console.log(item)
    //let self = this;
      this.allData = this.allData.map(element => {
        //    if(element.hasOwnProperty(item)){
        //        element.choose = !element.choose
        //        return element
        //    }else{
        //        return element
        //    }
           console.log(element)
           //console.log(element[item].numbers)
           return element.hasOwnProperty(item) ? {[item]:{choose:!element[item].choose,numbers:element[item].numbers}}:element
      });
      console.log(this.allData);
      this.allData.forEach(element => {
           let key = Object.keys(element)[0];
           let arr = element[key].numbers;
           if(key == item ){
                // if(element[key].choose){
                    for(let i =0;i < arr.length;i++){
                        this.toggleChoose(arr[i])
                    }
           }
           
      });
      console.log(this.hasChoose)
  }

  toggleChoose(item){
      if(this.check(item))
        this.add_remove({type:'remove',content:item})
      else
        this.add_remove({type:'add',content:item})
  }

  add_remove(playload){
      console.log(this.hasChoose)
      if(playload.type == 'add')
         this.hasChoose.push(playload.content)
      else
         this.hasChoose.splice(this.hasChoose.indexOf(playload.content),1)

      this.allData = this.allData.map(item => {
         let key = Object.keys(item)[0];
         let flag = true;
         for(let i =0;i<item[key].numbers.length;i++){
             if(!this.hasChoose.includes(item[key].numbers[i])){
                 flag = false
                 break 
             }
                
         }
         return {[key]:{choose:flag,numbers:item[key].numbers}}
      })
  }

  bet(){
    let data = this.hasChoose.map((item,index) => {return {'name':this.choosen + '' + item, 'default':index==0?true:false}});
    let contactModal = this.modalCtrl.create(BetComponent,{data:data})
    contactModal.present()
  }

  check(ii){
      return this.hasChoose.includes(ii)
  }

  checkSort(key){
      let choose = this.allData.filter(item => Object.keys(item)[0] == key)[0]
      return choose[key].choose
  }

  confirm(name){
      this.choosen = this.method + name
  }

  async initData(){
      this.data = await this.http.fetchData('./assets/lhc.json');
      this.choosen =  this.data.list[0].name + this.data.list[0].children[0];
      //this.changeMethod(this.data.list[0].name);
      console.log(this.data)
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
      let result = [0,0,0,0,0,0,0,0].map((ele,index) => {
          if(index == 6)
             return '+'
          let choose = record[Math.floor(Math.random()*(record.length - 1))]
          record.splice(record.indexOf(choose),1)
          choose < 10 ? '0' + choose : choose;
          return choose
      })
      console.log(result)

      let axiba = [0,0,0,0,0,0,0,0].map((ele,index) =>{
          if(index == 6)
             return ' '
          let filter = this.zodadic.filter(ele => ele.indexOf(result[index]) != -1)[0]  
          return this.mark[this.zodadic.indexOf(filter)]
      })
      
      return {
          result,
          number,
          axiba
      }
  }
}
