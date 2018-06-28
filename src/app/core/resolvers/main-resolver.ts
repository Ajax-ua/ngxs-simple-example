import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

//import { AuthService, UserService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class MyProfileResolver implements Resolve<any> {
  constructor(
    //private userService: UserService,
    //private authService: AuthService,
  ) {
  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //return this.authService.isGuest$.pipe(
    //  switchMap((isGuest) => {
    //    if (isGuest) {
    //      return of({});
    //    }
    //    return this.userService.loadMyProfile();
    //  }),
    //  take(1),
    //);
  }
}
