import { Component, OnInit, ViewChild } from '@angular/core';

import { Tickets } from 'src/app/manage-assets/models/tickets';

import { ApifilterService } from '../../../services/apifilter.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  ticket: Tickets;

  displayedColumns: string[] = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];
  ticketDataSource: MatTableDataSource<Tickets>;
  searchKey: string;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    const refNumber =
    this.route.snapshot.paramMap.get('RefNumber');
    this.filter.ticketRefFilter(refNumber)
    .subscribe(
      (returnedTickets: Tickets) =>
      this.ticket = returnedTickets
    );
  }

}
