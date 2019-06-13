import { Component, OnInit } from '@angular/core';
import { Assets } from '../models/assets';

import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
  assets: Assets;

  constructor(private api: ApiCallService) { }

  ngOnInit() {
  }

  getTickets() {
    this.api.getAssets()
    .subscribe(
      (returnedAssets: Assets) => {
        this.assets = returnedAssets;
      }
    );
  }
}
