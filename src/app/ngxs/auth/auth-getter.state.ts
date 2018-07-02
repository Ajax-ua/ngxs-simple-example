import {Injectable} from '@angular/core';

import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {AuthStateModel} from './auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGetterState {
  
  @Selector()
  static getToken(state: AuthStateModel): string {
    return state.token;
  }
  
  @Selector()
  static getIsGuest(state: AuthStateModel): boolean {
    return state.isGuest;
  }

  constructor(
  ) {}
}
