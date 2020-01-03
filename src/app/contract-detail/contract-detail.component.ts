import { Component, OnInit, Input } from '@angular/core';

import { Contract } from './../models/contract';
import { Contracts } from './../manage-assets/models/contracts';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  contract: Contract;
  contracts: Contracts;
  constructor() { }

  ngOnInit() {
  }

}
