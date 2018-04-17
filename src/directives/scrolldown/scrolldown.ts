import {Directive, ElementRef, HostListener, Input, Output, Renderer, EventEmitter} from '@angular/core';
import * as $ from 'jquery' 
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

  @Input("change") chColor: string;

  @Output('change')change :EventEmitter<any> = new EventEmitter<any>();

  constructor(private el:ElementRef, private renderer:Renderer) {
    

    console.log('Hello ScrolldownDirective Directive');
    el.nativeElement.addEventListener('touchstart', (e) => {
      e.preventDefault();
      
      this.originY = e.changedTouches[0].pageY
      console.log(this.originY)
      console.log(this.prev)
    }, false)

    el.nativeElement.addEventListener('touchmove', (e) => {
      console.log('touchmove')
      // this.originY = e.changedTouches[0].pageY
      // console.log(this.originY)
      e.preventDefault();
      let gap = e.changedTouches[0].pageY - this.originY
      if(gap < 0 ) return
      el.nativeElement.style.top = gap + 10 + 'px'
    }, false)

    el.nativeElement.addEventListener('touchend', (e) => {
      e.preventDefault();
      if(e.changedTouches[0].pageY - this.originY < this.prev.offsetHeight/2)
         $(el.nativeElement).animate({top:'10px'},300,() => console.log('wcnm'))
      else
        $(el.nativeElement).animate({top:this.prev.offsetHeight + 'px'},300,() => console.log('wcnm'))
      this.originY = e.changedTouches[0].pageY 
    }, false)
  }
  
  ngOnInit(){
      this.prev = this.el.nativeElement.previousElementSibling
      //this.change.emit('ssssssss')
      console.log(this.chColor)
  }
  
}
