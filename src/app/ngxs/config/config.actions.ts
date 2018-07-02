export class LoadConfigAction {
  static type = '[Config] Load Config';
  constructor() {}
}

export class LoadConfigSuccessAction {
  static type = '[Config] Load Config Success';
  constructor(public payload: any) {}
}

export class LoadConfigFailAction {
  static type = '[Config] Load Config Fail';
  constructor(public payload: any) {}
}

