import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LhcPage } from './lhc';
import { ComponentsModule } from '../../../components/components.module'
//import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    LhcPage
  ],
  imports: [
    IonicPageModule.forChild(LhcPage),ComponentsModule
  ],
})
export class HomePageModule {}