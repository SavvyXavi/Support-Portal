import { Component, OnInit } from '@angular/core';
import { SupportService } from './services/support.service';
import { Support } from './models/support';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  supports: Support;

  constructor(
    private api: SupportService
  ) { }

  ngOnInit() {
    this.pullSupport();
  }

  pullSupport() {
    this.api.getSupport()
    .subscribe(
      (returnedSupport: Support) => {
        this.supports = returnedSupport;
      }
    );
  }
}
