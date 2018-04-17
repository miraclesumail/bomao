import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AlertController, LoadingController, ToastController} from "ionic-angular";

/*
  Generated class for the GlobalShareProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalShareProvider {
  // 记录当前登陆用户
  user: any;
  plat='h5';
  pid:any;
  loading: any;

  parameters = {0:{
    _token: '',
    page: 1,
    end: '2018-4-15',
    start: '2018-4-10',
    bet_status: 1,
    lottery_id: '60'
  },1:{
    _token: '',
    page: 1,
    end: '',
    start: '',
    bet_status: 1,
    lottery_id: ''
  }};

  constructor(private toastCtrl: ToastController, public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
    console.log('Hello GlobalShareProvider Provider');
  }

  checkPlatform(){
    let userAgent: any = navigator.userAgent.toLowerCase()
    this.plat='h5';
    if(userAgent.match(/iphone os/i) == "iphone os"){
      this.plat='ios';
    }else if(userAgent.match(/android/i) == "android"){
      this.plat='android';
    }
  }

  showToast(msg,time?,position?) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: time?time:2000,
      position: position?position:'middle'
    });
    toast.present();
  }

  showLoading(msg?) {
    if (!this.loading) {
      this.loading = this.loadingCtrl.create({content: msg ? msg : '', spinner: 'bubbles'});
      this.loading.present();
    }
  }

  hideLoading() {
    this.loading && this.loading.dismiss();
    this.loading = null;
  }
}
