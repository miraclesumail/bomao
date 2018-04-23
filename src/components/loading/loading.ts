import { Component } from '@angular/core';

/**
 * Generated class for the LoadingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loading',
  templateUrl: 'loading.html'
})
export class LoadingComponent{
  show:boolean = true
  text: string;

  constructor() {
    console.log('Hello LoadingComponent Component');
    this.text = '数据加载中';
    setTimeout(() => this.text = '数据加载失败',3000)
  }

  fade(){
      this.show = false
  }
}
