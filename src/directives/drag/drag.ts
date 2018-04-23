import {Directive, ElementRef, Attribute, HostListener, Inject, Input, Output, Renderer, EventEmitter} from '@angular/core';

/**
 * Generated class for the DragDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[drag]' // Attribute selector
})
export class DragDirective {
  originY:number;
  originX:number;

  top:any;
  left:number;

  constructor(private el:ElementRef) {
    console.log('Hello DragDirective Directive');
    console.log(el.nativeElement.offsetWidth);
    // this.top = el.nativeElement.offsetTop - el.nativeElement.offsetParent.offsetTop;
    // this.left = el.nativeElement.offsetLeft - el.nativeElement.offsetParent.offsetLeft;

    el.nativeElement.addEventListener('touchstart', this.touchStart.bind(this), false)
    
        el.nativeElement.addEventListener('touchmove', this.touchMove.bind(this), false)
    
        // el.nativeElement.addEventListener('touchend', this.touchEnd.bind(this)
           
        // , false)
  }

  ngOnInit(){
      this.top = this.el.nativeElement.offsetParent
      console.log(this.top)
  }

  touchStart(e){
      console.log(this.el.nativeElement.offsetWidth);
      this.originY = e.changedTouches[0].pageY
      this.originX = e.changedTouches[0].pageX
      console.log(this.originY)
     
  }

  touchMove(e){
    console.log('touchmove')
  
    let gapY = e.changedTouches[0].pageY - this.originY

    let gapX = e.changedTouches[0].pageX - this.originX
    
    this.el.nativeElement.style.transform = "translate(" + gapX +"px," + gapY + "px)"
   }

   touchEnd(e){
       
   }

}
