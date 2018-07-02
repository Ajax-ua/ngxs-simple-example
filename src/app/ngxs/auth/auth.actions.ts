const ActionTypes = {
  SET_TOKEN: `[Auth] Set Token`,
  CLEAR_TOKEN: `[Auth] Clear Token`,
  
  SET_GUEST_IS_TRUE: `[Auth] Set Guest Is True`,
  SET_GUEST_IS_FALSE: `[Auth] Set Guest Is False`,
  
  LOGOUT: `[Auth] Logout`,
  
  SIGNUP: '[Auth] SignUp',
  SIGNUP_SUCCESS: '[Auth] SignUp Success',
  SIGNUP_FAIL: '[Auth] SignUp Fail',
  
  LOGIN: '[Auth] Login',
  LOGIN_SUCCESS: '[Auth] Login Success',
  LOGIN_FAIL: '[Auth] Login Fail',
};


export class SetTokenAction {
  static type = ActionTypes.SET_TOKEN;
  
  constructor(public payload?: string, public redirectUrl: string[] = null) {
  }
}

export class ClearTokenAction {
  static type = ActionTypes.CLEAR_TOKEN;
  
  constructor(public payload?: string) {
  }
}

export class SetGuestIsTrueAction {
  static type = ActionTypes.SET_GUEST_IS_TRUE;
  
  constructor(public payload?: string) {
  }
}
export class SetGuestIsFalseAction {
  static type = ActionTypes.SET_GUEST_IS_FALSE;
  
  constructor(public payload?: string) {
  }
}


export class LogoutAction {
  static type = ActionTypes.LOGOUT;
  
  constructor(public payload?: any) {
  }
}

export class SignUpAction {
  static type = ActionTypes.SIGNUP;
  
  constructor(public payload?: any) {
  }
}

export class SignUpSuccessAction {
  static type = ActionTypes.SIGNUP_SUCCESS;
  
  constructor(public payload?: any) {
  }
}

export class SignUpFailAction {
  static type = ActionTypes.SIGNUP_FAIL;
  
  constructor(public payload?: any) {
  }
}


export class LoginAction {
  static type = ActionTypes.LOGIN;
  
  constructor(public payload?: any) {
  }
}

export class LoginSuccessAction {
  static type = ActionTypes.LOGIN_SUCCESS;
  
  constructor(public payload?: any) {
  }
}

export class LoginFailAction {
  static type = ActionTypes.LOGIN_FAIL;
  
  constructor(public payload?: any) {
  }
}