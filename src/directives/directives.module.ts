import { NgModule } from '@angular/core';
import { LazyLoadDirective } from './lazy-load/lazy-load';
import { SwipeVerticalDirective } from './swipe-vertical/swipe-vertical';
import { ScrolldownDirective } from './scrolldown/scrolldown';
import { DragDirective } from './drag/drag';
@NgModule({
	declarations: [LazyLoadDirective,
    SwipeVerticalDirective,
    ScrolldownDirective,
    DragDirective],
	imports: [],
	exports: [LazyLoadDirective,
    SwipeVerticalDirective,
    ScrolldownDirective,
    DragDirective]
})
export class DirectivesModule {}
