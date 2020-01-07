import { Component, OnInit } from '@angular/core';
import { Profile } from './../login/models/profile';
import { Tickets } from './../manage-assets/models/tickets';
import { Assets } from './../manage-assets/models/assets';

import { Subscription, from } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { FuncappService } from './../services/funcapp.service';
import { AuthenticationService } from './../login/services/authentication.service';
import { ProfileService } from './../login/services/profile.service';
import { ApiCallService } from './../manage-assets/services/api-call.service';
import { ApifilterService } from './../services/apifilter.service';

import { Contracts } from '../manage-assets/models/contracts';
import { Customer } from '../admin/models/customer';
import { Contract } from '../models/contract';
import { Chart } from 'chart.js';
import { Partner } from './../models/partner';

@Component({
  selector: 'app-reliant-dash',
  templateUrl: './reliant-dash.component.html',
  styleUrls: ['./reliant-dash.component.css']
})
export class ReliantDashComponent implements OnInit {

  currentProfile: Profile;
  currentProfileSubscription: Subscription;
  profiles: Profile[];

  partner: Partner;
  partnerSubscription: Subscription;


  contractLength: Contracts[];
  assetLength: Assets[];
  ticketLength: Tickets[];
  companyLength: Customer[];

  contractsData = [];
  assetsData = [];
  tickets: Tickets;

  assets: Assets;

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
    this.displayData();
    this.contractsCount();
    this.assetsCount();
    this.ticketsCount();
    this.companiesCount();
  }

  // ngOnDestroy() {
  //   this.currentProfileSubscription.unsubscribe();
  // }

  getPartners() {
    this.filter.getPartners(this.currentProfile.partner)
      .subscribe(
        partner  => {
          this.partner = partner;
          sessionStorage.setItem('CompanyName', this.partner.CompanyName);
        }
      );
  }

  contractsCount() {
    if (this.partner.CompanyName.includes(this.currentProfile.partner)) {
      this.filter.partConFilter(this.currentProfile)
      .subscribe(
        (returnedContractsLength: Contracts[]) => {
          this.contractLength = returnedContractsLength;
        }
      );
      console.log('Partner Included: ' + this.partner.CompanyName);
    } else {
      this.filter.custConFilter(this.currentProfile)
      .subscribe(
        (returnedContractsLength: Contracts[]) => {
          this.contractLength = returnedContractsLength;
        }
      );
      console.log('Company not included');
    }
  }

  assetsCount() {
      this.filter.assetsFilter( this.currentProfile)
    .subscribe(
      (returnedAssets: Assets[]) => {
        this.assetLength = returnedAssets;
      }
    );
  }

  ticketsCount() {
    this.filter.ticketsFilter(this.currentProfile)
    .subscribe(
      (returnedTickets: Tickets[]) => {
        this.ticketLength = returnedTickets;
      }
    );
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

  displayData() {
    let array = this.filter.partConFilter(this.currentProfile).subscribe(
      res => {

        // const price = res.map(res => res.AnnualValue);
        const length = Object.keys(res).map(function(key) {
          return [String(key), res[key]];
        });

        console.log(length);
        // console.log(price);
      }
    );
  }

  getAssets() {
    this.api.getAssets()
    .subscribe(
      (returnedAssets: Assets) => {
        this.assets = returnedAssets;
      }
    );
  }

  contractsChart() {
    const status = [];
    this.filter.partConFilter(this.currentProfile).subscribe(
      (res: Contract[]) => {
        // status.push(res.status);
        const length = Object.keys(res).map(function(key) {
          return [String(key), res[key]];
        });
        console.log(res);
        // console.log(res.status);
        // console.log(length);
      }
    );

    this.contractsData = new Chart('contracts', {
        type: 'pie',
        data: {
          labels: status,
          datasets: [{
              label: '# of Contracts',
              data: [12, 19, 3, 5, 2, 3],
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
    });
  }

  assetsChart() {
   this.assetsData = new Chart('assets', {
      type: 'pie',
      data: {
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
              ' rgba(255, 0, 0, 1)',
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
});
  }

  deleteProfile(id: number) {
     this.profileService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    });
  }

   loadAllUsers() {
    this.profileService.getAll().pipe(first()).subscribe( profile => {
      this.profiles = profile;
    });
  }

}
