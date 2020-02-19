import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './../index/index/index.component';
import { LoginComponent } from './index/login/login.component';
import { ForgotpasswordComponent } from './index/forgotpassword/forgotpassword.component';
import { ResetComponent } from './index/reset/reset.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'forgot',
        component: ForgotpasswordComponent
      },
      {
        path: 'reset-password',
        component: ResetComponent,
      },
    ]
  },
  // {
  //   path: 'portal',
  //   loadChildren: () => import
  //   ('../portal/portal-module/portal.module').then( m =>
  //     m.PortalModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
