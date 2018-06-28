import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppSharedModule } from './shared/shared.module';
import { AppRouting } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    //AppSharedModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
