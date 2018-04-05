import { Directive } from '@angular/core';

/**
 * Generated class for the LazyLoadDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[lazy-load]' // Attribute selector
})
export class LazyLoadDirective {

  constructor() {
    console.log('Hello LazyLoadDirective Directive');
  }

}
