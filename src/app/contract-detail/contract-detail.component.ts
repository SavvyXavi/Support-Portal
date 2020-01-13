import { SpecContract } from './../manage-assets/models/spec-contract';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApifilterService } from './../services/apifilter.service';
import { Filter } from './../models/filter';

import { Contract } from './../models/contract';
import { Contracts } from './../manage-assets/models/contracts';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  // contract: Contract;
  @Input() contract: Contracts;

  filteredProfile: Filter;
  constructor(
    private filter: ApifilterService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getContract();
  }

  getContract() {
    const refNumber =
      this.route.snapshot.paramMap.get('refNumber');
      console.log(refNumber);
    this.filter.conByRef(refNumber, '')
    .subscribe(
      (returnedContract: Contracts) => {
        this.contract = returnedContract;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
