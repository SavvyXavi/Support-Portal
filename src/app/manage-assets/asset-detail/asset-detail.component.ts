import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ApifilterService } from './../../services/apifilter.service';

import { Assets } from './../models/assets';
import { Contracts } from '../../contracts/models/contracts';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
  asset: Assets;
  contract: Contracts;
  contractLength: Contracts[];

  displayedColumns: string[] = ['Contract Name', 'Start Date', 'Renewal Date', 'Contract#', 'Customer', 'Status'];
  contractDataSource: MatTableDataSource<Contracts>;
  searchKey: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    const assetid =
    this.route.snapshot.paramMap.get('identifier');
    this.filter.assetsBySerial(assetid)
    .pipe(first())
    .subscribe(
        (returnedAsset: Assets) => {
          this.asset = returnedAsset;
          console.log(this.asset);
          this.filter.conByName(this.asset[0].Schedule)
          .subscribe(
            (returnedContractLength: Contracts[]) => {
            this.contractLength = returnedContractLength;
            this.contractDataSource = new MatTableDataSource(returnedContractLength);
            this.contractDataSource.sort = this.sort;
            this.contractDataSource.paginator = this.paginator;
            }
          );
          this.filter.conByName(this.asset.Schedule)
          .subscribe(
            (returnedContract: Contracts) => {
              this.contract = returnedContract;
            }
          );
        }
    );
  }

  applyFilter() {
    this.contractDataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.contractDataSource.paginator) {
      this.contractDataSource.paginator.firstPage();
    }
  }

  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  goBack(): void {
    this.location.back();
  }
}
