import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
//import { AuthGuard } from '../core/guards/auth.guard';

export const AuthRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signup',
        loadChildren: './signup/signup.module#SignupModule',
        //canLoad: [AuthGuard],
        //canActivate: [AuthGuard],
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        //canLoad: [AuthGuard],
        //canActivate: [AuthGuard],
      },
    ],
  },
];
