export class ConfigGetRequestAction {
  static type = '[Requests] Config Get';
  constructor() {}
}

export class ConfigGetRequestSuccessAction {
  static type = '[Requests] Config Get Success';
  constructor(public payload: any) {}
}

export class ConfigGetRequestFailAction {
  static type = '[Requests] Config Get Fail';
  constructor(public payload: any) {}
}

