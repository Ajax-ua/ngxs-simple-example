import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { take } from 'rxjs/operators';

import {
  ConfigService,
} from '../services';

@Injectable({
  providedIn: 'root',
})
export class ConfigResolver implements Resolve<any> {
  constructor(
    private configService: ConfigService,
  ) {
  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.configService.loadConfig().pipe(take(1));
  }
}
