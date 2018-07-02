export class LoginRequestAction {
  static type = '[Requests] Login';
  constructor(public payload: any) {console.log(333)}
}

export class LoginRequestSuccessAction {
  static type = '[Requests] Login Success';
  constructor(public payload: any) {}
}

export class LoginRequestFailAction {
  static type = '[Requests] Login Fail';
  constructor(public payload: any) {}
}

