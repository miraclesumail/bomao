import { NgModule } from '@angular/core';
//import { BetComponent } from './bet/bet';
import {CommonModule} from '@angular/common';

import { RightmenuComponent } from './rightmenu/rightmenu';
import { GamemenuComponent } from './gamemenu/gamemenu';
@NgModule({
	declarations: [
    RightmenuComponent,
    GamemenuComponent],
	imports: [CommonModule],
	exports: [
    RightmenuComponent,
    GamemenuComponent]
})
export class ComponentsModule {}
