import { ProfileService } from './../login/services/profile.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../login/services/authentication.service';

import { first } from 'rxjs/operators';

import { Profile } from './../login/models/profile';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentProfileSubscription: Subscription;
  currentProfile: Profile;
  profiles: Profile;

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
    this.profileService.getById(this.currentProfile._id).pipe(first()).subscribe( profile => {
      this.profiles = profile;
    });
    console.log(this.profiles._id);
  }
}
