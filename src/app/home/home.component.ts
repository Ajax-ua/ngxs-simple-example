import { Component } from '@angular/core';

import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';

import {AuthService} from '../core/services';
import {LogoutAction} from '../ngxs/auth/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isGuest$: Observable<boolean> = this.authService.isGuest$;
  
  constructor(
    private authService: AuthService,
    private store: Store,
  ) {
  }
  
  logout() {
    this.store.dispatch(new LogoutAction());
  }
}
