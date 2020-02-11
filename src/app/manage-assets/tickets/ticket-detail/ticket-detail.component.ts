import { Component, OnInit, ViewChild } from '@angular/core';

import { Tickets } from 'src/app/manage-assets/models/tickets';
import { Assets } from './../../models/assets';
import { Contracts } from './../../models/contracts';

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

  assetdisplayedColumns: string[] = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];
  assetDataSource: MatTableDataSource<Assets>;
  searchKey: string;

  contractDisplayedColumns: string[] = ['Contract#', 'Contract Name', 'Start Date', 'Renewal Date', 'Customer', 'Status'];
  contractDataSource: MatTableDataSource<Contracts>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
    this.route.snapshot.paramMap.get('refNumber');
    this.filter.ticketRefFilter(refNumber.substring(1))
    .subscribe(
      (returnedTicket: Tickets) => {
        this.ticket = returnedTicket;
        this.filter.assetsBySerial(this.ticket[0].AssetIdentifier)
        .subscribe(
          (returnedAsset: Assets[]) => {
            this.assetDataSource = new MatTableDataSource(returnedAsset);
            this.assetDataSource.sort = this.sort;
            this.assetDataSource.paginator = this.paginator;
            this.filter.conByName(returnedAsset[0].Schedule)
            .subscribe(
              (returnedContract: Contracts[]) => {
                this.contractDataSource = new MatTableDataSource(returnedContract);
                this.contractDataSource.sort = this.sort;
                this.contractDataSource.paginator = this.paginator;
              }
            );
          }
        );
      }
    );
  }

  applyFilter() {
    this.assetDataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.assetDataSource.paginator) {
      this.assetDataSource.paginator.firstPage();
    }
  }

  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  goBack(): void {
    this.location.back();
  }

}
