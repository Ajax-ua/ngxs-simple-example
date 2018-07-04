import {Injectable} from '@angular/core';

import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {UserState, UserStateModel} from './user.state';

@Injectable({
  providedIn: 'root',
})
export class UserGetterState {
  
  @Selector([UserState])
  static getSelfData(state: UserStateModel): string {
    return state.entities[state.selfDataId];
  }

  constructor(
  ) {}
}
