import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasketDataProvider } from '../../providers/basket-data/basket-data'
import { CommonProvider } from "../../providers/common/common";
import { slideUp } from '../../animations'
import { trigger ,state,transition,animate,style} from "@angular/animations";

/**
 * Generated class for the BasketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
  animations:slideUp
})
export class BasketPage {
  show:string = "invisable"

  constructor(public navCtrl: NavController, public navParams: NavParams, public basket:BasketDataProvider, public common:CommonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
  }

  toggle(){
    this.show = this.show == 'invisable' ? 'visable' : 'invisable'
  }

}
