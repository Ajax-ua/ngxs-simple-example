import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
//import { AuthGuard } from '../core/guards/auth.guard';

export const HomeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
];
