import { Component, OnInit, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';

import { Contracts } from '../models/contracts';
import { Profile } from '../../index/index/models/profile';
import { Partner } from '../../models/partner';
import { Customer } from '../../models/customer';

import { ApifilterService } from './../../services/apifilter.service';
import { AuthenticationService } from 'src/app/index/index/services/authentication.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.css']
})
export class ContractTableComponent implements OnInit {
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

  getPdf() {
   let doc = new jsPDF();
   doc.fromHTML(document.getElementById('table'), 15, 4,
    {'width': 600},
    {'height': 100}
    );

    doc.save('Contracts.pdf');
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
