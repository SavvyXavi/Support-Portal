import { Component, OnInit, Input } from '@angular/core';

import { Profile } from '../login/models/profile';
import { Role } from '../types/role.enum';
import { AuthenticationService} from '../login/services/authentication.service';
import { Subscription } from 'rxjs';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  profileForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
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

    this.profileForm = this.formBuilder.group({
      company: [this.currentProfile.partner, Validators.required],
      firstName: [this.currentProfile.firstName, Validators.required],
      lastName: [this.currentProfile.lastName, Validators.required],
      userName: [this.currentProfile.username, Validators.required],
      email: [this.currentProfile.email, Validators.required],
      phone: [''],
      ticketingAlias: [''],
      password: ['', Validators.minLength(7)],
      conpass: ['', Validators.minLength(7)],
      role: [this.currentProfile.partnerRole, Validators.required]
    });
  }

  changePassword() {

  }
}
