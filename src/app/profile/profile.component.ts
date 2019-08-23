import { Component, OnInit } from '@angular/core';

import { Profile } from '../login/models/profile';
import { ProfileService } from '../login/services/profile.service';
import { Role } from '../types/role.enum';
import { AuthenticationService} from '../login/services/authentication.service';
import { Subscription, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: Profile[] = [];
  currentProfile: Profile;
  role: Role;
  profileSubscription: Subscription;
  private roleSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private profileService: ProfileService
  ) {
    this.profileSubscription = this.authenticationService.currentUser.subscribe(
      profile => {
        this.currentProfile = profile;
      }
    );
  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getAll().pipe(first()).subscribe( account => {
      this.profiles = account;
    });
  }
}

