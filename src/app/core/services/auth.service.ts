import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
//import { Store } from '@ngrx/store';
import {Select, Store} from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import {filter, map, shareReplay} from 'rxjs/operators';
import {ClearTokenAction, LoginAction} from '../../ngxs/auth/auth.actions';
import {AuthGetterState} from '../../ngxs/auth/auth-getter.state';

//import { ApplicationService } from './application.service';

//import * as appState from '../../ngrx/state/app.state';
//import * as auth from '../../ngrx/auth/states/auth-getter.state';
//import * as authRequestActions from '../../ngrx/requests/nested-states/auth/actions';
//import * as authActions from '../../ngrx/auth/actions/auth.actions';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl: string;

  //authToken$: Observable<string> = this.store.select(auth.getToken);
  //isGuest$: Observable<boolean> = this.store.select(auth.getIsGuest).pipe(filter((isGuest) => isGuest !== null));
  //isLogined$: Observable<boolean> = this.isGuest$.pipe(map(isGuest => !isGuest));
  
  @Select(AuthGetterState.getIsGuest)
  isGuestFromStore$: Observable<boolean>;
  
  @Select(AuthGetterState.getToken)
  authToken$: Observable<string>;
  
  isGuest$: Observable<boolean> = this.isGuestFromStore$.pipe(filter((isGuest) => isGuest !== null));
  isLogined$: Observable<boolean> = this.isGuest$.pipe(map(isGuest => !isGuest));


  constructor(
    //private store: Store<appState.IAppState>,
    private store: Store,
    private restangular: Restangular,
    //private applicationService: ApplicationService,
  ) {
  }
  
  clearToken() {
    this.store.dispatch(new ClearTokenAction());
  }
  
  //signUp(user) {
  //  this.store.dispatch(new authActions.SignUpAction(user));
  //}
  
  signUpRequest(payload: any) {
    return this.restangular
    .all('users')
    .all('signup')
    .post(payload);
  }
  
  //logout() {
  //  this.store.dispatch(new authActions.LogoutAction);
  //}
  
  login(data): void {
    this.store.dispatch(new LoginAction(data));
  }
  
  loginRequest(payload: any) {
    return this.restangular
    .all('users')
    .all('signin')
    .post(payload);
  }
}
