import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import {ApplicationService, AuthService, SessionService} from '../../core/services';

import {ClearTokenAction, LoginAction, LoginFailAction, LoginSuccessAction, SetTokenAction} from './auth.actions';
import {LoginRequestAction} from '../requests/auth/login/login.actions';


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
    private authService: AuthService,
    private sessionService: SessionService,
  ) {}
  
  ngxsOnInit(ctx: StateContext<AuthStateModel>) {
    //ctx.dispatch(new LoadConfigAction());
  }
  
  @Action(SetTokenAction)
  setToken(ctx: StateContext<AuthStateModel>, action: SetTokenAction) {
    ctx.patchState({
      token: action.payload,
      isGuest: false,
    });
    
    this.sessionService.setSessionToken(action.payload);
  
    if (action.redirectUrl) {
      ctx.dispatch(new Navigate(action.redirectUrl));
    }
  }
  
  @Action(ClearTokenAction)
  clearToken(ctx: StateContext<AuthStateModel>, action: ClearTokenAction) {
    ctx.patchState({
      token: null,
      isGuest: true,
    });
  }
  
  @Action(LoginAction)
  login(ctx: StateContext<AuthStateModel>, action: LoginAction) {
    ctx.dispatch(new LoginRequestAction(action.payload));
  }
  
  @Action(LoginSuccessAction)
  loginSuccess(ctx: StateContext<AuthStateModel>, action: LoginSuccessAction) {
    //ctx.patchState({
    //  token: action.payload.token,
    //});
    ctx.dispatch(new SetTokenAction(action.payload.token.id, ['/']));
  }
  
  @Action(LoginFailAction)
  loginFail(ctx: StateContext<AuthStateModel>, action: LoginFailAction) {
    this.applicationService.showToastr(action.payload.message);
  }

}
