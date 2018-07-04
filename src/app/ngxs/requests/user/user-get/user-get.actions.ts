export class UserGetRequestAction {
  static type = '[Requests] User Get';
  constructor(public payload: any, public redirect?: boolean) {}
}

export class UserGetRequestSuccessAction {
  static type = '[Requests] User Get Success';
  constructor(public payload: any, public redirect?: boolean) {}
}

export class UserGetRequestFailAction {
  static type = '[Requests] User Get Fail';
  constructor(public payload: any) {}
}

