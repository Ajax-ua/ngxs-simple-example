import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
//import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { skipWhile, map } from 'rxjs/internal/operators';
import * as _ from 'lodash';

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
  //defaultTimezone$: Observable<any> = this.timezones$.pipe(map(timezones => _.find(timezones, {default: true})));

  constructor(
    //private store: Store<appState.IAppState>,
    private restangular: Restangular,
  ) {
  }

  configRequest() {
    return this.restangular.all('config').customGET();
  }

  getConfig() {
    //this.store.dispatch(new configActions.GetConfigAction());
    //return this.configState$.pipe(skipWhile((res: any) => !!_.find(res, null)));
  }

}
