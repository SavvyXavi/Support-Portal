import { SpecContract } from './../manage-assets/models/spec-contract';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApifilterService } from './../services/apifilter.service';
import { Filter } from './../models/filter';

import { Contracts } from './../manage-assets/models/contracts';
import { Assets } from './../manage-assets/models/assets';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  // contract: Contract;
  @Input() contract: Contracts;
  assets: Assets;
  assetLength: Assets[];

  filteredProfile: Filter;
  constructor(
    private filter: ApifilterService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getContract();
    this.getAssets();
  }

  getContract() {
    const refNumber =
      this.route.snapshot.paramMap.get('refNumber');
    this.filter.conByRef(refNumber)
    .subscribe(
      (returnedContract: Contracts) => {
        this.contract = returnedContract;
      }
    );
  }

  getAssets() {
      this.filter.assetsBySchedule(this.contract)
      .subscribe(
        (returnedAssets: Assets) => {
          this.assets = returnedAssets;
        }
      );
      this.filter.assetsBySchedule(this.contract)
      .subscribe(
        (returnedAssetLength: Assets[]) => {
          this.assetLength = returnedAssetLength;
        }
      );
  }

  goBack(): void {
    this.location.back();
  }
}
