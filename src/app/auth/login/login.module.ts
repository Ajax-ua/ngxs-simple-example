import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { AppSharedModule } from '../../shared/shared.module';
import { LoginRoutes } from './login.routing';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    AppSharedModule,
    RouterModule.forChild(LoginRoutes),
  ],
  providers: [],
})
export class LoginModule {
}
