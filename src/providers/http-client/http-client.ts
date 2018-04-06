import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpClientProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpClientProvider Provider');
  }

  public fetchData(url):Promise<any>{
      return new Promise((resolve,reject) => {
             this.http.get(url).subscribe(data => {
                  resolve(data)
             })
      })
  }
}
