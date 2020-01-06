import { Component, OnInit, Input } from '@angular/core';

import { Profile } from '../login/models/profile';
import { Role } from '../types/role.enum';
import { AuthenticationService} from '../login/services/authentication.service';
import { Subscription } from 'rxjs';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProfileService } from '../login/services/profile.service';
import { Router } from '@angular/router';

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
  submitted = false;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private router: Router
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
      partner: [this.currentProfile.partner, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      ticketingAlias: [''],
      password: ['', Validators.minLength(7)],
      conpass: ['', Validators.minLength(7)],
      role: [this.currentProfile.partnerRole, Validators.required]
    });
  }

get f() {
  return this.profileForm.controls;
}

  onSubmit() {
    this.submitted = true;
    let passmatch = false;

    if (this.profileForm.invalid) {
      return;
    }

      if (this.f.password.value !== this.f.conpass.value) {
        passmatch = false;
        return;
      } else if ( this.f.password.value === this.f.conpass.value) {
        passmatch = true;
        this.profileService.update(this.profileForm.value);
        console.log('Successfully updated!')
      }
  }
}
