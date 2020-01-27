import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ApifilterService } from './../../services/apifilter.service';

import { Assets } from './../models/assets';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
  asset: Assets;

  displayedColumns: string[] = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];

  searchKey: string;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAssets();
  }

  getContracts() {

  }

  getAssets() {
    const assetid =
    this.route.snapshot.paramMap.get('identifier');
    this.filter.assetsBySerial(assetid)
    .subscribe(
      (returnedAsset: Assets) => {
        this.asset = returnedAsset;
        // this.filter.assetsBySchedule(this.contract.scheduleName)
        // .subscribe(
        //   (returnedAssets: Assets) => {
        //     this.assets = returnedAssets;
        //     console.log(JSON.parse(this.contract.scheduleName) + ' 2 parse');

        //   }
        // );
        // this.filter.assetsBySchedule(JSON.stringify(this.contract.scheduleName))
        // .subscribe(
        //   (returnedAssetLength: Assets[]) =>
        //     this.assetLength = returnedAssetLength
        // );
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
