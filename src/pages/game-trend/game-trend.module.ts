import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameTrendPage } from './game-trend';

@NgModule({
  declarations: [
    GameTrendPage,
  ],
  imports: [
    IonicPageModule.forChild(GameTrendPage),
  ],
})
export class GameTrendPageModule {}
