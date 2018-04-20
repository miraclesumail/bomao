import { NgModule } from '@angular/core';
import { TestPipe } from './test/test';
import { QqPipe } from './qq/qq';
@NgModule({
	declarations: [TestPipe,
    QqPipe],
	imports: [],
	exports: [TestPipe,
    QqPipe]
})
export class PipesModule {}
