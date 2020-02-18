import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/index/index/guards/auth.guard';

import { PortalComponent } from '../portal.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ManageAssetsComponent, TicketsComponent } from 'src/app/manage-assets';
import { CompaniesComponent } from 'src/app/companies/companies.component';
import { CustomersComponent } from 'src/app/admin/customers/customers.component';
import { LocationsComponent } from 'src/app/locations/locations.component';

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
        loadChildren: () => import
        ('../../contracts/contracts/contracts.module').then( c =>
          c.ContractsModule)
      },
      {
        path: 'tickets',
        component: TicketsComponent
      },
      {
        path: 'locations',
        component: LocationsComponent
      },
      {
        path: 'companies',
        component: CompaniesComponent
      },
      {
        path: 'admin/customers',
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
