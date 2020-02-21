import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/index/index/guards/auth.guard';

import { TicketsComponent } from './tickets.component';
import { TicketsTableComponent } from './tickets-table/tickets-table.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TicketsTableComponent
      },
      {
        path: 'ticketdetail/:refNumber',
        component: TicketDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
