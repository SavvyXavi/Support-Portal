import { Component, OnInit } from '@angular/core';
import { Profile } from '../../index/index/models/profile';
import { OemService } from '../services/oem.service';
import { AuthenticationService } from 'src/app/index/index/services/authentication.service';
import { ProfileService } from './../../index/index/services/profile.service';
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
  ticketpull: AssetFilter[];
  selval: any;
  ticket: AssetFilter;
  tickettwo: AssetFilter;

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

  ngOnInit()  {
    this.gettestTickets();
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
  gettestTickets() {
    this.oemService.testTicketPull().subscribe(ticketpull  => {
      this.ticketpull = ticketpull;
      });
  }

  filterTicket(ticket: String) {
    return this.ticketpull.find(tickettwo => tickettwo.RefNumber === ticket);
  }

}
