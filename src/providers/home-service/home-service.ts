import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {HttpClientProvider} from "../http-client/http-client";
import {GlobalShareProvider} from "../global-share/global-share";
/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeServiceProvider {
  parameter:any;

  constructor(public client: HttpClientProvider, public share: GlobalShareProvider) {
    console.log('Hello HomeServiceProvider Provider');
    
  }

  getParamaterToken(): any {
    return {_token: this.share.user.token};
  }

  async postLotteryServer(){
     this.parameter = this.getParameters(0)
     //this.share.showLoading();
     let inData = await this.client.post('/mobile-lotteries-h5/lottery-info', this.parameter);
     
  }

  getParameters(index) {
    if(this.share.user) this.share.parameters[index]._token = this.share.user.token;
    return this.share.parameters[index];
  }

  async getBalance() {
    let balance = await this.client.get('/mobileh5-users/user-account-info');
    console.log(balance)
  }

  getBannerRemoteServer(): Promise<any> {
    return this.client.get('/mobileh5-announcements/banner')    
  }

  async fetchMethedsList() {
    let data = await this.client.post(`/mobile-lotteries-h5/load-data/2/60`, this.getParamaterToken());
  }
}
