import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ApifilterService } from './../../services/apifilter.service';
import { AuthenticationService } from './../../index/services/authentication.service';

import { Profile } from '../../index/models/profile';
import { CustomerLocation } from '../models/location';
import { Assets } from './../../manage-assets/models/assets';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Tickets } from 'src/app/tickets/models/tickets';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  specLocation: CustomerLocation;
  specLocationLength: CustomerLocation[];
  currentProfile: Profile;

  assetLocationLength: Assets[];
  assetLocationDataSource: MatTableDataSource<Assets>;

  ticketLocationLength: Tickets[];
  ticketLocationDataSource: MatTableDataSource<Tickets>;

  assetDisplayedColumns: string[] = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];
  ticketDisplayedColumns: string[] =
  ['Case#', 'Name', 'Status', 'Description', 'Schedule', 'Asset ID', 'Customer', 'Update Date', 'Update Since'];

  assetSearchKey: string;
  ticketSearchKey: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private filter: ApifilterService,
    private authserv: AuthenticationService
  ) {
    this.authserv.currentUser.subscribe(
      profile => this.currentProfile = profile
    );
  }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    const description =
      this.route.snapshot.paramMap.get('description');
    this.filter.locationFilter(description)
    .subscribe(
      (returnedLocation: CustomerLocation) => {
        this.specLocation = returnedLocation;
        const siteAddress: string
         =
      description +
      ' - ' +
      this.specLocation[0].Address1 +
      ', ' + this.specLocation[0].Town +
      ', ' + this.specLocation[0].County +
      ', ' + this.specLocation[0].Postcode +
      ', ' + this.specLocation[0].Country;
        this.filter.assetsByLocation(siteAddress)
        .subscribe(
          (returnedAssets: Assets[]) => {
          this.assetLocationLength = returnedAssets;
          this.assetLocationDataSource = new MatTableDataSource(returnedAssets);
          this.assetLocationDataSource.sort = this.sort;
          this.assetLocationDataSource.paginator = this.paginator;
          }
        );
        this.filter.ticketsLocationFilter(siteAddress)
        .subscribe(
          (returnedTickets: Tickets[]) => {
            this.ticketLocationLength = returnedTickets;
            this.ticketLocationDataSource = new MatTableDataSource(returnedTickets);
            this.ticketLocationDataSource.sort = this.sort;
            this.ticketLocationDataSource.paginator = this.paginator;
          }
        );
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  applyTicketFilter() {
    this.ticketLocationDataSource.filter = this.assetSearchKey.trim().toLowerCase();
    if (this.ticketLocationDataSource.paginator) {
      this.ticketLocationDataSource.paginator.firstPage();
    }
  }

  searchTicketClear() {
    this.ticketSearchKey = '';
    this.applyTicketFilter();
  }

  applyAssetFilter() {
    this.assetLocationDataSource.filter = this.assetSearchKey.trim().toLowerCase();
    if (this.assetLocationDataSource.paginator) {
      this.assetLocationDataSource.paginator.firstPage();
    }
  }

  goToAssetDet(identifier: string) {
    this.router.navigate(['/portal/assets/assetdetail/' + identifier]);
  }

  goToTicketDet(refNumber: string) {
    this.router.navigate(['/portal/tickets/ticketdetail/' + refNumber]);
  }

  searchAssetClear() {
    this.assetSearchKey = '';
    this.applyAssetFilter();
  }
}
