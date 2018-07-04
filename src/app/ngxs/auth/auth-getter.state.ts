import {Injectable} from '@angular/core';

import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {AuthState, AuthStateModel} from './auth.state';

//@Injectable({
//  providedIn: 'root',
//})
export class AuthGetterState {
  
  @Selector([AuthState])
  static getToken(state: AuthStateModel): string {
    return state.token;
  }
  
  @Selector([AuthState])
  static getIsGuest(state: AuthStateModel): boolean {
    return state.isGuest;
  }

  constructor(
  ) {}
}
