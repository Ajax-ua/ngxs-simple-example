import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';
import { AppSharedModule } from '../../shared/shared.module';
import { SignupRoutes } from './signup.routing';

@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    AppSharedModule,
    RouterModule.forChild(SignupRoutes),
  ],
  providers: [],
})
export class SignupModule {
}
