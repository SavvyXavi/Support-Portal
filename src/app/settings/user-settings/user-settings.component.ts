import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../index/helpers/must-match';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../index/services/authentication.service';
import { ProfileService } from './../../index/services/profile.service';
import { AlertService } from './../../index/services/alert.service';

import { Profile } from '../../index/models/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  currentProfile: Profile;
  submitted = false;
  loading = false;
  passwordForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private profileService: ProfileService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(
      name => {
        this.currentProfile = name;
      }
    );

    this.passwordForm = this.formBuilder.group({
      password:  ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$') ]],
      confirmpassword: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$') ]]
    },
    {
      validator: [
        MustMatch('password', 'confirmpassword'),
      ]
    }
    );
  }

  get f() {
    return this.passwordForm.controls;
  }

  submitPassword() {
    this.submitted = true;

    if ( this.passwordForm.invalid) {
      alert('failure :-(\n\n' + JSON.stringify(this.passwordForm.value, null, 4));
    return;
    }

    // this.loading = true;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.passwordForm.value, null, 4));
    this.profileService.update(this.passwordForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Password change successful', true);
          this.router.navigate(['/portal/dashboard']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
