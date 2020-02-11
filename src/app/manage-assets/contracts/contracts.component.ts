import { Component, OnInit, ViewChild } from '@angular/core';

import { Contracts } from '../models/contracts';
import { Profile } from './../../login/models/profile';
import { Partner } from '../../models/partner';
import { Customer } from '../../models/customer';

import { ApifilterService } from './../../services/apifilter.service';
import { AuthenticationService } from './../../login/services/authentication.service';

import { MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  contracts: Contracts;
  currentProfile: Profile;

  partner: Partner;
  partnerArr: Partner[];
  company: Customer;

  contractDataSource: MatTableDataSource<Contracts>;
  displayedColumns: string[] = ['Contract#', 'Contract Name', 'Start Date', 'Renewal Date', 'Customer', 'Status'];

  searchKey: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private authserv: AuthenticationService,
  ) {
    this.authserv.currentUser.subscribe(
      name => {
        this.currentProfile = name;
      }
    );
  }

  ngOnInit() {
    this.getPartners();
    this.getContracts();
    // this.getCompanies();
  }

  getPartners() {
    this.filter.getPartners()
    .subscribe(
      returnedPartners => this.partnerArr = returnedPartners
    );
  }

  getCompanies() {
    this.filter.customerFilter(this.currentProfile)
    .subscribe(
      (companies: Customer) => {
        this.company = companies;
      }
    );
  }

  filterPartner(partner: String) {
    return this.partnerArr.find(company => company.CompanyName === partner);
  }

  getContracts() {
    if (this.currentProfile.companypartner === 'Partner') {
      this.filter.partConFilter(this.currentProfile)
      .subscribe(
        (returnedContracts: Contracts[]) => {
          this.contractDataSource = new MatTableDataSource(returnedContracts);
          this.contractDataSource.sort = this.sort;
          this.contractDataSource.paginator = this.paginator;
        }
      );
    } else {
      this.filter.custConFilter(this.currentProfile)
      .subscribe(
        (returnedContracts: Contracts[]) => {
          this.contractDataSource = new MatTableDataSource(returnedContracts);
          this.contractDataSource.sort = this.sort;
          this.contractDataSource.paginator = this.paginator;
        }
      );
    }
  }

  applyFilter() {
    this.contractDataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.contractDataSource.paginator) {
      this.contractDataSource.paginator.firstPage();
    }
  }

  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
}
