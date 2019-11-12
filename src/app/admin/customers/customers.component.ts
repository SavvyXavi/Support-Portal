import { Component, OnInit } from '@angular/core';

import { Customer } from '../models/customer';
import { Profile } from '../../login/models/profile';
import { Filter } from '../../models/filter';
import { Subscription } from 'rxjs';

import { ApifilterService } from '../../services/apifilter.service';
import { AuthenticationService } from '../../login/services/authentication.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer;
  currentProfile: Profile;

  filteredProfile: Filter;
  filterSubscription: Subscription;
  constructor(
    private filter: ApifilterService,
    private auth: AuthenticationService
  ) {
    this.filterSubscription = this.auth.currentUser.subscribe(
      profile => {
        this.filteredProfile = profile;
      }
    );
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.filter.customerFilter(this.filteredProfile)
    .subscribe(
      (returnedCustomers: Customer) => {
        this.customers = returnedCustomers;
      }
    );
  }
}
