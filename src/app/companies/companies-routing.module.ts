import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../index/index/guards/auth.guard';

import { CompaniesComponent } from './companies.component';
import { CompaniesTableComponent } from './companies-table/companies-table.component';


const routes: Routes = [
  {
    path:'',
    component: CompaniesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CompaniesTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
