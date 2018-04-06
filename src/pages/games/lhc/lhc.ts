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
       transition('* => *',animate('15s'))
    ])
   ]
})
export class LhcPage {
  data:any = 3;  
  choosen:string;
  method:string;
  small:any;
  visible:string = 'invisable'

  constructor(public navCtrl: NavController, public common:CommonProvider, public http:HttpClientProvider) {
      this.common.setActiveTheme('lhc');
      this.initData();
      //let aa = async this.http.fetchData('/assets/lhc.json');
  }

  changeMethod(name){
      this.method = name;
      this.small = this.data.list.filter(item => item.name == name)[0].children;
  }

  toggle(){
      this.visible = this.visible == 'invisable' ? 'visable':'invisable'
      //$('.choose-game').toggleClass('alert-show')
  }

  confirm(name){
      this.choosen = this.method + name
  }

  async initData(){
      this.data = await this.http.fetchData('./assets/lhc.json');
      this.choosen =  this.data.list[0].name + this.data.list[0].children[0];
      //console.log(this.choosen)
      this.changeMethod(this.data.list[0].name);
      console.log(this.data)
  }

}
