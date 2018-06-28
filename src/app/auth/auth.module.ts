import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import {NgxsModule} from '@ngxs/store';

import { AuthComponent } from './auth.component';
import { AppSharedModule } from '../shared/shared.module';
import { AuthRoutes } from './auth.routing';


@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    AppSharedModule,
    RouterModule.forChild(AuthRoutes),
    //NgxsModule.forFeature(AuthState),
  ],
  providers: [],
})
export class AuthModule {
}
