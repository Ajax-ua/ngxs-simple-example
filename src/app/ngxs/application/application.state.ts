import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {UpdateAppWidthAction} from './application.actions';


export interface ApplicationStateModel {
  appWidth: number;
}

@State<ApplicationStateModel>({
  name: 'application',
  defaults: {
    appWidth: 0,
  }
})
export class ApplicationState implements NgxsOnInit {

  constructor(private store: Store) {
  }

  @Selector()
  static getAppWidth(state: ApplicationStateModel): number {
    return state.appWidth;
  }

  @Selector()
  static getIsMobile(state: ApplicationStateModel): boolean {
    return state.appWidth < 1140;
  }

  @Selector()
  static getIsDesktop(state: ApplicationStateModel): boolean {
    return state.appWidth > 1139;
  }

  ngxsOnInit(ctx: StateContext<ApplicationStateModel>) {
    //ctx.dispatch(new UpdateAppWidthAction());
  }

  @Action(UpdateAppWidthAction)
  updateAppWidth(ctx: StateContext<ApplicationStateModel>, action: UpdateAppWidthAction) {
    ctx.patchState({
      appWidth: action.appWidth
    });
  }

}
