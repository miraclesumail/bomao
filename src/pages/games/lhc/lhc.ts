import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { CommonProvider } from "../../../providers/common/common";
import { HttpClientProvider } from "../../../providers/http-client/http-client";
import { trigger ,state,transition,animate,style} from "@angular/animations";

import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'lhc',
  templateUrl: 'lhc.html',
  animations:[
    trigger('fading',[
       state('visable',style({
         opacity: 1,
         transform:'translate3d(0, 0, 0)'
       })),
       state('invisable', style({
         opacity: 0,
         transform:'translate3d(0, 100%, 0)'
       })),
       transition('* => *',animate('1s'))
    ])
   ]
})
export class LhcPage {
  data:any = 3;  
  choosen:string;
  method:string;
  small:any;
  visible:string = 'invisable';
  number:number;
  record:any;
  mark:any = ['鼠','牛','hu','tu','long','she','ma','yang','hou','ji','gou','zhu'];
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

  constructor(public navCtrl: NavController, public common:CommonProvider, public http:HttpClientProvider) {
      this.common.setActiveTheme('lhc');
      this.record = this.mockData();
      this.initData();
      //let aa = async this.http.fetchData('/assets/lhc.json');
  }

  changeMethod(name){
      this.method = name;
      this.small = this.data.list.filter(item => item.name == name)[0].children;
  }

  toggle(){
      this.visible = this.visible == 'invisable' ? 'visable':'invisable'
      this.visible == 'visable' ? $('.body-bg').fadeIn(1000) : $('.body-bg').fadeOut(1000)
      //$('.choose-game').toggleClass('alert-show')
  }

  confirm(name){
      this.choosen = this.method + name
  }

  async initData(){
      this.data = await this.http.fetchData('./assets/lhc.json');
      this.choosen =  this.data.list[0].name + this.data.list[0].children[0];
      
     // console.log(this.record)
      //console.log(this.choosen)
      this.changeMethod(this.data.list[0].name);
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
          let filter = this.zodadic.filter(ele => ele.indexOf(record[index]) != -1)[0]  
          return this.mark[this.zodadic.indexOf(filter)]
      })
      
      return {
          result,
          number,
          axiba
      }
  }


}
