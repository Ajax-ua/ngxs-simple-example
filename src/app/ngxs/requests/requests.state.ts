import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {ConfigGetState} from './config/config-get/config-get.state';
import {LoginState} from './auth/login/login.state';


export interface RequestsStateModel {
}

@State<RequestsStateModel>({
  name: 'requests',
  defaults: {},
  children: [
    ConfigGetState,
    LoginState,
  ],
})
export class RequestsState implements NgxsOnInit {

  constructor(private store: Store) {
  }

  ngxsOnInit(ctx: StateContext<RequestsStateModel>) {
  }
}
