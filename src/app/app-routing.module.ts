import { RegisterComponent } from './admin/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { ContractsComponent } from './manage-assets/contracts/contracts.component';
import { SupportComponent } from './admin/support/support.component';
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
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { TicketsComponent } from './manage-assets/tickets/tickets.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LocationsComponent } from './locations/locations.component';
import { ResetComponent } from './login/reset/reset.component';
import { AuthGuard } from './login/guards/auth.guard';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { ListsComponent } from './manage-assets/lists/lists.component';
import { OemComponent } from './admin/oem/oem.component';
import { BudgetComponent } from './budget/budget.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { ContractDetailComponent } from './manage-assets/contracts/contract-detail/contract-detail.component';
import { AssetDetailComponent } from './manage-assets/asset-detail/asset-detail.component';

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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reset-password',
    component: ResetComponent
  },
  {
  path: 'forgot',
  component: ForgotpasswordComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
    },
  {
    path: 'reset',
    component: ResetComponent
  },
  {
    path: 'login/reset-password',
    component: ResetComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'northdash',
    component: NorthComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reliantdash',
    component: ReliantDashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'relusdash',
    component: RelusDashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'genericdash',
    component: GenericDashComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
