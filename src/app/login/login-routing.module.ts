import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login-component/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetComponent } from './reset/reset.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'forgot',
        component: ForgotpasswordComponent
      },
      {
        path: 'reset-password',
        component: ResetComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
