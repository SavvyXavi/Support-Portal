import { Component, OnInit, ViewChild } from '@angular/core';
import { Assets } from './models/assets';
import { ActivatedRoute, Router } from '@angular/router';

import { ApifilterService } from './../services/apifilter.service';
import { AuthenticationService } from '../login/services/authentication.service';

import { Partner } from '../models/partner';
import { Filter } from '../models/filter';
import { Profile } from './../login/models/profile';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})

export class ManageAssetsComponent implements OnInit {
  assets: Assets;
  assetLength: Assets[];
  currentProfile: Profile;

  displayedColumns: string[] = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];

  partnerArr: Partner[];

  assetDataSource: MatTableDataSource<Assets>;

  searchKey: string;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private authserv: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.authserv.currentUser.subscribe(
        name => {
          this.currentProfile = name ;
        }
      );
    }

  ngOnInit() {
    this.getPartners();
    this.getAssets();
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
    if (this.currentProfile.companypartner === 'Partner') {
      this.filter.partAssetsFilter(this.currentProfile)
      .subscribe(
        (returnedAssets: Assets[]) => {
          this.assetLength = returnedAssets;
          this.assetDataSource = new MatTableDataSource(returnedAssets);
          this.assetDataSource.sort = this.sort;
          this.assetDataSource.paginator = this.paginator;
        }
      );
    } else {
      this.filter.custAssetsFilter(this.currentProfile)
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

  applyFilter() {
    this.assetDataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.assetDataSource.paginator) {
      this.assetDataSource.paginator.firstPage();
    }
  }

  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
}
