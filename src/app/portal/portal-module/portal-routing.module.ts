import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../../login/login/login.component';
import { ResetComponent } from '../../login/reset/reset.component';
import { ForgotpasswordComponent } from 'src/app/login/forgotpassword/forgotpassword.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

const routes: Routes = [
  {
    'path': 'dashboard',
    component: DashboardComponent,

  },
  {
    path: 'forgot',
    component: ForgotpasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetComponent
  },
  {
    path: 'reset',
    component: ResetComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
