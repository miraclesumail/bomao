import { NgModule } from '@angular/core';
import { LazyLoadDirective } from './lazy-load/lazy-load';
import { SwipeVerticalDirective } from './swipe-vertical/swipe-vertical';
@NgModule({
	declarations: [LazyLoadDirective,
    SwipeVerticalDirective],
	imports: [],
	exports: [LazyLoadDirective,
    SwipeVerticalDirective]
})
export class DirectivesModule {}
