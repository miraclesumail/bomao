import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SscPage } from './ssc';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

// create a class that overrides hammer default config

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL } // override default settings
  }
}


//import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SscPage
  ],
  imports: [
    IonicPageModule.forChild(SscPage)
  ]
  
})
export class SscPageModule {}