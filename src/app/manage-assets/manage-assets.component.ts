import { Component, OnInit, ViewChild } from '@angular/core';
import { Assets } from './models/assets';
import { Contracts } from './models/contracts';
import { ActivatedRoute, Router } from '@angular/router';

import { ApifilterService } from './../services/apifilter.service';
import { AuthenticationService } from '../login/services/authentication.service';

import { Subscription, merge } from 'rxjs';

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

  displayedColumns: string[] = ['Name', 'Identifier', 'Description', 'Schedule'];

  contract: Contracts;

  assetObservable: Assets[];
  dataSource: MatTableDataSource<Assets>;

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

      // this.dataSource = new MatTableDataSource(Assets);
    }

  ngOnInit() {
    this.getAssets();
    this.assetsCount();
    this.getContract();
    // this.paginatingAssets();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAssets() {
    this.filter.assetsFilter(this.filteredProfile)
      .subscribe(
      (returnedAssets: Assets) => {
        this.assets = returnedAssets;
      }
    );
  }

  getContract() {
    const refNumber =
      this.route.snapshot.paramMap.get('refNumber');
      console.log(refNumber);
    this.filter.conByRef('', refNumber)
    .subscribe(
      (returnedContract: Contracts) => {
        this.contract = returnedContract;
      }
    );
    this.router.navigate(['/contractdetail/' + this.contract.refNumber]);
  }

  assetsCount() {
    this.filter.assetsFilter( this.currentProfile)
  .subscribe(
    (returnedAssets: Assets[]) => {
      this.assetLength = returnedAssets;
    }
  );
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
