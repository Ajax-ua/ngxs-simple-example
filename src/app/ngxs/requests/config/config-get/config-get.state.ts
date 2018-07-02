import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';
//import { Navigate } from '@ngxs/router-plugin';

import {catchError, map, take, tap} from 'rxjs/operators';

import {ConfigService} from '../../../../core/services';

import {ConfigGetRequestAction, ConfigGetRequestFailAction, ConfigGetRequestSuccessAction} from './config-get.actions';
import {IRequestsNestedState} from '../../requests.interface';
import {LoadConfigFailAction, LoadConfigSuccessAction} from '../../../config/config.actions';


export interface ConfigGetStateModel extends IRequestsNestedState{
}

@State<ConfigGetStateModel>({
  name: 'configGetState',
  defaults: {
    loading: false,
    loaded: false,
    status: '',
    data: null,
  }
})
export class ConfigGetState implements NgxsOnInit {

  constructor(
    private store: Store,
    private configService: ConfigService,
  ) {}
  
  ngxsOnInit(ctx: StateContext<ConfigGetStateModel>) {
  }
  
  @Action(ConfigGetRequestAction)
  configGetRequest(ctx: StateContext<ConfigGetStateModel>, action: ConfigGetRequestAction) {
    ctx.patchState({
      loading: true,
      loaded: false,
      status: '',
      data: null,
    });
    return this.configService.configRequest().pipe(
      tap((res: any) => {
        ctx.dispatch(new ConfigGetRequestSuccessAction(res));
      }),
      catchError(error => {
        return ctx.dispatch(new ConfigGetRequestFailAction(error));
      }),
    );
  }
  
  @Action(ConfigGetRequestSuccessAction)
  configGetRequestSuccess(ctx: StateContext<ConfigGetStateModel>, action: ConfigGetRequestSuccessAction) {
    ctx.patchState({
      loading: false,
      loaded: true,
      status: 'success',
      data: action.payload.data || action.payload,
    });
    ctx.dispatch(new LoadConfigSuccessAction(action.payload));
  }
  
  @Action(ConfigGetRequestFailAction)
  configGetRequestFail(ctx: StateContext<ConfigGetStateModel>, action: ConfigGetRequestFailAction) {
    ctx.patchState({
      loading: false,
      loaded: true,
      status: action.payload.status,
      data: action.payload.data,
    });
    ctx.dispatch(new LoadConfigFailAction(action.payload.data));
  }
  
}
