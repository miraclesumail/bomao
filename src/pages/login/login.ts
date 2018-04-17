import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GlobalShareProvider} from "../../providers/global-share/global-share";
import {LoginServiceProvider} from "../../providers/login-service/login-service";
import { HomeServiceProvider } from "../../providers/home-service/home-service"
import * as md5 from 'md5'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  LoginForm: FormGroup;

  constructor(private logins: LoginServiceProvider, public navCtrl: NavController,public home:HomeServiceProvider, public navParams: NavParams, public fb: FormBuilder, private share: GlobalShareProvider) {
    this.LoginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.pattern(/^[a-zA-Z0-9`\-=\[\];,./~!@#$%^*()_+}{:?]{6,16}$/)]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(localData){
     this.share.showLoading("正在登陆中....");
     let data = await this.logins.loginApp(localData)
     
     if (data.isSuccess) {
         this.share.user = data.data;
         this.home.fetchMethedsList()
     }
  }

  formLogin(){
     if(this.LoginForm.valid){
           this.login(this.getFormData())
     }
  }

  getFormData(){
     let {username, password} = this.LoginForm.controls;
     return {
          username: username.value,
          password: md5(md5(md5(username.value + password.value)))          
     }
  }
}
