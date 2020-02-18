import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/index/index/guards/auth.guard';

import { PortalComponent } from '../portal.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ManageAssetsComponent, TicketsComponent } from 'src/app/manage-assets';
import { ContractsComponent } from 'src/app/manage-assets/contracts/contracts.component';
import { CompaniesComponent } from 'src/app/companies/companies.component';
import { CustomersComponent } from 'src/app/admin/customers/customers.component';

const routes: Routes = [
  {
    'path': '',
    component: PortalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'assets',
        component: ManageAssetsComponent
      },
      {
        path: 'contracts',
        component: ContractsComponent
      },
      {
        path: 'tickets',
        component: TicketsComponent
      },
      {
        path: 'companies',
        component: CompaniesComponent
      },
      {
        path: 'customers',
        component: CustomersComponent
      }
    ],
  },


  // {
  //   path: '**',
  //   red
  // }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
