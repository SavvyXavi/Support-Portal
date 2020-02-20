import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TicketsRoutingModule } from './tickets-routing.module';

// Mat Import
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { TicketsComponent } from './tickets.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketsTableComponent } from './tickets-table/tickets-table.component';

@NgModule({
  declarations: [
    TicketsComponent,
    TicketDetailComponent,
    TicketsTableComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Mat Imports
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class TicketsModule { }
