import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { filter } from 'rxjs/operators';

import { PasswordValidation } from '../../shared/validators/password-validator';
//import { AuthService } from '../../core/services';
import { UserModel } from '../../core/models';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  subscribers: any = {};
  user: UserModel;
  form: FormGroup;
  showErrorsIfSubmitted: boolean;

  errors: any;

  constructor(
    //private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.showErrorsIfSubmitted = false;
    this.user = new UserModel();

    this.setErrors();
    this.form = new FormGroup({
      email: new FormControl('', {
        validators: [
          Validators.required,
        ],
        updateOn: 'blur',
      }),
      captcha: new FormControl('', {
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(7),
        ],
        updateOn: 'blur',
      }),
      confirmPassword: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(7),
        ],
        updateOn: 'blur',
      }),
    }, {
      validators: PasswordValidation.MatchPassword,
    });
  }

  get emailGroup() {
    return this.form.get('email');
  }

  get captchaGroup() {
    return this.form.get('captcha');
  }

  get passwordGroup() {
    return this.form.get('password');
  }

  get confirmPasswordGroup() {
    return this.form.get('confirmPassword');
  }

  recaptchaResponse(event) {
    this.form.patchValue({captcha: event.response});
  }

  onSubmit() {
    this.showErrorsIfSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    //this.authService.signUp(this.form.value);
  }

  setErrors() {
    this.errors = {
      email: [
        {name: 'required', text: 'Email is required'},
        {name: 'pattern', text: 'Email is invalid'},
      ],
      password: [
        {name: 'required', text: 'Password is required'},
        {name: 'pattern', text: 'Password has to contain one capital letter, one lowercase letter and a number'},
        {name: 'minlength', text: 'Min length is 7 symbols'},
      ],
      confirmPassword: [
        {name: 'required', text: 'Confirm Password is required'},
        {name: 'pattern', text: 'Password has to contain one capital letter, one lowercase letter and a number'},
        {name: 'minlength', text: 'Min length is 7 symbols'},
        {name: 'matchPassword', text: 'Passwords do not match', parent: true},
      ],
      captcha: [
        {name: 'required', text: 'Captcha is required'},
      ],
    };
  }
  
}
