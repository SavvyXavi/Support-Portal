import { Component, OnInit } from '@angular/core';

import { OemService } from '../services/oem.service';
import { Oem } from '../models/oem';

@Component({
  selector: 'app-oem',
  templateUrl: './oem.component.html',
  styleUrls: ['./oem.component.css']
})
export class OemComponent implements OnInit {
  oems: Oem;

  constructor(
    private api: OemService
  ) { }

  ngOnInit() {
  }

  pullOem() {
    this.api.getOem()
    .subscribe(
      (returnedOem: Oem) => {
        this.oems = returnedOem;
      }
    );
  }
}
