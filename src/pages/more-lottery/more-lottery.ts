import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoreLotteryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more-lottery',
  templateUrl: 'more-lottery.html',
})
export class MoreLotteryPage {
  arr:any = ['aaa','bbb','ccc','ddd','eee','fff','ggg','hhh','mmm']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreLotteryPage');
    let qq = document.getElementsByClassName('move')
    // for(let i=0;i<qq.length;i++){
    //    console.log(qq[i].offsetLeft)
    // }
  }



}
