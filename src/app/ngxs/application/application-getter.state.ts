import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';
import {Injectable} from '@angular/core';

import {ApplicationState, ApplicationStateModel} from './application.state';


//@Injectable({
//  providedIn: 'root',
//})
export class ApplicationGetterState {

  constructor() {
  }

  @Selector([ApplicationState])
  static getAppWidth(state: ApplicationStateModel): number {
    return state.appWidth;
  }

  @Selector([ApplicationState])
  static getIsMobile(state: ApplicationStateModel): boolean {
    return state.appWidth < 1140;
  }

  @Selector([ApplicationState])
  static getIsDesktop(state: ApplicationStateModel): boolean {
    return state.appWidth > 1139;
  }

}
