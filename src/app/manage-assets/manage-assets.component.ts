import { Component, OnInit } from '@angular/core';
import { Assets } from './models/assets';

import { ApiCallService } from './services/api-call.service';

@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  assets: Assets;

  constructor(private api: ApiCallService) { }

  ngOnInit() {
    this.getAssets();
  }

  getAssets() {
    this.api.getAssets()
    .subscribe(
      (returnedAssets: Assets) => {
        this.assets = returnedAssets;
      }
    );
  }
}
