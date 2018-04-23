import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreLotteryPage } from './more-lottery';
import { DirectivesModule } from '../../directives/directives.module'

@NgModule({
  declarations: [
    MoreLotteryPage,
  ],
  imports: [
    IonicPageModule.forChild(MoreLotteryPage),DirectivesModule
  ],
})
export class MoreLotteryPageModule {}
