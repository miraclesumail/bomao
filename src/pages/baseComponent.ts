import * as $ from 'jquery';
import { CommonProvider } from '../providers/common/common'
//import { ViewController } from ''
import { GamemenuComponent } from '../components/gamemenu/gamemenu'
import {
    ComponentFactoryResolver,

  } from '@angular/core'
import { LoadingComponent } from '../components/loading/loading'
export class Effect{
 

    constructor(public common:CommonProvider, public gamemenu:GamemenuComponent,public factoryResolver:ComponentFactoryResolver){
         let self = this;
         $(document).on('click','.body-bg',function(){
         if(self.common.visible = 'visable'){
              console.log('fff');self.gamemenu.toggle()
        }
         });
         //this.addDynamicComponent()
    }

    // addDynamicComponent() {
    //     const factory = this.factoryResolver
    //                         .resolveComponentFactory(LoadingComponent)
    //                         console.log(this.container)
    //                         this.componentRef = this.container.createComponent(factory)                    
    
    //   }
}