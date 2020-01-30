import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApifilterService } from './../../services/apifilter.service';
import { AuthenticationService } from './../../login/services/authentication.service';

import { Profile } from '../../login/models/profile';
import { CustomerLocation } from '../models/location';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  specLocation: CustomerLocation;
  specLocationLength: CustomerLocation[];
  locationDet: CustomerLocation[];
  currentProfile: Profile;

  locationDataSource: MatTableDataSource<CustomerLocation>;

  searchKey: string;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

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
    const description =
      this.route.snapshot.paramMap.get('description');
      console.log(description);
    this.filter.partLocationFilter(this.currentProfile)
    .subscribe(
      (returnedLocation: CustomerLocation) => {
        this.specLocation = returnedLocation;
        // this.filter.assetsBySchedule(this.contract[0].ScheduleName)
        // .subscribe(
        //   (returnedAssetLength: Assets[]) => {
        //   this.assetLength = returnedAssetLength;
        //   this.locationDataSource = new MatTableDataSource(returnedAssetLength);
        //   this.locationDataSource.sort = this.sort;
        //   this.locationDataSource.paginator = this.paginator;
        //   }
        // );
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
