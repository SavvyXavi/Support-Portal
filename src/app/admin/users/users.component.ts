import { first } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../index/services/authentication.service';
import { ProfileService } from '../../index/services/profile.service';
import { Router } from '@angular/router';

import { AlertService } from '../../index/services/alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private profileService: ProfileService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      userType: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      partner: [this.authenticationService.currentUserValue.partner, Validators.required],
      email: ['', [Validators.email, Validators.required]],
      partnerRole: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // let subalert = false;
    // let fname = false;
    // let lname = false;
    // let phone = false;
    // let email = false;
    // let npass = false;
    // let cpass = false;

    if (this.f.invalid) {
      return;
    }

    if (this.f.userType.value === 'New' ) {
      this.profileService.register(this.userForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration Successful', true);
        },
        error => {
          this.alertService.error(error);

        }
      );
    }
  }
}
