import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {ApplicationService} from '../../core/services/application.service';

import {LoadConfigAction, LoadConfigFailAction, LoadConfigSuccessAction} from './config.actions';
import {ConfigGetRequestAction} from '../requests/config/config-get/config-get.actions';


export interface ConfigStateModel {
  timezones: any[];
}

@State<ConfigStateModel>({
  name: 'config',
  defaults: {
    timezones: null,
  }
})
export class ConfigState implements NgxsOnInit {
  
  //@Selector()
  //static getTimezones(state: ConfigStateModel): any[] {
  //  return state.timezones;
  //}

  constructor(
    private store: Store,
    private applicationService: ApplicationService,
  ) {}
  
  ngxsOnInit(ctx: StateContext<ConfigStateModel>) {
    //ctx.dispatch(new LoadConfigAction());
  }
  
  @Action(LoadConfigAction)
  loadConfig(ctx: StateContext<ConfigStateModel>, action: LoadConfigAction) {
    ctx.dispatch(new ConfigGetRequestAction());
  }
  
  @Action(LoadConfigSuccessAction)
  loadConfigSuccess(ctx: StateContext<ConfigStateModel>, action: LoadConfigSuccessAction) {
    ctx.patchState({
      timezones: action.payload.timezones,
    });
  }
  
  @Action(LoadConfigFailAction)
  loadConfigFail(ctx: StateContext<ConfigStateModel>, action: LoadConfigFailAction) {
    this.applicationService.showToastr(action.payload.message.message);
  }

}
