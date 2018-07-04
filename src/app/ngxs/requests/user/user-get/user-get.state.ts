import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';
//import { Navigate } from '@ngxs/router-plugin';

import {catchError, map, take, tap} from 'rxjs/operators';

import {UserService} from '../../../../core/services';

import {
  UserGetRequestAction,
  UserGetRequestFailAction,
  UserGetRequestSuccessAction,
} from './user-get.actions';
import {IRequestsNestedState} from '../../requests.interface';
import {LoadSelfDataFailAction, LoadSelfDataSuccessAction} from '../../../user/user.actions';


export interface UserGetStateModel extends IRequestsNestedState {
}

@State<UserGetStateModel>({
  name: 'userGetState',
  defaults: {
    loading: false,
    loaded: false,
    status: '',
    data: null,
  }
})
export class UserGetState implements NgxsOnInit {

  constructor(
    private store: Store,
    private userService: UserService,
  ) {}
  
  ngxsOnInit(ctx: StateContext<UserGetStateModel>) {
  }
  
  @Action(UserGetRequestAction)
  loginRequest(ctx: StateContext<UserGetStateModel>, action: UserGetRequestAction) {
    ctx.patchState({
      loading: true,
      loaded: false,
      status: '',
      data: null,
    });
    return this.userService.loadSelfDataRequest(action.payload).pipe(
      tap((res: any) => {
        ctx.dispatch(new UserGetRequestSuccessAction(res, action.redirect));
      }),
      catchError(error => {
        return ctx.dispatch(new UserGetRequestFailAction(error));
      }),
    );
  }
  
  @Action(UserGetRequestSuccessAction)
  loginRequestSuccess(ctx: StateContext<UserGetStateModel>, action: UserGetRequestSuccessAction) {
    ctx.patchState({
      loading: false,
      loaded: true,
      status: 'success',
      data: action.payload.data || action.payload,
    });
    ctx.dispatch(new LoadSelfDataSuccessAction(action.payload, action.redirect));
  }
  
  @Action(UserGetRequestFailAction)
  loginRequestFail(ctx: StateContext<UserGetStateModel>, action: UserGetRequestFailAction) {
    ctx.patchState({
      loading: false,
      loaded: true,
      status: action.payload.status,
      data: action.payload.data,
    });
    ctx.dispatch(new LoadSelfDataFailAction(action.payload.data));
  }
  
}
