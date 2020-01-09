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
    this.contractsCount();
  }

  getPartners() {
    // this.filter.getPartners(this.filteredProfile.partner)
    //   .subscribe(
    //     partner  => {
    //       this.partner = partner;
    //     }
    //   );
  }

  contractsCount() {
    this.filter.partConFilter(this.filteredProfile)
    .subscribe(
      (returnedContractsLength: Contracts[]) => {
        this.contractLength = returnedContractsLength;
        return this.contractLength.length;
      }
    );
  }

  getContracts() {
    if (this.partner.CompanyName.includes(this.filteredProfile.partner)) {
      this.filter.partConFilter(this.filteredProfile)
      .subscribe(
        (returnedContracts: Contracts) => {
          this.contracts = returnedContracts;
        }
      );
      console.log('Contracts pull successful!');
    } else {
      this.filter.custConFilter(this.filteredProfile)
      .subscribe(
        (returnedContractsLength: Contracts[]) => {
          this.contractLength = returnedContractsLength;
        }
      );
      console.log('Company not included');
    }

    // this.filter.partConFilter(this.filteredProfile)
    // .subscribe(
    //   (returnedContracts: Contracts) => {
    //     this.contracts = returnedContracts;
    //   }
    // );
  }

}
