import { Component, OnInit } from '@angular/core';

import { OemService } from '../services/oem.service';
import { Monitor } from '../models/monitor';

@Component({
  selector: 'app-local-monitor',
  templateUrl: './local-monitor.component.html',
  styleUrls: ['./local-monitor.component.css']
})
export class LocalMonitorComponent implements OnInit {
  monitor: Monitor;

  constructor(
    private api: OemService
  ) { }

  ngOnInit() {
    this.api.getMon()
    .subscribe(
      (returnedMon: Monitor) => {
        this.monitor = returnedMon;
      }
    );
  }

  pullMon() {
    this.api.getMon()
    .subscribe(
      (returnedMon: Monitor) => {
        this.monitor = returnedMon;
      }
    );
  }

}
