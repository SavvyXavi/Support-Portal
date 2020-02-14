import { PartnerList } from './../partner-list';
import { Component, OnInit } from '@angular/core';

import { Profile } from '../login/models/profile';
import { Tickets } from '../manage-assets/models/tickets';
import { Assets } from '../manage-assets/models/assets';
import * as moment from 'moment';

import { AuthenticationService } from '../login/services/authentication.service';
import { ProfileService } from '../login/services/profile.service';
import { ApifilterService } from './../services/apifilter.service';
import { ApiCallService } from './../manage-assets/services/api-call.service';

import { Subscription } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { Chart } from 'chart.js';

import { Partner } from './../models/partner';
import { Contracts } from './../manage-assets/models/contracts';
import { Customer } from './../admin/models/customer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentProfile: Profile;
  currentProfileSubscription: Subscription;
  profiles: Profile[];

  contractLength: number;
  assetLength: number;
  ticketLength: Tickets[];
  companyLength: Customer[];

  contractChartData: Date[];

  partnerArr: Partner[];

  contractsData = [];
  assetsData = [];
  tickets: Tickets;

  assets: Assets[];
  contractDays: string[];

  now = 0;
  fifteenDays = 0;
  thirtyDays = 0;
  sixtyDays = 0;
  ninetyDays = 0;
  plus = 0;

  active = 0;
  terminated = 0;
  unmapped = 0;
  yetToStart = 0;

  constructor(
    private authenticationService: AuthenticationService,
    private profileService: ProfileService,
    private api: ApiCallService,
    private filter: ApifilterService
    ) {
      this.currentProfileSubscription = this.authenticationService.currentUser.subscribe(
        profile => {
          this.currentProfile = profile;
        }
      );
     }

  ngOnInit() {
    this.getPartners();
    this.contractsChart();
    this.assetsChart();
    this.ticketsCount();
    this.companiesCount();
  }

  getPartners() {
    this.filter.getPartners()
    .subscribe(
      returnedPartners => this.partnerArr = returnedPartners
    );
  }

  filterPartner(partner: String) {
    return this.partnerArr.find(company => company.CompanyName === partner);
  }

  ticketsCount() {
    if (this.currentProfile.companypartner === 'Partner') {
      this.filter.partTicketsFilter(this.currentProfile)
      .subscribe(
        (returnedAssetLength: Tickets[]) => this.ticketLength = returnedAssetLength
      );
    } else if (this.currentProfile.companypartner === 'Company') {
      this.filter.cusTicketsFilter(this.currentProfile.company)
      .subscribe(
        (returnedTicketLength: Tickets[]) => this.ticketLength = returnedTicketLength
      );
    }
  }

  companiesCount() {
    this.filter.customerFilter(this.currentProfile)
    .subscribe(
      (returnedCompanies: Customer[]) => {
        this.companyLength = returnedCompanies;
      }
    );
  }

  ticketsChart() {
    this.api.getTickets().subscribe(
      (returnedTickets: Tickets) => {
        this.tickets = returnedTickets;
      }
    );
  }

  contractsChart() {
    const status = [];
    if (this.currentProfile.companypartner === 'Partner') {
      this.filter.partConFilter(this.currentProfile)
      .subscribe(
        (returnedCons: Contracts[]) => {
          this.contractLength = returnedCons.length;
        }
      );
      this.filter.conByDays(this.currentProfile)
      .subscribe(
        (returnedDays: string[]) => {
          this.contractDays = returnedDays;
          console.log(this.contractDays);
          // for (let i = 0; i <= this.contractDays.length; i++) {
          //   switch (Number(this.contractDays[i]).valueOf()) {
          //     case <= 14:
          //       this.now++;
          //     break;
          //   }
          // }
          // for (let i = 0; i <= this.contractDays.length; ) {
          //   if (Number(this.contractDays[i]) > -1 || Number(this.contractDays[i]) <= 14) {
          //     this.now++;
          //   } else if (Number(this.contractDays[i]) <= 29) {
          //     this.fifteenDays++;
          //   } else if (Number(this.contractDays[i]) <= 59) {
          //     this.thirtyDays++;
          //   }
          // }

    this.contractsData = new Chart('contracts', {
        type: 'pie',
        data: {
          datasets: [{
              label: '# of Contracts',
              data: [this.fifteenDays, this.thirtyDays, this.sixtyDays, this.ninetyDays],
              backgroundColor: [
                  'rgba(255, 0, 0, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderColor: [
                  'rgba(255, 0, 0, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
        },
        options: {}
    } );
        }
        );

    } else {
      this.filter.custConFilter(this.currentProfile)
      .subscribe(
        (returnedCons: Contracts[]) => {
          this.contractLength = returnedCons.length;
        }
      );
      this.filter.conByDays(this.currentProfile)
      .subscribe(
        (returnedDays: string[]) => {
          this.contractDays = returnedDays;
          console.log(this.contractDays);
          // for (let i = 0; i <= this.contractDays.length; i++) {
          //   switch (Number(this.contractDays[i]).valueOf()) {
          //     case <= 14:
          //       this.now++;
          //     break;
          //   }
          // }
          // for (let i = 0; i <= this.contractDays.length; ) {
          //   if (Number(this.contractDays[i]) > -1 || Number(this.contractDays[i]) <= 14) {
          //     this.now++;
          //   } else if (Number(this.contractDays[i]) <= 29) {
          //     this.fifteenDays++;
          //   } else if (Number(this.contractDays[i]) <= 59) {
          //     this.thirtyDays++;
          //   }
          // }

    this.contractsData = new Chart('contracts', {
        type: 'pie',
        data: {
          datasets: [{
              label: '# of Contracts',
              data: [this.fifteenDays, this.thirtyDays, this.sixtyDays, this.ninetyDays],
              backgroundColor: [
                  'rgba(255, 0, 0, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderColor: [
                  'rgba(255, 0, 0, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
        },
        options: {}
    } );
        }
        );
      }
    }


  assetsChart() {
    let status = [];
    if (this.currentProfile.companypartner === 'Partner') {
      this.filter.partAssetsFilter(this.currentProfile)
      .subscribe(
        (returnedAssets: Assets[]) => {
          this.assetLength = returnedAssets.length;
          this.assets = returnedAssets;
          status = this.assets.map(asset => asset.ContractCoverage);
        for (let i = 0; i <= status.length; i++) {
          if (status[i] === 'Active') {
            this.active++;
          } else if (status[i] === 'Terminated') {
            this.terminated++;
          } else if (status[i] === 'Unmapped') {
            this.unmapped++;
          } else if (status[i] === 'Yet to Start') {
            this.yetToStart++;
          }
        }
         this.contractsData = new Chart('assets', {
          type: 'pie',
          data: {
            datasets: [{
              label: 'Asset Status',
                data: [this.active, this.terminated, this.unmapped, this.yetToStart],
                backgroundColor: [
                    'rgba(255, 0, 0, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {}
        });
      }
      );
    } else {
      this.filter.custAssetsFilter(this.currentProfile)
      .subscribe(
        (returnedAssets: Assets[]) => {
          this.assetLength = returnedAssets.length;
          this.assets = returnedAssets;
          status = this.assets.map(asset => asset.ContractCoverage);
        for (let i = 0; i <= status.length; i++) {
          if (status[i] === 'Active') {
            this.active++;
          } else if (status[i] === 'Terminated') {
            this.terminated++;
          } else if (status[i] === 'Unmapped') {
            this.unmapped++;
          } else if (status[i] === 'Yet to Start') {
            this.yetToStart++;
          }
        }
        this.assetsData = new Chart('assets', {
          type: 'pie',
          data: {
            datasets: [{
              label: 'Asset Status',
                data: [this.active, this.terminated, this.unmapped, this.yetToStart],
                backgroundColor: [
                    'rgba(255, 0, 0, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {}
    });
  }

      );
    }

  }

   loadAllUsers() {
    this.profileService.getAll().pipe(first()).subscribe( profile => {
      this.profiles = profile;
    });
  }
}
