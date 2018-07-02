import { Inject, Injectable } from '@angular/core';
import { LocationStrategy } from '@angular/common';

//import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import * as _ from 'lodash';
import { Restangular } from 'ngx-restangular';
import {Select, Store} from '@ngxs/store';

import {ApplicationState} from '../../ngxs/application/application.state';
import {UpdateAppWidthAction} from '../../ngxs/application/application.actions';

//import * as appState from '../../ngrx/state/app.state';
//import * as application from '../../ngrx/application/states';
//import * as applicationGetter from '../../ngrx/application/states/application-getter.state';
//import * as requestStatusGetter from '../../ngrx/application/states/application-request-status-getter.state';
//import * as applicationActions from '../../ngrx/application/actions';


@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  //applicationState$: Observable<application.IApplicationState> = this.store.select(applicationGetter.getApplicationState);

  //isShownSpinner$: Observable<boolean> = this.store.select(requestStatusGetter.getShowRequestsSpinner);
  //isDesktop$: Observable<boolean> = this.store.select(applicationGetter.getIsDesktop);
  //isMobile$: Observable<boolean> = this.store.select(applicationGetter.getIsMobile);
  //isOpenLeftMenu$: Observable<boolean> = this.store.select(applicationGetter.getShowLeftSidenav);
  //isOpenUserMenu$: Observable<boolean> = this.store.select(applicationGetter.getShowUserMenu);
  //isShownHeader$: Observable<boolean> = this.store.select(applicationGetter.getShowHeader);
  //isOpenAddEventModal$: Observable<boolean> = this.store.select(applicationGetter.getIsOpenAddEventModal);

  //appMetric$: Observable<MetricModel> = this.store.select(applicationGetter.getMetric);
  
  
  @Select(ApplicationState.getAppWidth)
  appWidth$: Observable<number>;
  
  @Select(ApplicationState.getIsDesktop)
  isDesktop$: Observable<boolean>;

  server: string = this.locationStrategy['_platformLocation'].location.origin;

  constructor(
    //private store: Store<appState.IAppState>,
    private store: Store,
    private locationStrategy: LocationStrategy,
    private restangular: Restangular,
    //@Inject(VALIDATION) public validation,
  ) {
  }

  updateAppWidth(width) {
    //this.store.dispatch(new applicationActions.UpdateAppWidthAction(width));
    this.store.dispatch(new UpdateAppWidthAction(width));
  }
  
  showToastr(msg) {
    if (!msg || msg === '') {
      return;
    }

    msg = [].concat(msg);
    msg = msg.map(message => {
      return {
        severity: 'success',
        summary: '',
        detail: message,
      };
    });
    
    //this.messageService.addAll(msg);
    alert(msg)
  }
  
  showErrorToastr(msg) {
    msg = _.uniq([].concat(msg));
    msg = msg.map(message => {
      return {
        severity: 'error',
        summary: '',
        detail: message,
      };
    });
    
    //this.messageService.addAll(msg);
    alert(msg)
  }
}
