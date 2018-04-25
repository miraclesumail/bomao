import { NgModule } from '@angular/core';
//import { BetComponent } from './bet/bet';
import {CommonModule} from '@angular/common';

import { RightmenuComponent } from './rightmenu/rightmenu';
import { GamemenuComponent } from './gamemenu/gamemenu';
import { TabYuanComponent } from './tab-yuan/tab-yuan';
import { AaaComponent } from './aaa/aaa';
import { QiansanComponent } from './qiansan/qiansan';
@NgModule({
	declarations: [
    RightmenuComponent,
    GamemenuComponent,
    TabYuanComponent,
    AaaComponent,
    QiansanComponent
    ],
	imports: [CommonModule],
	exports: [
    RightmenuComponent,
    GamemenuComponent,
    TabYuanComponent,
    AaaComponent,
    QiansanComponent
    ]
})
export class ComponentsModule {}
