import {Injectable} from '@angular/core';

import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {UserGetStateModel} from './user-get.state';

@Injectable({
  providedIn: 'root',
})
export class UserGetGetterState {
  
  @Selector()
  static getUserGetRequestState(state: UserGetStateModel): UserGetStateModel {
    return state;
  }

  constructor(
  ) {}
}
