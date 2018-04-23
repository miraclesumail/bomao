import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Config} from "../../config/config";
import {GlobalShareProvider} from "../global-share/global-share";
import { Effect } from '../../pages/baseComponent'
/*
  Generated class for the HttpClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpClientProvider {
  baseUrl = Config.baseurl;

  constructor(public http: HttpClient, public share: GlobalShareProvider) {
    console.log('Hello HttpClientProvider Provider');
  }

  public fetchData(url):Promise<any>{
      return new Promise((resolve,reject) => {
             //this.beforeRequest()
             this.http.get(url).subscribe((data:any) => {
                 resolve(data)
               
            })
      })
  }

  get(url): Promise<any> {
    return this.doSubmitAction(url);
  }

  post(url, data):Promise<any>{
    return this.doSubmitAction(url, data);
  }

  beforeRequest() {
    // let a = localStorage.expired;
    // let b = Date.now();
    // if ((b - a) > 1800000)
    //  // this.logout();
    // else
    //   localStorage.expired = Date.now();
    // return (b - a) > 1800000;
    // console.log('few')
    // this.share.showLoading('fetching data now')
  }

  doSubmitAction(url, data?): Promise<any> {
     return new Promise((resolve, reject) => {
         this.beforeRequest()
         if(data) {
            return this.http.post(this.baseUrl + url, data).subscribe( (data:any) => {
                 console.log(data)
                 if(data.isSuccess){
                     resolve(data)
                     this.share.hideLoading()
                 }else {
                  this.share.showToast(data.Msg, 3000);
                  this.share.hideLoading();
                  //reject(data);
                }
            }, (e) => {
                  this.share.showToast(JSON.stringify(e), 3000);
                  this.share.hideLoading();
                  reject(e);
            })
         }else{
              return this.http.get(this.baseUrl + url).subscribe((data:any) => {
                console.log(data)
                if (data.isSuccess) {
                  resolve(data);
                  this.share.hideLoading();
                } else {
                  this.share.showToast(data.Msg, 3000);
                  this.share.hideLoading();
                  //reject(data);
                }
              }, (e) => {
                this.share.showToast(e, 3000);
                this.share.hideLoading();
                reject(e);
              })
         }
      })
  }

}
