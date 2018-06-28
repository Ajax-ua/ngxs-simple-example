import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
  
  static MatchPassword(AC: AbstractControl) {
    const password = AC.get('password').value;
    const confirmPassword = AC.get('confirmPassword').value;

    if (password !== confirmPassword) {
      return {matchPassword: true};
    } else {
      return null;
    }
  }
}
