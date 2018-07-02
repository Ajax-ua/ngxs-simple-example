import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/services';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  showErrorsIfSubmitted: boolean;
  
  errors: any;
  
  constructor(
    private authService: AuthService,
  ) {
  }
  
  ngOnInit() {
    this.showErrorsIfSubmitted = false;
    
    this.setErrors();
    this.form = new FormGroup({
      email: new FormControl(environment.production ? '' : '2muchtestings@gmail.com', {
        validators: [
          Validators.required,
        ],
        updateOn: 'blur',
      }),
      password: new FormControl(environment.production ? '' : 'Aa222222', {
        validators: [
          Validators.required,
          Validators.minLength(7),
        ],
        updateOn: 'blur',
      }),
      keepMe: new FormControl(false),
    });
  }
  
  get emailGroup() {
    return this.form.get('email');
  }
  
  get passwordGroup() {
    return this.form.get('password');
  }
  
  get keepMeGroup() {
    return this.form.get('keepMe');
  }
  
  onSubmit(submitBtn) {
    // for updating form values (because of updateOn blur)
    submitBtn.focus();
    this.showErrorsIfSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    
    this.authService.login(this.form.value);
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
    };
  }
  
  
}
