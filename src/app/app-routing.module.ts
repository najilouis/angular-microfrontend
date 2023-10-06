import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { isLogged } from './shared/auth/is-logged.guard';
// import { isNotLogged } from '../../projects/auth/src/lib/is-not-logged.guard';

import { isLogged, isNotLogged } from '@@auth';

const routes: Routes = [
  {
    path: '',
    canMatch: [isLogged],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '',
    canMatch: [isNotLogged],
    loadChildren: () => import('../../projects/login/src/app/feature/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
