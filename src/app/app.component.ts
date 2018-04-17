import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommonProvider } from "../providers/common/common";
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  theme:any;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public common:CommonProvider) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
       
    });

      this.platform.registerBackButtonAction(() => {alert
        ('u press back')})

    this.common.getActiveTheme().subscribe(theme => {
      if (theme) {
        this.theme = theme;
     
    }})
  }

  
}
