import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/index/index/guards/auth.guard';

import { PortalComponent } from '../portal.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ManageAssetsComponent } from 'src/app/manage-assets';

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
