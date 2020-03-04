import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../index/guards/auth.guard';

import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UserSettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
