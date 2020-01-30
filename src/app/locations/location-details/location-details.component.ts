import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApifilterService } from './../../services/apifilter.service';
import { AuthenticationService } from './../../login/services/authentication.service';

import { Profile } from '../../login/models/profile';
import { CustomerLocation } from '../models/location';
import { Assets } from './../../manage-assets/models/assets';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';
import { Tickets } from 'src/app/manage-assets/models/tickets';

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

  assetSearchKey: string;
  ticketSearchKey: string;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
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
        console.log(this.specLocation);
        console.log(this.specLocation[0]);
        console.log(this.specLocation.address1);
        console.log(this.specLocation[0].Address1);
        this.filter.assetsByLocation(this.specLocation)
        .subscribe(
          (returnedAssets: Assets[]) => {
          this.assetLocationLength = returnedAssets;
          this.assetLocationDataSource = new MatTableDataSource(returnedAssets);
          this.assetLocationDataSource.sort = this.sort;
          this.assetLocationDataSource.paginator = this.paginator;
          }
        );
        this.filter.ticketsLocationFilter(this.specLocation[0])
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

  searchAssetClear() {
    this.assetSearchKey = '';
    this.applyAssetFilter();
  }
}
