import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {ConfigGetState} from './config/config-get/config-get.state';
import {LoginState} from './auth/login/login.state';
import {UserGetState} from './user/user-get/user-get.state';


export interface RequestsStateModel {
}

@State<RequestsStateModel>({
  name: 'requests',
  defaults: {},
  children: [
    ConfigGetState,
    LoginState,
    UserGetState,
  ],
})
export class RequestsState {

  constructor(private store: Store) {
  }
}
