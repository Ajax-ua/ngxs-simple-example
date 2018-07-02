import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigResolver } from './core/resolvers/config-resolver';
//import { AppGuard } from './core/guards/app.guard';
//import { OrganizationListGuard } from './core/guards/organization-list.guard';
//import { MyProfileResolver } from './core/resolvers/main-resolver';

const appRoutes: Routes = [
  {
    path: '',
    resolve: {
      config: ConfigResolver,
    },
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {
        path: '',
        loadChildren: './auth/auth.module#AuthModule',
      },
      {
        path: '',
        loadChildren: './home/home.module#HomeModule',
        //canLoad: [AppGuard],
        //canActivate: [AppGuard, OrganizationListGuard],
        //resolve: {
        //  myProfile: MyProfileResolver,
        //},
      },
    ],
  },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
