/* tslint:disable:member-ordering no-unused-variable */
import { NgModule, Optional, SkipSelf } from '@angular/core';


//import { StoreModule } from '@ngrx/store';
//import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { EffectsModule } from '@ngrx/effects';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

import { environment } from '../../environments/environment';

//import { AppReducers, metaReducers } from '../ngrx';
import {ApplicationState} from './application/application.state';
import {ConfigState} from './config/config.state';
import {RequestsState} from './requests/requests.state';
import {ConfigGetState} from './requests/config/config-get/config-get.state';
import {LoginState} from './requests/auth/login/login.state';
import {AuthState} from './auth/auth.state';
import {UserState} from './user/user.state';
import {UserGetState} from './requests/user/user-get/user-get.state';
import {AuthGetterState} from './auth/auth-getter.state';

//import * as requestEffects from '../ngrx/requests/effects';
//import { ApplicationEffects } from '../ngrx/application/effects';
//import { AuthEffects } from '../ngrx/auth/effects';
//import { UserEffects } from '../ngrx/user/effects';
//import { ProfileEffects } from '../ngrx/profile/effects';
//import { ConfigEffects } from '../ngrx/config/effects';
//import { OrganizationEffects } from '../ngrx/organization/effects';
//import { RouterEffects } from '../ngrx/router/effects';
//import { InviteEffects } from '../ngrx/invite/effects';
//import { MemberEffects } from '../ngrx/member/effects';
//import { EventEffects } from '../ngrx/event/effects';

const effects: any[] = [
  //ApplicationEffects,
  //AuthEffects,
  //UserEffects,
  //ProfileEffects,
  //ConfigEffects,
  //
  //requestEffects.LoginEffects,
  //requestEffects.OrganizationDeleteEffects,
  //requestEffects.RegistrationEffects,
  //requestEffects.MembersPostEffects,
  //requestEffects.InvitesGetEffects,
  //requestEffects.ResendInviteEffects,
  //requestEffects.ChangePasswordEffects,
  //requestEffects.ConfigGetEffects,
];

@NgModule({
  imports: [
    NgxsModule.forRoot([
      ApplicationState,
      ConfigState,
      AuthState,
      UserState,
  
      // requests
      RequestsState,
      ConfigGetState,
      LoginState,
      UserGetState,
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsRouterPluginModule.forRoot(),
    //StoreModule.forRoot(AppReducers, { metaReducers }),
    //StoreRouterConnectingModule,
    //!environment.production
    //  ? StoreDevtoolsModule.instrument({maxAge: 10})
    //  : [],
    //EffectsModule.forRoot(effects),
  ],
  declarations: [],
  providers: [
  ],
})
export class NgxsStoreModule {

  constructor() {
  }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
