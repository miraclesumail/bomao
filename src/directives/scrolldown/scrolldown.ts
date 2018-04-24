import {Directive, ElementRef, Attribute, HostListener, Inject, Input, Output, Renderer, EventEmitter} from '@angular/core';
import * as $ from 'jquery' 
import { SscPage } from '../../pages/games/ssc/ssc'
/**
 * Generated class for the ScrolldownDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[scrolldown]' // Attribute selector
})
export class ScrolldownDirective {
  originY:number;
  prev:any;

  //@Input("change") chColor: string;


  constructor(private el:ElementRef, private renderer:Renderer,@Attribute('author') public author: string,
    @Inject(SscPage) private parent: SscPage) {
    
    console.log(author)
    console.log(this.parent.author)
    console.log('Hello ScrolldownDirective Directive');

    el.nativeElement.addEventListener('touchstart', this.touchStart.bind(this), false)

    el.nativeElement.addEventListener('touchmove', this.touchMove.bind(this), false)

    el.nativeElement.addEventListener('touchend', this.touchEnd.bind(this)
       
    , false)
  }
  
  ngOnInit(){
     let self = this;
              this.prev = this.el.nativeElement.previousElementSibling
       $(this.el.nativeElement).find('#off').click(function(){
           
            $(this).addClass('none')
            self.parent.shadow = true
            $(self.el.nativeElement).animate({top:18 + 'px'},300,() => {
                console.log('wrrrr')
            })
       }) 
      //this.change.emit('ssssssss')
     // console.log(this.chColor)
  }

  checkStatus(){
      return !$(this.el.nativeElement).find('#off').hasClass('none')
  }

  touchStart(e){
    if(this.checkStatus()) return
      this.originY = e.changedTouches[0].pageY
      console.log(this.originY)
      console.log(this.prev)
  }

  touchMove(e){
      if(this.checkStatus()) return
      console.log('touchmove')
      e.preventDefault();
      let gap = e.changedTouches[0].pageY - this.originY
      if(gap < 0 ) return
      this.el.nativeElement.style.top = gap + 18 + 'px'
  }

  touchEnd(e){
  
    if(this.checkStatus()) return
       e.preventDefault();
      if(e.changedTouches[0].pageY - this.originY < this.prev.offsetHeight/2)
         $(this.el.nativeElement).animate({top:'18px'},300,() => {})
      else
        $(this.el.nativeElement).animate({top:this.prev.offsetHeight + 18 + 'px'},300,() => {
            this.parent.shadow = false
            $(this.el.nativeElement).find('#off').removeClass('none')
        })
      this.originY = e.changedTouches[0].pageY 
  }
}
