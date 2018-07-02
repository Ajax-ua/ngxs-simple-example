import {Injectable} from '@angular/core';

import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {ConfigStateModel} from './config.state';

@Injectable({
  providedIn: 'root',
})
export class ConfigGetterState {
  
  @Selector()
  static getTimezones(state: ConfigStateModel): any[] {
    return state.timezones;
  }

  constructor(
  ) {}
}
