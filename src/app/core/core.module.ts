/* tslint:disable:member-ordering no-unused-variable */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Restangular, RestangularModule } from 'ngx-restangular';

import {
  //CustomSerializer,
  RESTANGULAR_CONFIG,
  RestangularEventTokenAuth,
  RestangularEventTokenAuthFactory,
} from '../app.config';

import { SessionService } from './services';
import {NgxsStoreModule} from '../ngxs/ngxs.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    HttpClientModule,
  
    NgxsStoreModule,
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
