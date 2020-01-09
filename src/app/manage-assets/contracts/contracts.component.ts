import { Partner } from './../../models/partner';
import { Component, OnInit } from '@angular/core';

import { Contracts } from '../models/contracts';
import { Profile } from './../../login/models/profile';
import { Filter } from '../../models/filter';
import { Subscription } from 'rxjs';

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

  filteredProfile: Filter;
  filterSubscription: Subscription;
  constructor(
    private filter: ApifilterService,
    private authserv: AuthenticationService
  ) {
    this.filterSubscription = this.authserv.currentUser.subscribe(
      name => {
        this.filteredProfile = name;
      }
    );
  }

  ngOnInit() {
    this.getPartners();
    this.getContracts();
    // this.contractsCount();
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

  getContracts() {
    if (this.filterPartner(this.currentProfile.partner)) {
      this.filter.partConFilter(this.currentProfile)
      .subscribe(
        (returnedConLength: Contracts[]) => this.contractLength = returnedConLength
      );
      console.log(this.filterPartner(this.currentProfile.partner));
    } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
      this.filter.custConFilter(this.currentProfile)
      .subscribe(
        (returnedConLength: Contracts[]) => this.contractLength = returnedConLength
      );
    }
  }

}
