import {Directive, ElementRef, Attribute, HostListener, Inject, Input, Output, Renderer, EventEmitter} from '@angular/core';
import * as $ from 'jquery' 

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

  top:number;
  left:number;
  arr:any = []

  load:Array<any> = [];
  current:number;

  constructor(private el:ElementRef) {
    console.log('Hello DragDirective Directive');
    console.log(el.nativeElement.offsetWidth);
    // this.top = el.nativeElement.offsetTop - el.nativeElement.offsetParent.offsetTop;
    // this.left = el.nativeElement.offsetLeft - el.nativeElement.offsetParent.offsetLeft;

    el.nativeElement.addEventListener('touchstart', this.touchStart.bind(this), false)
    
        el.nativeElement.addEventListener('touchmove', this.touchMove.bind(this), false)
    
        el.nativeElement.addEventListener('touchend', this.touchEnd.bind(this)
           
        , false)
  }

  ngOnInit(){
      // this.top = this.el.nativeElement.offsetLeft
      // console.log(this.top)
      let arr = []
      
      // $('.move').each((index,ele) => {
      //      arr.push({left:$(ele).offset().left, top:$(ele).offset().top})
      // })
      // console.log(arr)

  }

  touchStart(e){
      this.arr = []
      $('.move').removeClass('mark')
      $(this.el.nativeElement).addClass('mark')
      this.current = $('.move').index($(this.el.nativeElement))
      this.left = parseInt($(this.el.nativeElement).css('left'))
      this.top = parseInt($(this.el.nativeElement).css('top'))
      
      
         let divs = document.getElementsByClassName('move')
         for(let i = 0; i< divs.length; i++){
             let left = divs[i].getBoundingClientRect().left
             let right = divs[i].getBoundingClientRect().right
             let top = divs[i].getBoundingClientRect().top
             let bottom = divs[i].getBoundingClientRect().bottom
             
             this.arr.push({left:[left,right], top:[top,bottom]})

         }
      
        // $('.move').each((index,ele) => {
        //     this.arr.push({left:$(ele).offset().left, top:$(ele).offset().top})
        // })
      console.log(this.arr)
      console.log(this.el.nativeElement.offsetWidth);
      this.originY = e.changedTouches[0].pageY
      this.originX = e.changedTouches[0].pageX
      console.log(this.originY)
     
  }

  compare(dom){
      this.load = []
      let number = $('.move').index($(this.el.nativeElement))
      console.log(this.current)
      $('.move').removeClass('active')
      this.arr.forEach((ele,index) => {
         let result = this.judge(dom,ele)
         if(result.flag && index != number){
            $('.move').eq(index).addClass('active')
            this.load.push({number:index,area:result.area})
         }
           
    });
  }

  judge(ele,range){
      let left = ele.getBoundingClientRect().left
      let right = ele.getBoundingClientRect().right
      let top = ele.getBoundingClientRect().top
      let bottom = ele.getBoundingClientRect().bottom
      if(left > range.left[0] && left < range.left[1] && top > range.top[0] && top < range.top[1]){
          let width = range.left[1] - left
          let height = range.top[1] - top
          return {area:width*height, flag:true}
      }
         

      if(left > range.left[0] && left < range.left[1] && bottom > range.top[0] && bottom < range.top[1]){
          let width = range.left[1] - left
          let height = bottom - range.top[0]
          return {area:width*height, flag:true}
      }
         

      if(right > range.left[0] && right < range.left[1] && bottom > range.top[0] && bottom < range.top[1]){
          let width = right - range.left[0]
          let height = bottom - range.top[0]
          return {area:width*height, flag:true}
      }
           

      if(right > range.left[0] && right < range.left[1] && top > range.top[0] && top < range.top[1]){
          let width = right - range.left[0]
          let height = range.top[1] - top
          return {area:width*height, flag:true}
      }
          

      return {flag:false,area:0} 
  }

  touchMove(e){
   
    let gapY = e.changedTouches[0].pageY - this.originY

    let gapX = e.changedTouches[0].pageX - this.originX
    
    
   // this.el.nativeElement.style.transform = "translate(" + gapX +"px," + gapY + "px)"
    this.el.nativeElement.style.left = this.left + gapX +"px"
    this.el.nativeElement.style.top = this.top + gapY +"px"
    
    this.compare(this.el.nativeElement)
     
   }

   touchEnd(e){
      //  $(this.el.nativeElement).animate({left:'0px',top:'0px'},600,() => console.log('finish'))
      $('.move').removeClass('active')
      if(!this.load.length){
         $(this.el.nativeElement).animate({left:'0px',top:'0px'},600,() => console.log('finish'))
         return
      }
       
      console.log(this.load)
      let choose, max = 0;

      this.load.forEach((ele,index) => {
          console.log(ele.area)
          if(ele.area > max){
              choose = ele.number
              max = ele.area
            }
      })


       let disX = this.arr[this.current].left[0] - this.arr[choose].left[0]
       let disY = this.arr[this.current].top[0] - this.arr[choose].top[0]
      // console.log(this.arr[this.current])
       console.log(this.arr[choose])
      // console.log(disY)
       let left = parseInt($('.move').eq(choose).css('left'))
       let top = parseInt($('.move').eq(choose).css('top'))

       $(this.el.nativeElement).animate({left:this.left - disX + 'px',top:this.top - disY + 'px'},600,() => console.log('finish'))
       $('.move').eq(choose).animate({left:left + disX + 'px',top:top + disY + 'px'},600,() => console.log('finish'))

       let temp = this.arr[choose]
       this.arr[choose] = this.arr[this.current]
       this.arr[this.current] = temp
       console.log(this.arr)
   }

}
