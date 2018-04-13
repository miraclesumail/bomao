import { Component } from '@angular/core';

/**
 * Generated class for the AaaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'aaa',
  templateUrl: 'aaa.html'
})
export class AaaComponent {

  text: string;
  qq = [1,2,3]
  constructor() {
    console.log('Hello AaaComponent Component');
    this.text = 'Hello World';
  }

}
