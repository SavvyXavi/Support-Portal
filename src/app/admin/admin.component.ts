import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Profile } from '../index/index/models/profile';
import { AuthenticationService } from '../index/index/services/authentication.service';
import { ProfileService } from '../index/index/services/profile.service';

import { first } from 'rxjs/operators';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentProfileSubscription: Subscription;
  currentProfile: Profile;
  profiles: Profile[];

  constructor(
    private authenticationService: AuthenticationService,
    private profileService: ProfileService
  ) {
    this.currentProfileSubscription = this.authenticationService.currentUser.subscribe(
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
}
