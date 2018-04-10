import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { CommonProvider } from "../../../providers/common/common";

@IonicPage()
@Component({
  selector: 'ssc',
  templateUrl: 'ssc.html'
})
export class SscPage {
  record:any = [
    {number:23057,balls:'12345',shiwei:'大单',gewei:'小双',housan:'组六'},
    {number:23056,balls:'34567',shiwei:'大单',gewei:'小双',housan:'组六'},
  ]

  constructor(public navCtrl: NavController,public common:CommonProvider) {
      this.common.setActiveTheme('ssc')
  }

  onDragDown(event){
    alert('dd')
  }
}
