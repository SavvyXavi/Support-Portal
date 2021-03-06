import { CompaniesComponent } from './companies/companies.component';
import { LocationDetailsComponent } from './locations/location-details/location-details.component';
import { RegisterComponent } from './admin/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { SupportComponent } from './admin/support/support.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';

import { SuppdashComponent } from './suppdash/suppdash.component';

import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './index/guards/auth.guard';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { OemComponent } from './admin/oem/oem.component';
import { BudgetComponent } from './budget/budget.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { LocalMonitorComponent } from './admin/local-monitor/local-monitor.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import
    ('./index/index.module').then(
      m => m.IndexModule),
  },
  {
    path: 'portal',
    loadChildren: () => import
    ('./portal/portal-module/portal.module').then( m =>
      m.PortalModule),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'suppdash',
    component: SuppdashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'budgets',
    component: BudgetComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/accounts',
    component: AccountsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/support',
    component: SupportComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
