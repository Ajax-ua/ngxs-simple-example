import { Inject, Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
//import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMapTo, filter, pluck, skipWhile } from 'rxjs/internal/operators';

import { UserModel } from '../models';
import {Select, Store} from '@ngxs/store';
//import { PAGE_LIMITS } from '../constants/page-limits.const';

//import { IRequestsNestedState } from '../../ngrx/requests/states';
//import * as appState from '../../ngrx/state/app.state';
//import * as user from '../../ngrx/user/states/user-getter.state';
//import * as userActions from '../../ngrx/user/actions/user.actions';
//import * as userRequestActions from '../../ngrx/requests/nested-states/users/actions';
//import * as usersGetRequestState from '../../ngrx/requests/nested-states/users/nested-states/users-get/states/users-get-getter.state';
//import * as profile from '../../ngrx/profile/states/profile-getter.state';
//import * as profileActions from '../../ngrx/profile/actions/profile.actions';

import {LoadSelfDataAction} from '../../ngxs/user/user.actions';
import {UserGetterState} from '../../ngxs/user/user-getter.state';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  //userState$: Observable<any> = this.store.select(user.getUserState);
  //
  //users$: Observable<UserModel[]> = this.store.select(user.getUsers);
  //adminUsers$: Observable<UserModel[]> = this.store.select(user.getAdminUsers);
  //
  //selfData$: Observable<UserModel> = this.store.select(user.getSelfData);
  //selfProfile$: Observable<UserModel> = this.store.select(profile.getMyProfile);
  //fullSelfData$: Observable<UserModel> = this.store.select(user.getFullSelfData);
  //
  //emailForSave$: Observable<any> = this.store.select(profile.getEmailForSave);
  //
  //usersGetRequestState$: Observable<IRequestsNestedState> = this.store.select(usersGetRequestState.getUsersGetState);
  //usersGetRequestHeaders$: Observable<any> = this.usersGetRequestState$.pipe(pluck('headers'));
  
  @Select(UserGetterState.getSelfData)
  selfData$: Observable<UserModel>;

  constructor(
    private store: Store,
    private restangular: Restangular,
    //@Inject(PAGE_LIMITS) private pageLimits: any,
  ) {
  }
  
  loadSelfData(token) {
    this.store.dispatch(new LoadSelfDataAction(token));
  }
  
  loadSelfDataRequest(token) {
    return this.restangular
      .one('users', token)
      .get();
  }

  loadMyProfile() {
    //this.store.dispatch(new profileActions.LoadMyProfileAction());

    //return this.selfProfile$.pipe(skipWhile(res => !res));
  }

  loadMyProfileRequest() {
    return this.restangular
      .one('profiles')
      .customGET();
  }
}
