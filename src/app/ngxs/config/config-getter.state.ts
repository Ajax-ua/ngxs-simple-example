import {Injectable} from '@angular/core';

import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {ConfigState, ConfigStateModel} from './config.state';

@Injectable({
  providedIn: 'root',
})
export class ConfigGetterState {
  
  @Selector([ConfigState])
  static getTimezones(state: ConfigStateModel): any[] {
    return state.timezones;
  }

  constructor(
  ) {}
}
