import {Injectable} from '@angular/core';

import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {LoginStateModel} from './login.state';

@Injectable({
  providedIn: 'root',
})
export class LoginGetterState {
  
  //@Selector()
  //static getTimezonesGetRequestState(state: ConfigGetStateModel): ConfigGetStateModel {
  //  return state;
  //}

  constructor(
  ) {}
}
