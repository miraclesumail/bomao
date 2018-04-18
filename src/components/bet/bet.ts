import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
/**
 * Generated class for the BetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bet',
  templateUrl: 'bet.html'
})
export class BetComponent {
  betInfo:any=[];
  betMoney:any=[];
  yuan:any = {};
  choosen:string;
  betOrder:any ={};
  price:number = 0;
  total:number = 0
  count:number;
  // get price(){
  //     return this.yuan[this.choosen]
  // }
  // price:any = 

  // set price(val){
  //     console.log('sss')
  //     this.yuan[this.choosen] = val 
  // }

  constructor(public params: NavParams) {
    console.log('Hello BetComponent Component');
    this.betInfo = this.params.get('data')
    this.choosen = this.betInfo[0].name
    this.count = this.betInfo.length
    //this.betMoney
    // this.betInfo.forEach(element => {
    //      this.yuan[element.name] = ''
    // });
  }

  calculate($event){
       this.total = this.count*$event
  }

  valueChange(val){
     console.log(val)
     this.yuan[this.choosen] = val 
     let number=0, total = 0;
     
     for(let o of Object.keys(this.yuan)){
            if(this.yuan[o]!=''){
                number++
                total += parseInt(this.yuan[o])
            }
     }
     this.betOrder = {number,total}
  }

  change(aa){
    this.betInfo = this.betInfo.map(item => item == aa ? {...item,default:true}:{...item,default:false})
    this.choosen = aa.name;
    console.log(this.choosen)
    console.log(this.yuan)
  }
}
