import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../login/services/authentication.service';
import { Subscription } from 'rxjs';
import { FuncappService } from '../services/funcapp.service';
import { Info } from '../models/info';
import { Profile } from '../login/models/profile';
import { ProfileService } from '../login/services/profile.service';
import { first, map } from 'rxjs/operators';
import { Chart } from 'chart.js';

import { ApiCallService } from './../manage-assets/services/api-call.service';
import { Tickets } from './../manage-assets/models/tickets';
import { Assets } from './../manage-assets/models/assets';

@Component({
  selector: 'app-north',
  templateUrl: './relus-dash.component.html',
  styleUrls: ['./relus-dash.component.css']
})

export class RelusDashComponent implements OnInit {
  selectedInfo: Info;
  returnedInfo: Info;
  getInfo: Info;

  dashboard = 'Relus Tech';

  currentProfile: Profile;
  currentProfileSubscription: Subscription;
  profiles: Profile[];

  chart = [];
  tickets: Tickets;

  assets: Assets;

  constructor(
    private funcapp: FuncappService,
    private authenticationService: AuthenticationService,
    private profileService: ProfileService,
    private api: ApiCallService
    ) {
      this.currentProfileSubscription = this.authenticationService.currentUser.subscribe(
        profile => {
          this.currentProfile = profile;
        }
      );
     }

  ngOnInit() {
    this.loadAllUsers();
    this.displayChart();
  }

  // ngOnDestroy() {
  //   this.currentProfileSubscription.unsubscribe();
  // }

  ticketsChart() {
    this.api.getTickets().subscribe(
      (returnedTickets: Tickets) => {
        this.tickets = returnedTickets;
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

  displayChart() {
    function chartData() {
      this.api.getTickets().pipe(map(
        res => res
      ));
    }
    let xlabels = [];
    this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Contracts',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
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

  onClick(): void {
    this.funcapp.tempCall(this.selectedInfo).subscribe((returnedInfo: Info) => {
      this.getInfo = returnedInfo;
    });
  }

}
