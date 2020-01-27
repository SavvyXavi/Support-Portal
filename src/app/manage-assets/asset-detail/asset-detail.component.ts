import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ApifilterService } from './../../services/apifilter.service';

import { Assets } from './../models/assets';
import { Contracts } from './../models/contracts';
import { map } from 'rxjs/operators';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
  asset: Assets;
  contract: Contracts;

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
    this.getContract();
  }

  getAssets() {
    const assetid =
    this.route.snapshot.paramMap.get('identifier');
    this.filter.assetsBySerial(assetid)
    .pipe(
      map(
        (returnedAsset: Assets) => {
          this.asset = returnedAsset;
          console.log(this.asset);
        }
      )
    );
    console.log(this.asset + ' 2');
  }

  getContract() {
    this.filter.conByName(this.asset.schedule)
    .subscribe(
      (returnedContract: Contracts) => {
        this.contract = returnedContract;
        console.log(this.contract);
      }

    );
  }

  goBack(): void {
    this.location.back();
  }
}
