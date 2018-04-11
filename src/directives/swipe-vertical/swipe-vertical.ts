import {Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core'
import {Gesture} from 'ionic-angular/gestures/gesture'
declare var Hammer: any

/**
 * Generated class for the SwipeVerticalDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[swipe-vertical]' // Attribute selector
})
export class SwipeVerticalDirective {
  // @Input('swipeUp') actionUp: any;
  @Input('swipeDown') actionDown: any;

  private el: HTMLElement
  private swipeGesture: Gesture
  private swipeDownGesture: Gesture

  constructor(el: ElementRef) {
    console.log('Hello SwipeVerticalDirective Directive');
    this.el = el.nativeElement
    // setTimeout(() => {
    //   console.log(this.actionDown)
    //   this.swipeGesture = new Gesture(this.el,{
    //      recognizers:[
    //         [Hammer.Swipe, {direction: Hammer.DIRECTION_VERTICAL}]
    //      ]
    //   }) 
  
    //   this.swipeGesture.listen()
    //   // this.swipeGesture.on('swipeup', e => {
    //   //   this.actionUp()
    //   // })
    //   this.swipeGesture.on('swipedown', e => {
    //     this.actionDown()
    //   })
    // },1000)
  }

  ionViewLoaded(){
   
   }

   ngOnDestroy() {
    this.swipeGesture.destroy()
   }
}
