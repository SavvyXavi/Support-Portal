import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../index/guards/auth.guard';

import { ContractsComponent } from '../contracts.component';
import { ContractDetailComponent } from '../contract-detail/contract-detail.component';
import { ContractTableComponent } from '../contract-table/contract-table.component';

const routes: Routes = [
  {
    path: '',
    component: ContractsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ContractTableComponent,
      },
      {
        path: 'contractdetail/:refNumber',
        component: ContractDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
