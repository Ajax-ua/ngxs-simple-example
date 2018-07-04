import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import {ApplicationService} from '../../core/services/application.service';
import {SessionService} from '../../core/services/session.service';

import {ClearTokenAction, LoginAction, LoginFailAction, LoginSuccessAction, LogoutAction, SetTokenAction} from './auth.actions';
import {LoginRequestAction} from '../requests/auth/login/login.actions';
import {ClearSelfDataAction, LoadSelfDataAction, SetSelfDataAction} from '../user/user.actions';


export interface AuthStateModel {
  isGuest: boolean;
  token: string;
}


@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isGuest: null,
    token: null,
  }
})
export class AuthState implements NgxsOnInit {

  constructor(
    private store: Store,
    private applicationService: ApplicationService,
    private sessionService: SessionService,
  ) {
  }
  
  ngxsOnInit(ctx: StateContext<AuthStateModel>) {
    const token = this.sessionService.getSessionToken();
    const action = token ? new LoadSelfDataAction(token) :  new ClearTokenAction();
    ctx.dispatch(action);
  }
  
  @Action(SetTokenAction)
  setToken(ctx: StateContext<AuthStateModel>, action: SetTokenAction) {
    ctx.patchState({
      token: action.payload,
      isGuest: false,
    });
    
    this.sessionService.setSessionToken(action.payload);
  
    if (action.redirectUrl) {
      return ctx.dispatch(new Navigate(action.redirectUrl));
    }
  }
  
  @Action(ClearTokenAction)
  clearToken(ctx: StateContext<AuthStateModel>, action: ClearTokenAction) {
    ctx.patchState({
      token: null,
      isGuest: true,
    });
    this.sessionService.removeSessionToken();
    return ctx.dispatch(new ClearSelfDataAction());
  }
  
  @Action(LoginAction)
  login(ctx: StateContext<AuthStateModel>, action: LoginAction) {
    ctx.dispatch(new LoginRequestAction(action.payload));
  }
  
  @Action(LoginSuccessAction)
  loginSuccess(ctx: StateContext<AuthStateModel>, action: LoginSuccessAction) {
    return ctx.dispatch([
      new SetTokenAction(action.payload.token.id, ['/home']),
      new SetSelfDataAction(action.payload.user),
    ]);
  }
  
  @Action(LoginFailAction)
  loginFail(ctx: StateContext<AuthStateModel>, action: LoginFailAction) {
    this.applicationService.showToastr(action.payload.message);
  }
  
  @Action(LogoutAction)
  logout(ctx: StateContext<AuthStateModel>, action: LogoutAction) {
    return ctx.dispatch([
      new ClearTokenAction(),
      new Navigate(['/', 'login']),
    ]);
  }

}
