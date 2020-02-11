import { Component, OnInit, ViewChild } from '@angular/core';

import { ApifilterService } from './../services/apifilter.service';
import { AuthenticationService } from './../login/services/authentication.service';

import { Profile } from './../login/models/profile';
import { CustomerLocation } from './models/location';
import { Partner } from './../models/partner';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: CustomerLocation;
  currentProfile: Profile;

  partnerArr: Partner[];

  locationLength: CustomerLocation[];

  locationDataSource: MatTableDataSource<CustomerLocation>;
  displayedColumns: string[] = ['Description', 'Street', 'City', 'Zip Code', 'Country', 'Company'];

  searchKey: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
    if (this.currentProfile.companypartner === 'Partner') {
      this.filter.partLocationFilter(this.currentProfile)
      .subscribe(
        (returnedLocations: CustomerLocation[]) => {
          this.locationLength = returnedLocations;
          this.locationDataSource = new MatTableDataSource(returnedLocations);
          this.locationDataSource.sort = this.sort;
          this.locationDataSource.paginator = this.paginator;
        }
      );
    } else {
      this.filter.custLocationFilter(this.currentProfile)
      .subscribe(
        (returnedLocations: CustomerLocation[]) => {
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
