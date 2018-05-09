import { Component } from '@angular/core';

/**
 * Generated class for the QiansanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qiansan',
  templateUrl: 'qiansan.html'
})
export class QiansanComponent {

  historyRecord: any;

  menus:string[] = ['开奖','万位走势','千位走势']
  choose:string = '开奖';

  constructor() {
    console.log('Hello QiansanComponent Component');
    //this.text = 'Hello World';
  }

}
