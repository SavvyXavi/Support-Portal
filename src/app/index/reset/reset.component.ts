import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MustMatch } from '../helpers/must-match';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../index/services/alert.service';
import { AuthenticationService } from '../../index/services/authentication.service';
import { ProfileService } from '../../index/services/profile.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  resetPasswordForm: FormGroup;
  errorMessage: string;
  validToken = true;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private profileService: ProfileService
   ) {

  }
  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      // password:  ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$') ]],
      // confirmpassword: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$') ]]
      password:  ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    },
    {
      validator: [
         MustMatch('password', 'confirmpassword'),
      ]
    });

    const resetToken = this.route.snapshot.queryParams['token'];
    this.authService.validResetToken({resetToken}).subscribe(
      data => {
        this.validToken = true;
        this.errorMessage = '';
      },
      err => {
        this.validToken = false;
        this.alertService.error(err);
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.resetPasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetPasswordForm.invalid) {
      return;
    }

    this.loading = true;
    this.profileService.resetPassword({params: this.resetPasswordForm.value, token: this.route.snapshot.queryParams['token']}).subscribe(
      data => {
        this.alertService.success('Password reset successful', true);
        this.loading = false;
        this.router.navigate(['/login']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }
 }
