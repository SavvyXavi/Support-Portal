import { Component, OnInit, ViewChild } from '@angular/core';

import { ApifilterService } from '../../services/apifilter.service';
import { AuthenticationService } from 'src/app/index/index/services/authentication.service';

import { Profile } from 'src/app/index/index/models/profile';
import { Partner } from 'src/app/models/partner';
import { Company } from '../model/company';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-comapnies-table',
  templateUrl: './comapnies-table.component.html',
  styleUrls: ['./comapnies-table.component.css']
})
export class ComapniesTableComponent implements OnInit {
  currentProfile: Profile;

  partnerArr: Partner[];

  companiesLength: Company[];

  displayedColumns: string[] =
   ['Company Name', 'Account Manager', 'Street Address', 'City', 'State', 'Zip Code', 'Country', 'Primary Contact'];
  companyDataSource: MatTableDataSource<Company>;

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

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
      this.filter.customerFilter(this.currentProfile)
      .subscribe(
        (returnedLocations: Company[]) => {
          this.companiesLength = returnedLocations;
          this.companyDataSource = new MatTableDataSource(returnedLocations);
          this.companyDataSource.sort = this.sort;
          this.companyDataSource.paginator = this.paginator;
        }
      );
  }

  applyFilter() {
    this.companyDataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.companyDataSource.paginator) {
      this.companyDataSource.paginator.firstPage();
    }
  }

  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
}
