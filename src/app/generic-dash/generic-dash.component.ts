import { PartnerList } from './../partner-list';
import { Component, OnInit } from '@angular/core';

import { Profile } from '../login/models/profile';
import { Tickets } from '../manage-assets/models/tickets';
import { Assets } from '../manage-assets/models/assets';

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
import { Contract } from './../models/contract';

@Component({
  selector: 'app-generic-dash',
  templateUrl: './generic-dash.component.html',
  styleUrls: ['./generic-dash.component.css']
})
export class GenericDashComponent implements OnInit {

  currentProfile: Profile;
  currentProfileSubscription: Subscription;
  profiles: Profile[];

  contractLength: Contracts[];
  assetLength: Assets[];
  ticketLength: Tickets[];
  companyLength: Customer[];

  contractChartData: Date[];

  partnerArr: Partner[];

  contractsData = [];
  assetsData = [];
  tickets: Tickets;

  assets: Assets[];

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

    // this.getAssets();
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

  contractsCount() {
    if (this.filterPartner(this.currentProfile.partner)) {
      this.filter.partConFilter(this.currentProfile)
      .subscribe(
        (returnedConLength: Contracts[]) => this.contractLength = returnedConLength
      );
    } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
      this.filter.custConFilter(this.currentProfile)
      .subscribe(
        (returnedConLength: Contracts[]) => this.contractLength = returnedConLength
      );
    }
  }

  assetsCount() {
    if (this.filterPartner(this.currentProfile.partner)) {
      this.filter.partAssetsFilter(this.currentProfile)
      .subscribe(
        (returnedAssetLength: Assets[]) => this.assetLength = returnedAssetLength
      );
    } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
      this.filter.custAssetsFilter(this.currentProfile)
      .subscribe(
        (returnedAssetLength: Assets[]) => this.assetLength = returnedAssetLength
      );
    }
  }

  ticketsCount() {
    if (this.filterPartner(this.currentProfile.partner)) {
      this.filter.partTicketsFilter(this.currentProfile)
      .subscribe(
        (returnedAssetLength: Tickets[]) => this.ticketLength = returnedAssetLength
      );
    } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
      // this.filter.custAssetsFilter(this.currentProfile)
      // .subscribe(
      //   (returnedAssetLength: Assets[]) => this.assetLength = returnedAssetLength
      // );
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

  displayData() {
    let array = this.filter.partConFilter(this.currentProfile).subscribe(
      res => {

        // const price = res.map(res => res.AnnualValue);
        const length = Object.keys(res).map(function(key) {
          return [String(key), res[key]];
        });

        // console.log(length);
        // console.log(price);
      }
    );
  }

  getAssets() {
    if (this.filterPartner(this.currentProfile.partner)) {
      return this.filter.partAssetsFilter(this.currentProfile)
      .subscribe(
        (returnedAssets: Assets[]) => {
          return this.assets = returnedAssets;
          // this.assetDataSource = new MatTableDataSource(returnedAssets);
          // this.assetDataSource.sort = this.sort;
          // this.assetDataSource.paginator = this.paginator;
        }
      );
    } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
       return this.filter.custAssetsFilter(this.currentProfile)
      .subscribe(
        (returnedAssetLength: Assets[]) => {
          return this.assets = returnedAssetLength;
          // this.assetDataSource = new MatTableDataSource(returnedAssetLength);
          // this.assetDataSource.sort = this.sort;
          // this.assetDataSource.paginator = this.paginator;
        }
      );
    }
  }

  contractsChart() {
    const status = [];
    this.filter.partConFilter(this.currentProfile).subscribe(
      (res: Contract[]) => {
        // this.contractChartData = JS;
        // if(date > new Date(2011, 0, 1))
        // filteredData.push(obj);
        const length = Object.keys(res).map(function(key) {
          return [String(key), res[key]];
        });

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
    let status;
    if (this.filterPartner(this.currentProfile.partner)) {
      this.filter.partAssetsFilter(this.currentProfile)
      .subscribe(
        (returnedAssets: Assets[]) => {
          this.assets = returnedAssets;
          console.log(this.assets);
          console.log('in first if');
          // this.assetDataSource = new MatTableDataSource(returnedAssets);
          // this.assetDataSource.sort = this.sort;
          // this.assetDataSource.paginator = this.paginator;
        return status = this.assets.map(asset => asset.ContractCoverage);
        }
      );
    } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
      this.filter.custAssetsFilter(this.currentProfile)
      .subscribe(
        (returnedAssets: Assets[]) => {
          this.assets = returnedAssets;
          console.log(this.assets);
          console.log('in second if');
          // this.assetDataSource = new MatTableDataSource(returnedAssetLength);
          // this.assetDataSource.sort = this.sort;
          // this.assetDataSource.paginator = this.paginator;
        }
      );
    }
    console.log(status);

    this.contractsData = new Chart('assets', {
      type: 'pie',
      data: {
        datasets: [{
            label: status,
            data: [12, 19, 3, 5],
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

   loadAllUsers() {
    this.profileService.getAll().pipe(first()).subscribe( profile => {
      this.profiles = profile;
    });
  }
}
