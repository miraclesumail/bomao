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

  text: string;

  constructor() {
    console.log('Hello QiansanComponent Component');
    this.text = 'Hello World';
  }

}
