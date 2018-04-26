import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameTrendPage } from './game-trend';
import { ComponentsModule } from '../../components/components.module';
import { TrendHeadComponent } from '../../components/gametrend/trend-head/trend-head'

@NgModule({
  declarations: [
    GameTrendPage,
    TrendHeadComponent
  ],
  imports: [
    IonicPageModule.forChild(GameTrendPage),ComponentsModule
  ],
  entryComponents: [
    TrendHeadComponent
  ]
})
export class GameTrendPageModule {}
