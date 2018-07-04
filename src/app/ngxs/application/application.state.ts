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
