import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
//import { Store } from '@ngrx/store';
import {Select, Selector, Store} from '@ngxs/store';
import { Observable } from 'rxjs';
import { skipWhile, map } from 'rxjs/internal/operators';
import * as _ from 'lodash';

import {LoadConfigAction} from '../../ngxs/config/config.actions';
import {ConfigState, ConfigStateModel} from '../../ngxs/config/config.state';
import {ConfigGetterState} from '../../ngxs/config/config-getter.state';
import {ConfigGetState} from '../../ngxs/requests/config/config-get/config-get.state';
import {ConfigGetGetterState} from '../../ngxs/requests/config/config-get/config-get-getter.state';
//import * as appState from '../../ngrx/state/app.state';
//import * as configState from '../../ngrx/config/states';
//import * as configGetter from '../../ngrx/config/states/config-getter.state';
//import * as configActions from '../../ngrx/config/actions';


@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  //configState$: Observable<configState.IConfigState> = this.store.select(configGetter.getConfigState);
  

  //timezones$: Observable<any> = this.store.select(configGetter.getTimezones).pipe(
  //  skipWhile(res => !res),
  //);
  //defaultTimezone$: Observable<any> = this.timezones$.pipe(map(timezones => _.find(timezones, {default: true})));\
  
  @Select(ConfigGetterState.getTimezones)
  timezones$: Observable<any[]>;
  
  @Select(ConfigGetGetterState.getTimezonesGetRequestState)
  getTimezonesGetRequestState$: Observable<any>;
  
  constructor(
    //private store: Store<appState.IAppState>,
    private restangular: Restangular,
    private store: Store,
  ) {
  }

  configRequest() {
    return this.restangular.all('config').customGET();
  }

  loadConfig() {
    this.store.dispatch(new LoadConfigAction());
    return this.getTimezonesGetRequestState$.pipe(skipWhile((res: any) => !!_.find(res, null)));
  }

}
