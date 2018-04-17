import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Config} from "../../config/config";
import {GlobalShareProvider} from "../global-share/global-share";
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
             this.http.get(url).subscribe(data => {
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

  doSubmitAction(url, data?): Promise<any> {
     return new Promise((resolve, reject) => {
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
