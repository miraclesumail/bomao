import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LazyLoadPage } from './lazy-load';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    LazyLoadPage,
  ],
  imports: [
    IonicPageModule.forChild(LazyLoadPage),LazyLoadImageModule
  ],
})
export class LazyLoadPageModule {}
