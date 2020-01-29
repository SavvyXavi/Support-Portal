import { Component, OnInit, ViewChild } from '@angular/core';

import { ApifilterService } from './../services/apifilter.service';
import { AuthenticationService } from './../login/services/authentication.service';

import { Profile } from './../login/models/profile';
import { Location } from './models/location';
import { Partner } from './../models/partner';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location;
  currentProfile: Profile;

  partnerArr: Partner[];

  locationLength: Location[];

  locationDataSource: MatTableDataSource<Location>;
  displayedColumns: string[] = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];

  searchKey: string;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private authserv: AuthenticationService
  ) {
    this.authserv.currentUser.subscribe(
      profile => this.currentProfile = profile
    );
  }

  ngOnInit() {
    this.getPartners();
    this.getLocations();
  }

  getPartners() {
    this.filter.getPartners()
    .subscribe(
      returnedPartners => this.partnerArr = returnedPartners
    );
  }

  filterPartner(partner: String) {
    return this.partnerArr.find(company => company.CompanyName === partner);
  }


  getLocations() {
    if (this.filterPartner(this.currentProfile.partner)) {
      this.filter.partLocationFilter(this.currentProfile)
      .subscribe(
        (returnedLocations: Location[]) => {
          this.locationLength = returnedLocations;
          this.locationDataSource = new MatTableDataSource(returnedLocations);
          this.locationDataSource.sort = this.sort;
          this.locationDataSource.paginator = this.paginator;
        }
      );
    } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
      this.filter.custAssetsFilter(this.currentProfile)
      .subscribe(
        (returnedLocations: Location[]) => {
          this.locationLength = returnedLocations;
          this.locationDataSource = new MatTableDataSource(returnedLocations);
          this.locationDataSource.sort = this.sort;
          this.locationDataSource.paginator = this.paginator;
        }
      );
    }
  }

  applyFilter() {
    this.locationDataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.locationDataSource.paginator) {
      this.locationDataSource.paginator.firstPage();
    }
  }

  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

}
