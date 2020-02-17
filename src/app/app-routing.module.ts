import { TicketDetailComponent } from './manage-assets/tickets/ticket-detail/ticket-detail.component';
import { CompaniesComponent } from './companies/companies.component';
import { LocationDetailsComponent } from './locations/location-details/location-details.component';
import { RegisterComponent } from './admin/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { ContractsComponent } from './manage-assets/contracts/contracts.component';
import { SupportComponent } from './admin/support/support.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';

import { PortalComponent } from './portal/portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppdashComponent } from './suppdash/suppdash.component';

import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { TicketsComponent } from './manage-assets/tickets/tickets.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LocationsComponent } from './locations/locations.component';
import { AuthGuard } from './index/index/guards/auth.guard';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { ListsComponent } from './manage-assets/lists/lists.component';
import { OemComponent } from './admin/oem/oem.component';
import { BudgetComponent } from './budget/budget.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { ContractDetailComponent } from './manage-assets/contracts/contract-detail/contract-detail.component';
import { AssetDetailComponent } from './manage-assets/asset-detail/asset-detail.component';
import { LocalMonitorComponent } from './admin/local-monitor/local-monitor.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: './index/index.module#IndexModule'
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
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'suppdash',
    component: SuppdashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manageassets/assets',
    component: ManageAssetsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manageassets/tickets',
    component: TicketsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manageassets/lists',
    component: ListsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manageassets/contracts',
    component: ContractsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contractdetail/:refNumber',
    component: ContractDetailComponent,
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
    path: 'companies',
    component: CompaniesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'budgets',
    component: BudgetComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'locations',
    component: LocationsComponent,
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
