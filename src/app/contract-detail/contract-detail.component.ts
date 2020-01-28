import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApifilterService } from './../services/apifilter.service';
import { Filter } from './../models/filter';

import { Contracts } from './../manage-assets/models/contracts';
import { Assets } from './../manage-assets/models/assets';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  // contract: Contract;
  contract: Contracts;
  assets: Assets;
  assetLength: Assets[];
  filteredProfile: Filter;

  displayedColumns: string[] = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];
  assetDataSource: MatTableDataSource<Assets>;

  searchKey: string;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getContracts() {

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
            console.log(this.assets);
          }
        );
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
