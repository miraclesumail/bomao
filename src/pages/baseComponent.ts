import * as $ from 'jquery';
import { CommonProvider } from '../providers/common/common'
import { GamemenuComponent } from '../components/gamemenu/gamemenu'

export class Effect{
    constructor(public common:CommonProvider, public gamemenu:GamemenuComponent){
         let self = this;
         $(document).on('click','.body-bg',function(){
         if(self.common.visible = 'visable'){
              console.log('fff');self.gamemenu.toggle()
        }
         });
    }

}