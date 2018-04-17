import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientProvider } from '../http-client/http-client'
/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface loginParameter {
  username: string,
  password: string
}

@Injectable()
export class LoginServiceProvider {

  constructor(public http: HttpClient, private client: HttpClientProvider) {
    console.log('Hello LoginServiceProvider Provider');
  }

  loginApp(parameter: loginParameter): Promise<any> {
    return this.client.post('/mobile-h5-auth/login', parameter);
  }

  
}
