import { NgModule } from '@angular/core';
//import { BetComponent } from './bet/bet';
import {CommonModule} from '@angular/common';

import { RightmenuComponent } from './rightmenu/rightmenu';
import { GamemenuComponent } from './gamemenu/gamemenu';
import { TabYuanComponent } from './tab-yuan/tab-yuan';
import { AaaComponent } from './aaa/aaa';
@NgModule({
	declarations: [
    RightmenuComponent,
    GamemenuComponent,
    TabYuanComponent,
    AaaComponent],
	imports: [CommonModule],
	exports: [
    RightmenuComponent,
    GamemenuComponent,
    TabYuanComponent,
    AaaComponent]
})
export class ComponentsModule {}
