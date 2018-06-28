import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { take } from 'rxjs/operators';

//import {
//  OrganizationService,
//} from '../services';

@Injectable({
  providedIn: 'root',
})
export class OrganizationResolver implements Resolve<any> {
  constructor(
    //private organizationService: OrganizationService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //return this.organizationService.loadOrganization(route.params.hafflaId).pipe(
    //  take(1),
    //);
  }
}
