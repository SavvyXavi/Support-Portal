import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../index/models/profile';
import { OemService } from '../services/oem.service';
import { AuthenticationService } from 'src/app/index/services/authentication.service';
import { ProfileService } from './../../index/services/profile.service';
import { DataPull } from '../models/datapull';
import { first } from 'rxjs/operators';
import { AssetFilter } from './../models/assetFilter';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {
  currentProfile: Profile;
  profiles: Profile[];
  datapull: DataPull[];
  dpcount: any;
  ticketpull: any;
  selval: any;
  ticketwo: any;
  dbcount: any;

  constructor(
    private authenticationService: AuthenticationService,
    private profileService: ProfileService,
    private oemService: OemService
    ) {
   this.authenticationService.currentUser.subscribe(
      profile => {
        this.currentProfile = profile;
      }
    );
   }

  ngOnInit() {
  }

  loadAllUsers() {
    this.profileService.getAll().pipe(first()).subscribe( profile => {
      this.profiles = profile;
    });
    console.log(this.profiles);
  }

  getAllAssets() {
    this.profileService.getAllAssets().subscribe(datapull  => {
      this.datapull = datapull;
      });
  }
  gettestAssets() {
    this.oemService.testDataPull().subscribe(datapull  => {
      this.datapull = datapull;
      });
  }
  getPartTickets(id: any) {
    this.oemService.tickByPart(id).subscribe(ticketpull  => {
      this.ticketpull = ticketpull;
    });
  }

  filterFilter(ticketpull: any) {
    return this.ticketpull.find(ticketwo => ticketpull.RefNumber === ticketwo);
  }

}
