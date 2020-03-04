import { Component, OnInit } from '@angular/core';


import { AuthenticationService } from '../../index/services/authentication.service';
import { Profile } from '../../index/models/profile';
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  currentProfile: Profile;

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(
      name => {
        this.currentProfile = name;
      }
    );
  }
}
