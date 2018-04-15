import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LazyLoadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lazy-load',
  templateUrl: 'lazy-load.html',
})
export class LazyLoadPage {
  imgArr:Array<any> = ['/assets/imgs/lazy1.jpg','/assets/imgs/lazy2.jpg','/assets/imgs/lazy3.jpg','/assets/imgs/lazy2.jpg','/assets/imgs/lazy3.jpg']
  offset:number = 100

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LazyLoadPage');
  }

}
