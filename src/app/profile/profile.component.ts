import { Component, OnInit, Input } from '@angular/core';

import { Profile } from '../login/models/profile';
import { Role } from '../types/role.enum';
import { AuthenticationService} from '../login/services/authentication.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profiles: Profile[] = [];
  currentProfile: Profile;
  role: Role;
  private roleSubscription: Subscription;
  nameSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

    changePartner() {
      if (this.authenticationService.currentUserValue.partner !== 'Noble1') {
        return true;
      } else {
        return false;
      }
    }

  ngOnInit() {
    this.nameSubscription = this.authenticationService.currentUser.subscribe(
      name => {
        this.currentProfile = name;
      }
    );
  }
}
