import { Component, OnInit } from '@angular/core';

import { Contracts } from '../models/contracts';
import { Profile } from './../../login/models/profile';
import { Filter } from '../../models/filter';
import { Partner } from '../../models/partner';
import { Customer } from '../../models/customer';

import { ApifilterService } from './../../services/apifilter.service';
import { AuthenticationService } from './../../login/services/authentication.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  contractLength: Contracts[];
  contracts: Contracts;
  currentProfile: Profile;

  partner: Partner;
  partnerArr: Partner[];
  company: Customer;

  filteredProfile: Filter;
  constructor(
    private filter: ApifilterService,
    private authserv: AuthenticationService
  ) {
    this.authserv.currentUser.subscribe(
      name => {
        this.filteredProfile = name;
      }
    );
  }

  ngOnInit() {
    this.getPartners();
    this.getContracts();
    this.getCompanies();
    // this.contractsCount();
  }

  getPartners() {
    this.filter.getPartners()
    .subscribe(
      returnedPartners => this.partnerArr = returnedPartners
    );
  }

  getCompanies() {
    this.filter.customerFilter(this.filteredProfile)
    .subscribe(
      (companies: Customer) => {
        this.company = companies;
        console.log(this.company);
      }
    );
  }

  filterPartner(partner: String) {
    return this.partnerArr.find(company => company.CompanyName === partner);
  }

  getContracts() {
    if (this.filterPartner(this.filteredProfile.partner)) {
      this.filter.partConFilter(this.filteredProfile)
      .subscribe(
        (returnedContracts: Contracts) => this.contracts = returnedContracts
      );
    } else if (this.filterPartner(this.filteredProfile.partner) === undefined) {
      this.filter.custConFilter(this.filteredProfile)
      .subscribe(
        (returnedContracts: Contracts) => this.contracts = returnedContracts
      );
    }
  }
}
