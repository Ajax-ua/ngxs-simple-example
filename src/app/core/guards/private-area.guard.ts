import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { AuthService } from '../services';



@Injectable({
  providedIn: 'root',
})
export class PrivateAreaGuard implements CanLoad {
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
    return this.authService.isLogined$.pipe(
      take(1),
      tap(isLogined => {
        if (!isLogined) {
          this.router.navigate(['/', 'login']);
        }
      }),
    );
  }
}
