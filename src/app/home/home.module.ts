import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import {NgxsModule} from '@ngxs/store';

import { HomeComponent } from './home.component';
import { AppSharedModule } from '../shared/shared.module';
import { HomeRoutes } from './home.routing';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    AppSharedModule,
    RouterModule.forChild(HomeRoutes),
    //NgxsModule.forFeature(AuthState),
  ],
  providers: [],
})
export class HomeModule {
}
