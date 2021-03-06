import { Filter } from './../models/filter';
import { Component, OnInit } from '@angular/core';

import { Profile } from '../index/models/profile';
import { Tickets } from '../tickets/models/tickets';
import { Assets } from '../manage-assets/models/assets';

import { AuthenticationService } from '../index/services/authentication.service';
import { ApifilterService } from './../services/apifilter.service';
import { DashService } from './services/dash.service';

import { Chart } from 'chart.js';
import * as mapboxgl from 'mapbox-gl';
import { CommonModule } from '@angular/common';
import { Partner } from './../models/partner';
import { Contracts } from './../contracts/models/contracts';
import { Customer } from './../admin/models/customer';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentProfile: Profile;
  profiles: Profile[];

  contractLength: number;
  assetLength: number;
  ticketLength: Tickets[];
  companyLength: Customer[];

  partnerArr: Partner[];

  contractsData = [];
  assetsData = [];
  tickets: Tickets[];
  ticketStatus: string[];

  assets: Assets[];
  contractDays: string[];
  id: Filter[];

  now = 0;
  thirtyDays = 0;
  ninetyDays = 0;
  plus = 0;

  active = 0;
  terminated = 0;
  notcovered = 0;
  yetToStart = 0;

  new = 0;
  assigned = 0;
  inProcess = 0;
  closed = 0;

  constructor(
    private authenticationService: AuthenticationService,
    private filter: ApifilterService,
    private dashServ: DashService
    ) {
      this.authenticationService.currentUser.subscribe(
        profile => {
          this.currentProfile = profile;
        }
      );
     }

  ngOnInit() {
    this.getPartners();
    this.contractsChart();
    this.assetsChart();
    this.companiesCount();
    this.ticketsChart();

    this.geoLocation();
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

  companiesCount() {
    this.filter.customerFilter(this.currentProfile)
    .subscribe(
      (returnedCompanies: Customer[]) => {
        this.companyLength = returnedCompanies;
      }
    );
  }

  ticketsChart() {
    if (this.currentProfile.companypartner === 'Partner') {
                this.filter.locpartTicketsFilter(this.currentProfile)
                .subscribe(
                  (returnedTickets: Tickets[]) => this.ticketLength = returnedTickets
                );
                this.dashServ.locpartTicketsFilter(this.currentProfile)
                .subscribe(
                  (tickets: Tickets[]) => {
                    this.tickets = tickets;
                    this.ticketStatus = this.tickets.map( t => t.Status);
                    for (let i = 0;  i <= this.ticketStatus.length; i++) {
                      if (this.ticketStatus[i] === 'New') {
                        this.new++;
                      } else if (this.ticketStatus[i] === 'Assigned') {
                        this.assigned++;
                      } else if (this.ticketStatus[i] === 'Fixed') {
                        this.closed++;
                      } else {
                        this.inProcess++;
                      }
                    }
                  }
                );
    } else {
      this.filter.cusTicketsFilter(this.currentProfile.company)
      .subscribe(
        (returnedTicketLength: Tickets[]) => this.ticketLength = returnedTicketLength
      );
      this.dashServ.cusTicketsFilter(this.currentProfile.company)
      .subscribe(
        (tickets: Tickets[]) => {
          this.tickets = tickets;
          this.ticketStatus = this.tickets.map( t => t.Status);
          for (let i = 0;  i <= this.ticketStatus.length; i++) {
            if (this.ticketStatus[i] === 'New') {
              this.new++;
            } else if (this.ticketStatus[i] === 'Assigned') {
              this.assigned++;
            } else if (this.ticketStatus[i] === 'Fixed') {
              this.closed++;
            } else {
              this.inProcess++;
            }
          }
        }
      );
    }
  }

  contractsChart() {
    if (this.currentProfile.companypartner === 'Partner') {
      this.filter.partConFilter(this.currentProfile)
      .subscribe(
        (returnedCons: Contracts[]) => {
          this.contractLength = returnedCons.length;
        }
      );
      this.filter.pConByDays(this.currentProfile)
      .subscribe(
        (returnedDays: string[]) => {
          this.contractDays = returnedDays;
          for (let i = 0; i <= this.contractDays.length; i++) {
            if (Number(this.contractDays[i]) > -1 && Number(this.contractDays[i]) <= 30) {
              this.now++;
            } else if (Number(this.contractDays[i]) > 30 && Number(this.contractDays[i]) <= 90) {
              this.thirtyDays++;
            } else if (Number(this.contractDays[i]) > 90) {
              this.plus++;
            }
          }

    this.contractsData = new Chart('contracts', {
        type: 'pie',
        data: {
          labels: ['Now', 'Thirty Days', 'Ninety plus'],
          datasets: [{
              data: [this.now, this.thirtyDays, this.plus],
              backgroundColor: [
                  'rgba(241, 12, 12, 1)',
                  'rgba(241, 242, 12, 1)',
                  'rgba(85, 190, 88, 1)'
              ],
              borderColor: [
                'rgba(241, 12, 12, 1)',
                'rgba(241, 242, 12, 1)',
                'rgba(85, 190, 88, 1)'
              ],
              borderWidth: 1
          }]
        },
        options: {
          legend: {
            position: 'left'
          },
          tooltips: {
              enabled: true,
              callbacks: {
                label: function(tooltipItem, data) {
                  // get the data label and data value to display
                  // convert the data value to local string so it uses a comma seperated number
                  let dataLabel = data.labels[tooltipItem.index];
                  let value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                  // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                  if (Chart.helpers.isArray(dataLabel)) {
                    // show value on first line of multiline label
                    // need to clone because we are changing the value
                    dataLabel = dataLabel.slice();
                    dataLabel[0] += value;
                  } else {
                    dataLabel += value;
                  }

                  // return the text to display on the tooltip
                  return dataLabel;
                }
              }
          }
        }
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
      this.filter.cConByDays(this.currentProfile)
      .subscribe(
        (returnedDays: string[]) => {
          this.contractDays = returnedDays;
          for (let i = 0; i <= this.contractDays.length; i++) {
            if (Number(this.contractDays[i]) > -1 && Number(this.contractDays[i]) <= 29) {
              this.now++;
            } else if (Number(this.contractDays[i]) <= 89) {
              this.thirtyDays++;
            } else if (Number(this.contractDays[i]) > 90) {
              this.plus++;
            }
          }

    this.contractsData = new Chart('contracts', {
        type: 'pie',
        data: {
          datasets: [{
              label: '# of Contracts',
              data: [this.now, this.thirtyDays, this.plus],
              backgroundColor: [
                'rgba(241, 12, 12, 1)',
                'rgba(241, 242, 12, 1)',
                'rgba(85, 190, 88, 1)'
              ],
              borderColor: [
                'rgba(241, 12, 12, 1)',
                'rgba(241, 242, 12, 1)',
                'rgba(85, 190, 88, 1)'
              ],
              borderWidth: 1
          }]
        },
        options: {
          legend: {
            position: 'left'
          },
          tooltips: {
              enabled: true,
              callbacks: {
                label: function(tooltipItem, data) {
                  // get the data label and data value to display
                  // convert the data value to local string so it uses a comma seperated number
                  let dataLabel = data.labels[tooltipItem.index];
                  let value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                  // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                  if (Chart.helpers.isArray(dataLabel)) {
                    // show value on first line of multiline label
                    // need to clone because we are changing the value
                    dataLabel = dataLabel.slice();
                    dataLabel[0] += value;
                  } else {
                    dataLabel += value;
                  }

                  // return the text to display on the tooltip
                  return dataLabel;
                }
              }
          }
        }
    } );
        }
        );
      }
    }


  assetsChart() {
    let status = [];
    if (this.currentProfile.companypartner === 'Partner') {
              const id = this.currentProfile.partner;
              this.filter.locpartAssetFilter(this.currentProfile)
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
                    } else if (status[i] === 'NotCovered') {
                      this.notcovered++;
                    } else if (status[i] === 'Unmapped') {
                      this.yetToStart++;
                    }
                  }
                  this.assetsData = new Chart('assets', {
                    type: 'pie',
                    data: {
                      labels: ['Active', 'Terminated', 'Not Covered', 'Yet to Start'],
                      datasets: [{
                        label: 'Asset Status',
                          data: [this.active, this.terminated, this.notcovered, this.yetToStart],
                          backgroundColor: [
                            'rgba(85, 190, 88, 1)',
                            'rgba(241, 242, 12, 1)',
                            'rgba(241, 12, 12, 1)',
                            'rgba(75, 192, 192, 1)',
                          ],
                          borderColor: [
                            'rgba(85, 190, 88, 1)',
                            'rgba(241, 242, 12, 1)',
                            'rgba(241, 12, 12, 1)',
                            'rgba(75, 192, 192, 1)',
                          ],
                          borderWidth: 1
                      }]
                   },
                  options: {
                    legend: {
                      position: 'left'
                    },
                    tooltips: {
                        enabled: true,
                        callbacks: {
                          label: function(tooltipItem, data) {
                            // get the data label and data value to display
                            // convert the data value to local string so it uses a comma seperated number
                            let dataLabel = data.labels[tooltipItem.index];
                            let value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                            // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                            if (Chart.helpers.isArray(dataLabel)) {
                              // show value on first line of multiline label
                              // need to clone because we are changing the value
                              dataLabel = dataLabel.slice();
                              dataLabel[0] += value;
                            } else {
                              dataLabel += value;
                            }

                            // return the text to display on the tooltip
                            return dataLabel;
                          }
                        }
                    }
                  }
                  });
                }
              );
    } else {
      this.filter.locCustAssetsFilter(this.currentProfile)
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
          } else if (status[i] === 'Not covered') {
            this.notcovered++;
          } else if (status[i] === 'Yet to Start') {
            this.yetToStart++;
          }
        }
        this.assetsData = new Chart('assets', {
          type: 'pie',
          data: {
            datasets: [{
              label: 'Asset Status',
                data: [this.active, this.terminated, this.notcovered, this.yetToStart],
                backgroundColor: [
                  'rgba(85, 190, 88, 1)',
                  'rgba(241, 242, 12, 1)',
                  'rgba(241, 12, 12, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderColor: [
                  'rgba(85, 190, 88, 1)',
                  'rgba(241, 242, 12, 1)',
                  'rgba(241, 12, 12, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
          legend: {
            position: 'left'
          },
          tooltips: {
              enabled: true,
              callbacks: {
                label: function(tooltipItem, data) {
                  // get the data label and data value to display
                  // convert the data value to local string so it uses a comma seperated number
                  let dataLabel = data.labels[tooltipItem.index];
                  let value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                  // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                  if (Chart.helpers.isArray(dataLabel)) {
                    // show value on first line of multiline label
                    // need to clone because we are changing the value
                    dataLabel = dataLabel.slice();
                    dataLabel[0] += value;
                  } else {
                    dataLabel += value;
                  }

                  // return the text to display on the tooltip
                  return dataLabel;
                }
              }
          }
        }
    });
  }

      );
    }

  }

  geoLocation() {
     mapboxgl.accessToken = 'pk.eyJ1IjoiZGhzZW5zZWkiLCJhIjoiY2s3bTg0cGt2MDB4ZDNscGNlbGFhNGYyYiJ9.gasbmmixfK9Vfry149FMDQ';
     const map = new mapboxgl.Map(
      {
     container: 'geoMap',
     style: 'mapbox://styles/mapbox/streets-v9',
     zoom: 8,
     center: [-84.36167, 34.02306]
     });

     const geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-84.513950, 34.03258]
        },
        properties: {
          title: 'Dr. No\'s Comics',
          description: 'Sandy Springs - in'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-84.38217, 34.04408]
        },
        properties: {
          title: 'Heroic Gaming',
          description: 'Roswell'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-84.29417, 34.07528]
        },
        properties: {
          title: 'Noble1Solutions',
          description: 'Alpharetta'
        }
      }]
    };


// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h5>' + marker.properties.title + '</h5><p>' + marker.properties.description + '</p>'))
    .addTo(map);
});

  }

  //  loadAllUsers() {
  //   this.profileService.getAll().pipe(first()).subscribe( profile => {
  //     this.profiles = profile;
  //   });
  // }
}
