import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';
//import { Navigate } from '@ngxs/router-plugin';

import {catchError, map, take, tap} from 'rxjs/operators';

import {AuthService} from '../../../../core/services';

import {
  LoginRequestAction,
  LoginRequestFailAction,
  LoginRequestSuccessAction,
} from './login.actions';
import {IRequestsNestedState} from '../../requests.interface';
import {LoginFailAction, LoginSuccessAction} from '../../../auth/auth.actions';


export interface LoginStateModel extends IRequestsNestedState {
}

@State<LoginStateModel>({
  name: 'loginState',
  defaults: {
    loading: false,
    loaded: false,
    status: '',
    data: null,
  }
})
export class LoginState implements NgxsOnInit {

  constructor(
    private store: Store,
    private authService: AuthService,
  ) {}
  
  ngxsOnInit(ctx: StateContext<LoginStateModel>) {
  }
  
  @Action(LoginRequestAction)
  loginRequest(ctx: StateContext<LoginStateModel>, action: LoginRequestAction) {
    ctx.patchState({
      loading: true,
      loaded: false,
      status: '',
      data: null,
    });
    return this.authService.loginRequest(action.payload).pipe(
      tap((res: any) => {
        ctx.dispatch(new LoginRequestSuccessAction(res));
      }),
      catchError(error => {
        return ctx.dispatch(new LoginRequestFailAction(error));
      }),
    );
  }
  
  @Action(LoginRequestSuccessAction)
  loginRequestSuccess(ctx: StateContext<LoginStateModel>, action: LoginRequestSuccessAction) {
    ctx.patchState({
      loading: false,
      loaded: true,
      status: 'success',
      data: action.payload.data || action.payload,
    });
    ctx.dispatch(new LoginSuccessAction(action.payload));
  }
  
  @Action(LoginRequestFailAction)
  loginRequestFail(ctx: StateContext<LoginStateModel>, action: LoginRequestFailAction) {
    ctx.patchState({
      loading: false,
      loaded: true,
      status: action.payload.status,
      data: action.payload.data,
    });
    ctx.dispatch(new LoginFailAction(action.payload.data));
  }
  
}
