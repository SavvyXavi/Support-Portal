import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthenticationService } from '../login/services/authentication.service';
import { Profile } from '../login/models/profile';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  currentProfile: Profile;
  nameSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.nameSubscription = this.authenticationService.currentUser.subscribe(
      name => {
        this.currentProfile = name;
      }
    );
  }
}
