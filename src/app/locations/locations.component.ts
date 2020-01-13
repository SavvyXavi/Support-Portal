import { Component, OnInit } from '@angular/core';

import { ApifilterService } from './../services/apifilter.service';
import { AuthenticationService } from './../login/services/authentication.service';

import { Profile } from './../login/models/profile';
import { Location } from './models/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location;

  currentProfile: Profile;
  constructor(
    private filter: ApifilterService,
    private authserv: AuthenticationService
  ) {
    this.authserv.currentUser.subscribe(
      profile => this.currentProfile = profile
    );
  }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.filter.locationFilter(this.currentProfile)
    .subscribe(
      (returnedlocations: Location) => this.locations = returnedlocations
    );
  }
}
