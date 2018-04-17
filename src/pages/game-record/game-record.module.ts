import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameRecordPage } from './game-record';

@NgModule({
  declarations: [
    GameRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(GameRecordPage),
  ],
})
export class GameRecordPageModule {}
