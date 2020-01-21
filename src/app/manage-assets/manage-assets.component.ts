import { Component, OnInit, ViewChild } from '@angular/core';
import { Assets } from './models/assets';
import { Contracts } from './models/contracts';
import { ActivatedRoute, Router } from '@angular/router';

import { ApifilterService } from './../services/apifilter.service';
import { AuthenticationService } from '../login/services/authentication.service';

import { Subscription, merge } from 'rxjs';

import { Partner } from '../models/partner';
import { Filter } from '../models/filter';
import { Profile } from './../login/models/profile';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator, MatSort } from '@angular/material';
import { startWith, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})

export class ManageAssetsComponent implements OnInit {
  assets: Assets;
  assetLength: Assets[];
  currentProfile: Profile;
  filteredProfile: Filter;
  filterSubsciption: Subscription;

  displayedColumns: string[] = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];

  contract: Contracts;

  partnerArr: Partner[];
  assetArr: Assets[];

  assetObservable: Assets[];
  assetDataSource: MatTableDataSource<Assets>;

  pagintotal = 0;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private authserv: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.filterSubsciption = this.authserv.currentUser.subscribe(
        name => {
          this.filteredProfile = name ;
        }
      );

    }

  ngOnInit() {
    this.getPartners();
    this.getAssets();
    this.getAsset();
    // this.getContract();
    // this.paginatingAssets();
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

  getAssets() {
    if (this.filterPartner(this.filteredProfile.partner)) {
      this.filter.partAssetsFilter(this.filteredProfile)
      .subscribe(
        (returnedAssets: Assets) => this.assets = returnedAssets
      );
      console.log('Assets are above!');
    } else if (this.filterPartner(this.filteredProfile.partner) === undefined) {
      this.filter.custAssetsFilter(this.filteredProfile)
      .subscribe(
        (returnedAssets: Assets) => this.assets = returnedAssets
      );
    }
  }

  // getContract() {
  //   this.filter.conByRef('', this.assets.schedule)
  //   .subscribe(
  //     (returnedContract: Contracts) => {
  //       this.contract = returnedContract;
  //     }
  //   );
  //   this.router.navigate(['/contractdetail/' + this.contract.refNumber]);
  // }

  getAsset() {
    if (this.filterPartner(this.filteredProfile.partner)) {
      this.filter.partAssetsFilter(this.filteredProfile)
      .subscribe(
        (returnedAssetLength: Assets[]) => {
          this.assetLength = returnedAssetLength;
          this.assetDataSource = new MatTableDataSource(returnedAssetLength);
          this.assetDataSource.sort = this.sort;
          this.assetDataSource.paginator = this.paginator;

        }
      );
    } else if (this.filterPartner(this.filteredProfile.partner) === undefined) {
      this.filter.custAssetsFilter(this.filteredProfile)
      .subscribe(
        (returnedAssetLength: Assets[]) => {
          this.assetLength = returnedAssetLength;
          this.assetDataSource = new MatTableDataSource(returnedAssetLength);
          this.assetDataSource.sort = this.sort;
          this.assetDataSource.paginator = this.paginator;
        }
      );
    }
}

  paginatingAssets() {
    merge(this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        return this.filter.paginateAssets(
          this.filteredProfile,
          this.paginator.pageIndex
        );
      }),
      map((returnedAssets: Assets) => {

        return this.assets = returnedAssets;
      })
    ).subscribe((returnedAssets: Assets) => this.assets = returnedAssets);
  }
  // observeAssets() {
  //   this.filter.assetObersvable(this.filteredProfile)
  //   .subscribe(
  //     (returnedAssets: Assets[]) => {
  //       this.assetObservable = returnedAssets;
  //     }
  //   );
  // }
}
