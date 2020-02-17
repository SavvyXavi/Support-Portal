import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { PortalComponent } from '../portal.component';
import { AuthGuard } from 'src/app/index/index/guards/auth.guard';

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
