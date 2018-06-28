import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEqualValidator][formControlName],[appEqualValidator][formControl],[appEqualValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true },
  ],
})
export class EqualValidatorDirective implements Validator {
  constructor(
    @Attribute('equalValidator') public validateEqual: string,
    @Attribute('reverse') public reverse: string,
  ) {
  }

  private get isReverse() {
    return this.reverse === '';
  }

  validate(c: AbstractControl): { [key: string]: any } {
    // self value
    const v = c.value;

    // control value
    const e = c.root.get(this.validateEqual);

    // value not equal
    if (e && v !== e.value && !this.isReverse) {
      return {
        equalValidator: false,
      };
    }

    // value equal and reverse
    if (e && v === e.value && this.isReverse) {
      delete e.errors['equalValidator'];
      if (!Object.keys(e.errors).length) {
        e.setErrors(null);
      }
    }

    // value not equal and reverse
    if (e && v !== e.value && this.isReverse) {
      e.setErrors({
        equalValidator: false,
      });
    }

    return null;
  }
}
