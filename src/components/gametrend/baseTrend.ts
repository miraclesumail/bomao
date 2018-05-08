import { Slides } from 'ionic-angular';
import { UtilProvider } from '../../providers/util/util'

export class baseTrend{
    contentSlides:Slides;
    menus:string[];
    choose:string = '开奖';
    page:number = 1

    historyRecord: any;

    constructor(public util:UtilProvider){
        this.historyRecord = this.util.historyNumbers.slice(0,this.page*11)
        this.getKaijiang()
    }

    getKaijiang(){
        
    }

    ionChange($event){
        console.log('wcnmb')
        console.log($event.value)
        this.contentSlides.slideTo(this.menus.indexOf($event.value))
    }

    slideChanged(){
      let index = this.contentSlides.getActiveIndex()
      this.choose = this.menus[index]
  }

}