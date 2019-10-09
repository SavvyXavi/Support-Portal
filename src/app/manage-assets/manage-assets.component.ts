import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Assets } from './models/assets';

import { ApiCallService } from './services/api-call.service';
import { ApifilterService } from './../services/apifilter.service';
import { AuthenticationService } from '../login/services/authentication.service';

import { Filter } from '../models/filter';
import { Profile } from './../login/models/profile';

@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  assets: Assets;
  currentProfile: Profile;
  filteredProfile: Filter;
  filterSubsciption: Subscription;

  constructor(
    private api: ApiCallService,
    private filter: ApifilterService,
    private authserv: AuthenticationService
    ) {
      this.filterSubsciption = this.authserv.currentUser.subscribe(
        name => {
          this.filteredProfile = name ;
        }
      );
    }

  ngOnInit() {
    this.getAssets();
  }

  getAssets() {
    // this.filteredProfile.name = this.authserv.currentUserValue.firstName + ' ' + this.authserv.currentUserValue.lastName;
    // this.filteredProfile.partnerRole = this.authserv.currentUserValue.partnerRole;
    // this.filteredProfile.partner = this.authserv.currentUserValue.partner;

    this.filter.profileFilter(this.filteredProfile)
      .subscribe(
      (returnedAssets: Assets) => {
        this.assets = returnedAssets;
      }
    );
  }
}
