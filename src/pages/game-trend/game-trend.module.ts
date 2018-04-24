import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameTrendPage } from './game-trend';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GameTrendPage,
  ],
  imports: [
    IonicPageModule.forChild(GameTrendPage),ComponentsModule
  ],
})
export class GameTrendPageModule {}
