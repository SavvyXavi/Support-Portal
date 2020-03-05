import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/index/guards/auth.guard';

import { PortalComponent } from '../portal.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
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
        path: 'contracts',
        loadChildren: () => import
        ('../../contracts/contracts/contracts.module').then( c =>
          c.ContractsModule)
      },
      {
        path: 'assets',
        loadChildren: () => import
        ('../../manage-assets/assets/assets.module').then( a =>
          a.AssetsModule)
      },
      {
        path: 'tickets',
        loadChildren: () => import
        ('../../tickets/tickets.module').then( t =>
          t.TicketsModule)
      },
      {
        path: 'companies',
        loadChildren: () => import
        ('../../companies/companies.module').then( c =>
          c.CompaniesModule)
      },
      {
        path: 'locations',
        loadChildren: () => import
        ('../../locations/locations.module').then( l =>
          l.LocationsModule)
      },
      {
        path: 'admin',
        loadChildren: () => import
        ('../../admin/admin.module').then( a =>
          a.AdminModule)
      },
      {
        path: 'settings',
        loadChildren: () => import
        ('../../settings/settings.module').then( s => s.SettingsModule)
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
