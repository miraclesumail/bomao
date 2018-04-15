import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicSwipeAllModule } from 'ionic-swipe-all';
import { LazyLoadImageModule } from 'ng-lazyload-image';

// ngmodel 绑定
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BetComponent } from '../components/bet/bet';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IonicStorageModule } from '@ionic/storage';
import * as Swiper from 'swiper';
import {KSSwiperModule} from "angular2-swiper";
import {HttpClientModule} from "@angular/common/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommonProvider } from '../providers/common/common';
import { HttpClientProvider } from '../providers/http-client/http-client';
import { UtilProvider } from '../providers/util/util';
import { BasketDataProvider } from '../providers/basket-data/basket-data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BetComponent
  ],
  imports: [
    BrowserModule,
    KSSwiperModule,
    NoopAnimationsModule,
    IonicSwipeAllModule,
    FormsModule,
    HttpClientModule,
    LazyLoadImageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BetComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonProvider,
    HttpClientProvider,
    UtilProvider,
    BasketDataProvider
  ]
})
export class AppModule {}
