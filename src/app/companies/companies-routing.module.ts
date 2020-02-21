import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../index/index/guards/auth.guard';

import { CompaniesComponent } from './companies.component';
import { ComapniesTableComponent } from './comapnies-table/comapnies-table.component';


const routes: Routes = [
  {
    path:'',
    component: CompaniesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ComapniesTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
