import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import {ApplicationService} from '../../core/services/application.service';
import {AuthService} from '../../core/services/auth.service';
import {SessionService} from '../../core/services/session.service';
import {
  ClearSelfDataAction,
  LoadSelfDataAction,
  LoadSelfDataFailAction,
  LoadSelfDataSuccessAction,
  SetSelfDataAction
} from './user.actions';
import {UserGetRequestAction} from '../requests/user/user-get/user-get.actions';
import {ClearTokenAction, SetTokenAction} from '../auth/auth.actions';

export interface UserStateModel {
  entities: any;
  ids: string[];
  selfDataId: string;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    entities: {},
    ids: [],
    selfDataId: null,
  }
})
export class UserState implements NgxsOnInit {

  constructor(
    private store: Store,
    private applicationService: ApplicationService,
    private authService: AuthService,
    private sessionService: SessionService,
  ) {}
  
  ngxsOnInit(ctx: StateContext<UserStateModel>) {
  }
  
  @Action(SetSelfDataAction)
  setSelfData(ctx: StateContext<UserStateModel>, action: SetSelfDataAction) {
    const user = {...action.payload};
    user.id = user._id;
    ctx.patchState({
      selfDataId: user.id,
      ids: [user.id],
      entities: {[user.id]: user},
    });
  }
  
  @Action(ClearSelfDataAction)
  clearSelfData(ctx: StateContext<UserStateModel>, action: ClearSelfDataAction) {
    ctx.patchState({
      selfDataId: null,
    });
  }
  
  @Action(LoadSelfDataAction)
  loadSelfData(ctx: StateContext<UserStateModel>, action: LoadSelfDataAction) {
    ctx.dispatch(new UserGetRequestAction(action.payload, action.redirect));
  }

  @Action(LoadSelfDataSuccessAction)
  loadSelfDataSuccess(ctx: StateContext<UserStateModel>, action: LoadSelfDataSuccessAction) {
    //ctx.patchState({
    //  token: action.payload.token,
    //});
    ctx.dispatch([
      new SetTokenAction(this.sessionService.getSessionToken()),
      new SetSelfDataAction(action.payload),
    ]);
  }

  @Action(LoadSelfDataFailAction)
  loadSelfDataFail(ctx: StateContext<UserStateModel>, action: LoadSelfDataFailAction) {
    this.applicationService.showToastr(action.payload.message);
    ctx.dispatch(new ClearTokenAction());
  }

}
