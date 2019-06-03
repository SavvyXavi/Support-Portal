import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';

import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppdashComponent } from './suppdash/suppdash.component';
import { NorthComponent } from './north/north.component';
import { ReliantDashComponent } from './reliant-dash/reliant-dash.component';
import { RelusDashComponent } from './relus-dash/relus-dash.component';
import { GenericDashComponent } from './generic-dash/generic-dash.component';

import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { TicketsComponent } from './manage-assets/tickets/tickets.component';

import { AuthGuard } from './login/guards/auth.guard';
import { AccountsComponent } from './admin/accounts/accounts.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: SuppdashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: NorthComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: ReliantDashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: RelusDashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: GenericDashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: SuppdashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'northdash',
    component: NorthComponent
  },
  {
    path: 'reliantdash',
    component: ReliantDashComponent
  },
  {
    path: 'relusdash',
    component: RelusDashComponent
  },
  {
    path: 'genericdash',
    component: GenericDashComponent
  },
  {
    path: 'suppdash',
    component: SuppdashComponent
  },
  {
    path: 'manageassets/assets',
    component: ManageAssetsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manageassets/tickets',
    component: TicketsComponent
  },
  {
    path: 'admin/accounts',
    component: AccountsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
