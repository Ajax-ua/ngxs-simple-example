import {Injectable} from '@angular/core';

import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {ConfigGetStateModel} from './config-get.state';

@Injectable({
  providedIn: 'root',
})
export class ConfigGetGetterState {
  
  @Selector()
  static getTimezonesGetRequestState(state: ConfigGetStateModel): ConfigGetStateModel {
    return state;
  }

  constructor(
  ) {}
}
