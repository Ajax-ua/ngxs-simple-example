/* tslint:disable:member-ordering no-unused-variable */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

//import { StoreModule } from '@ngrx/store';
//import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { EffectsModule } from '@ngrx/effects';
import { Restangular, RestangularModule } from 'ngx-restangular';

import { SessionService } from './services';
//import { AppReducers, metaReducers } from '../ngrx';
import {ApplicationState} from '../ngxs/application/application.state';

import {
  //CustomSerializer,
  RESTANGULAR_CONFIG,
  RestangularEventTokenAuth,
  RestangularEventTokenAuthFactory,
} from '../app.config';
import { environment } from '../../environments/environment';

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
  //OrganizationEffects,
  //RouterEffects,
  //InviteEffects,
  //MemberEffects,
  //EventEffects,
  //
  //requestEffects.LoginEffects,
  //requestEffects.OrganizationDeleteEffects,
  //requestEffects.RegistrationEffects,
  //requestEffects.MembersPostEffects,
  //requestEffects.InvitesGetEffects,
  //requestEffects.ResendInviteEffects,
  //requestEffects.ChangePasswordEffects,
  //requestEffects.ConfigGetEffects,
  //requestEffects.UsersPutEffects,
  //requestEffects.OrganizationGetEffects,
  //requestEffects.OrganizationsPostEffects,
  //requestEffects.OrganizationsGetEffects,
  //requestEffects.ProfilesGetEffects,
  //requestEffects.UpdateAdminStatusEffects,
  //requestEffects.ProfilesPostEffects,
  //requestEffects.UsersGetEffects,
  //requestEffects.UserGetEffects,
  //requestEffects.ResetPasswordConfirmEffects,
  //requestEffects.ResetPasswordRequestEffects,
  //requestEffects.EventsPostEffects,
  //requestEffects.EventsGetEffects,
  //requestEffects.AliasEventGetEffects,
  //requestEffects.EventGetEffects,
  //requestEffects.EventDeleteEffects,
  //requestEffects.PastEventsGetEffects,
  //requestEffects.NextEventEffects,
  //requestEffects.EventMembersPostEffects,
  //requestEffects.ResendMemberEmailEffects,
  //requestEffects.MembersGetEffects,
  //requestEffects.MemberEventsGetEffects,
  //requestEffects.MemberDeleteEffects,
  //requestEffects.OrganizationMemberDeleteEffects,
  //requestEffects.OrganizationEventsMemberDeleteEffects,
  //requestEffects.MemberPatchEffects,
  //requestEffects.EventMembersGetEffects,
  //requestEffects.EventMembersCountGetEffects,
  //requestEffects.ChecklistAuthEffects,
  //requestEffects.OrganizationMemberGetEffects,
  //requestEffects.MemberGetEffects,
  //requestEffects.MetricEffects,
  //requestEffects.UserOrganizationsGetEffects,
];

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    HttpClientModule,
  
  
    NgxsModule.forRoot([
      ApplicationState
    ]),
  
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    //StoreModule.forRoot(AppReducers, { metaReducers }),
    //StoreRouterConnectingModule,
    //!environment.production
    //  ? StoreDevtoolsModule.instrument({maxAge: 10})
    //  : [],
    //EffectsModule.forRoot(effects),

    RestangularModule.forRoot(
      [
        SessionService,
      ],
      RESTANGULAR_CONFIG,
    ),
  ],
  declarations: [],
  providers: [
    //{ provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: RestangularEventTokenAuth, useFactory:  RestangularEventTokenAuthFactory, deps: [Restangular, SessionService] },
  ],
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
