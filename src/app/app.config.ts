import { InjectionToken } from '@angular/core';
import { Params, RouterStateSnapshot } from '@angular/router';

//import { RouterStateSerializer } from '@ngrx/router-store';
import { Restangular } from 'ngx-restangular';

import { environment } from '../environments/environment';
import { SessionService } from './core/services/session.service';

export let APP_CONFIG = new InjectionToken<string>('app.config');

export interface AppConfig {
  apiEndpoint: string;
}

export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: environment.api,
};

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

//export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
//  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
//    const { url } = routerState;
//    const queryParams = routerState.root.queryParams;
//
//    // Only return an object including the URL and query params
//    // instead of the entire snapshot
//    return { url, queryParams };
//  }
//}

export function RESTANGULAR_CONFIG (
  RestangularProvider,
  sessionService: SessionService,
) {
  RestangularProvider.setBaseUrl(APP_DI_CONFIG.apiEndpoint);
  RestangularProvider.setPlainByDefault(true);
  RestangularProvider.setRestangularFields({
    id: '_id',
  });

  RestangularProvider.addFullRequestInterceptor(
    (element, operation, path, url, headers, params) => {
      const sessionToken = sessionService.getSessionToken();
      if (sessionToken) {
        headers = {
          ...headers,
          'Authorization': `Bearer ${sessionToken}`,
        };
      }

      return { headers };
    },
  );

  // RestangularProvider.addResponseInterceptor((data, operation, what, url, response) => {
  //   const handledData = {
  //     status: 'success',
  //     data: data,
  //     headers: response.headers._headers
  //   };
  //   return handledData;
  // });

  // RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
  //
  // });
}

// Restangular service for event token auth
export abstract class RestangularEventTokenAuth extends Restangular {}
export function RestangularEventTokenAuthFactory(restangular: Restangular, sessionService: SessionService) {
  return restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.addFullRequestInterceptor(
      (element, operation, path, url, headers, params) => {
        const eventToken = sessionService.getEventToken();
        if (eventToken) {
          headers = {
            ...headers,
            'Checklist-Authorization': eventToken,
          };
        }

        return { headers };
      },
    );
  });
}
