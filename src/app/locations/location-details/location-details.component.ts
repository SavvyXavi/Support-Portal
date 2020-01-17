import { Component, OnInit, Input } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ApifilterService } from './../../services/apifilter.service';
import { AuthenticationService } from './../../login/services/authentication.service';

import { Profile } from '../../login/models/profile';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  @Input() specLocation: Location;
  currentProfile: Profile;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private filter: ApifilterService,
    private authserv: AuthenticationService
  ) {
    this.authserv.currentUser.subscribe(
      profile => this.currentProfile = profile
    );
  }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    const companyname =
      this.route.snapshot.paramMap.get('CompanyName');
      console.log(companyname);
    this.filter.locationFilter(this.currentProfile)
    .subscribe(
      (returnedLocation: Location) => {
        this.location = returnedLocation;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
