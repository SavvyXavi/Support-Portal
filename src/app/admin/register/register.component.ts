import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../index/services/alert.service';
import { AuthenticationService } from '../../index/services/authentication.service';
import { ProfileService } from '../../index/services/profile.service';
import { MustMatch } from '../../index/helpers/must-match';
import { CommonModule } from '@angular/common';
import { Profile } from '../../index/models/profile';
import { ApifilterService } from 'src/app/services/apifilter.service';
import { Partner } from 'src/app/models/partner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  randNumberOne = Math.random() * 10000;
  randNumberTwo = Math.random() * 10000;
  randNumber = this.randNumberOne * this.randNumberTwo * 1000;
  profile: Profile[];
  twoprofile: Profile;
  partnerList: Partner[];
  partner: Profile;
  company: Profile[];
  twocompany: Profile;
  selpartner: Profile;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private profileService: ProfileService,
    private filter: ApifilterService
  ) {
    // redirects to dashboard if already logged in
 //   if (this.authenticationService.currentUserValue) {
 //     this.router.navigate(['/dashboard']);
 //   }
   }

  ngOnInit() {
    this.filter.regGetPartner().subscribe((partnerList: any) => {
      this.twoprofile = partnerList;
    });

    this.registerForm = this.formBuilder.group({
      firstName: ['',  Validators.required],
      lastName:  ['', Validators.required],
      company: ['', Validators.required],
      companypartner: ['', Validators.required],
      email:     ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') ]],
      partner:   ['', Validators.required],
      partnerRole: ['', Validators.required],
      password:  ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$') ]],
      confirmpassword: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$') ]],
      username:  ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') ]],
      id: [this.randNumber]
    },
    {
      validator: [
         MustMatch('password', 'confirmpassword'),
         MustMatch('email', 'username')
      ]
  });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

   // stop here if form is invalid
      if ( this.registerForm.invalid) {
        alert('failure :-(\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      return;
      }

    this.loading = true;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    this.profileService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/portal/dashboard']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  getcompany(partner: any) {
  this.filter.registerCustFilter(partner).subscribe((company: Profile) => {
    this.twocompany = company;
    console.log(this.twocompany);
  });
  }
}
