import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApifilterService } from '../../services/apifilter.service';

import { Contracts } from '../models/contracts';
import { Assets } from '../../manage-assets/models/assets';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  contract: Contracts;
  assets: Assets;
  assetLength: Assets[];

  displayedColumns: string[] = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];
  assetDataSource: MatTableDataSource<Assets>;
  searchKey: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    const refNumber =
    this.route.snapshot.paramMap.get('refNumber');
    this.filter.conByRef(refNumber)
    .subscribe(
      (returnedContract: Contracts) => {
        this.contract = returnedContract;
        this.filter.assetsBySchedule(this.contract[0].ScheduleName)
        .subscribe(
          (returnedAssetLength: Assets[]) => {
          this.assetLength = returnedAssetLength;
          this.assetDataSource = new MatTableDataSource(returnedAssetLength);
          this.assetDataSource.sort = this.sort;
          this.assetDataSource.paginator = this.paginator;
          }
        );
        this.filter.assetsBySchedule(this.contract[0].ScheduleName)
        .subscribe(
          (returnedAsset: Assets) => {
            this.assets = returnedAsset;
          }
        );
      }
    );
  }

  groupAddress() {
    for ( let i = 0; i <= this.assetLength.length; i++) {
      if (this.assetLength[i].SiteAddress !== this.assetLength[i + 1].SiteAddress) {
        return this.assetLength[i].SiteAddress;
      }
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

  goToAssetDet(identifier: string) {
    this.router.navigate(['assetdetail/' + identifier], {relativeTo: this.route.root});
  }

  goBack(): void {
    this.location.back();
  }
}
