import { TicketDetailComponent } from './manage-assets/tickets/ticket-detail/ticket-detail.component';
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
import { AuthGuard } from './index/index/guards/auth.guard';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { OemComponent } from './admin/oem/oem.component';
import { BudgetComponent } from './budget/budget.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { AssetDetailComponent } from './manage-assets/asset-detail/asset-detail.component';
import { LocalMonitorComponent } from './admin/local-monitor/local-monitor.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'portal',
    loadChildren: () => import
    ('./portal/portal-module/portal.module').then( m =>
      m.PortalModule),
  },
  {
    path: 'login',
    loadChildren: () => import
    ('./index/index.module').then(
      m => m.IndexModule),
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
    path: 'suppdash',
    component: SuppdashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'assetdetail/:identifier',
    component: AssetDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'locationdetail/:description',
    component: LocationDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ticketdetail/:refNumber',
    component: TicketDetailComponent,
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
    path: 'admin/admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/support',
    component: SupportComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/oem',
    component: OemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/customers',
    component: CustomersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/localMonitor',
    component: LocalMonitorComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
