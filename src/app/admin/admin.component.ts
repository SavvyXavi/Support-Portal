import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../login/services/authentication.service';

import { Profile } from './../login/models/profile';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentProfileSubscription: Subscription;
  currentProfile: Profile;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.currentProfileSubscription = this.authenticationService.currentUser.subscribe(
      profile => {
        this.currentProfile = profile;
      }
    );
   }

  ngOnInit() {
  }

}
