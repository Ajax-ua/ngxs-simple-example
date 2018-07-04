import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';

import { AuthService } from '../services';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }
  
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.guard();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    return this.guard();
  }

  guard() {
    return this.authService.isGuest$.pipe(
      tap(isGuest => {
        if (!isGuest) {
          this.router.navigate(['/home']);
        }
      }),
      take(1),
    );
  }
}
