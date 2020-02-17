import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../index/index/services/authentication.service';
import { OemService } from '../services/oem.service';
import { Monitor } from '../models/monitor';
import { Profile } from '../../index/index//models/profile';
import { LogoList } from '../../logo-list';

@Component({
  selector: 'app-local-monitor',
  templateUrl: './local-monitor.component.html',
  styleUrls: ['./local-monitor.component.css']
})
export class LocalMonitorComponent implements OnInit {
  monitor: Monitor;
  currentProfile: Profile;
  logo = LogoList;
  displayLo: any;

  constructor (
    private router: Router,
    private api: OemService,
    private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(
          name => {
            this.currentProfile = name;
          }
        );
      }

  ngOnInit() {
    this.api.getMon()
    .subscribe(
      (returnedMon: Monitor) => {
        this.monitor = returnedMon;
      }
    );
  }
  displayLogo() {
    console.log(this.currentProfile);
   return this.displayLo = this.logo.find(x => x.CompanyName === this.currentProfile?.partner);
 }

 getLogo() {
  this.api.getLogo()
  .subscribe(
    (logolist: any) => {
      this.logo = logolist.find(x => x.CompanyName === this.currentProfile.partner);
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
