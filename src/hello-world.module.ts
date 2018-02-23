import { NgModule } from '@angular/core';

import { HelloWorldComponent } from './components';
import { HelloWorldService } from './services';

@NgModule({
  providers: [HelloWorldService],
  declarations: [HelloWorldComponent],
  exports: [HelloWorldComponent]
})

export class HelloWorldModule { }
