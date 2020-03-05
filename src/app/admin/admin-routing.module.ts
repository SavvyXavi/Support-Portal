import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../index/guards/auth.guard';

import { AdminComponent } from './admin.component';
import { CustomersComponent } from './customers/customers.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { RegisterComponent } from './register/register.component';
import { LocalMonitorComponent } from './local-monitor/local-monitor.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'localmonitor',
        component: LocalMonitorComponent
      },
      {
        path: '',
        component: CurrentUserComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
