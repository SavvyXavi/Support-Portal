import { Component, OnInit } from '@angular/core';

import { Contracts } from '../models/contracts';
import { Profile } from './../../login/models/profile';
import { Filter } from '../../models/filter';
import { Partner } from '../../models/partner';
import { Customer } from '../../models/customer';

import { ApifilterService } from './../../services/apifilter.service';
import { AuthenticationService } from './../../login/services/authentication.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { NgSelectOption } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  contractLength: Contracts[];
  contracts: Contracts;
  currentProfile: Profile;

  value: NgSelectOption;
  selectorForm: FormGroup;

  partner: Partner;
  partnerArr: Partner[];
  company: Customer;

  filteredProfile: Filter;

  items = [];
  pageOfItems: Contracts[];

  constructor(
    private filter: ApifilterService,
    private authserv: AuthenticationService,
    private formBuilder: FormBuilder
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
    this.filterContracts();
    this.selectorForm = this.formBuilder.group({
      companyName: ['']
    });
    this.items = Array(2000).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}
    ));
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

  get f() {
    return this.selectorForm.controls;
  }

  filterContracts() {
    if (this.f.compamyName.value !== this.contracts.endCustomerName) {
      return;
    }
    if (this.f.companyName.value === this.contracts.endCustomerName) {
      return this.contracts.endCustomerName.includes(this.f.companyName.value);
    }
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
