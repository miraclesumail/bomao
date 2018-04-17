import { NgModule } from '@angular/core';
import { LazyLoadDirective } from './lazy-load/lazy-load';
import { SwipeVerticalDirective } from './swipe-vertical/swipe-vertical';
import { ScrolldownDirective } from './scrolldown/scrolldown';
@NgModule({
	declarations: [LazyLoadDirective,
    SwipeVerticalDirective,
    ScrolldownDirective],
	imports: [],
	exports: [LazyLoadDirective,
    SwipeVerticalDirective,
    ScrolldownDirective]
})
export class DirectivesModule {}
