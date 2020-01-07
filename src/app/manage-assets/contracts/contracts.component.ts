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
    this.getContracts();
    this.contractsCount();
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
    if (sessionStorage.getItem('CompanyName').includes(this.currentProfile.partner)) {
      this.filter.partConFilter(this.currentProfile)
      .subscribe(
        (returnedContracts: Contracts) => {
          this.contracts = returnedContracts;
        }
      );
      console.log('Storage accepted!');
    } else {
      this.filter.custConFilter(this.currentProfile)
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
