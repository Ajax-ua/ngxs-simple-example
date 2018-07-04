export const ActionTypes = {
  SET_SELF_DATA: `[User] Set Self Data`,
  CLEAR_SELF_DATA: `[User] Clear Self Data`,
  
  LOAD_SELF_DATA: '[User] Load Self Data',
  LOAD_SELF_DATA_SUCCESS: '[User] Load Self Data Success',
  LOAD_SELF_DATA_FAIL: '[User] Load Self Data Fail',
};

export class SetSelfDataAction {
  static type = ActionTypes.SET_SELF_DATA;
  
  constructor(public payload?: any) {
  }
}
export class ClearSelfDataAction {
  static type = ActionTypes.CLEAR_SELF_DATA;
  
  constructor(public payload?: string) {
  }
}
export class LoadSelfDataAction {
  static type = ActionTypes.LOAD_SELF_DATA;
  
  constructor(public payload?: any, public redirect: boolean = false) {
  }
}
export class LoadSelfDataSuccessAction {
  static type = ActionTypes.LOAD_SELF_DATA_SUCCESS;
  
  constructor(public payload?: any, public redirect?: any) {
  }
}
export class LoadSelfDataFailAction {
  static type = ActionTypes.LOAD_SELF_DATA_FAIL;
  
  constructor(public payload?: any) {
  }
}
