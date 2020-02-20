import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MustMatch } from '../helpers/must-match';
import { Router } from '@angular/router';
import { AlertService } from '../../index/services/alert.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm: FormGroup;
  forbiddenEmails: any;
  errorMessage: string;
  successMessage: string;
  IsvalidForm = true;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private location: Location,
    private alertService: AlertService,
   ) {

  }
 // token = '1f4914e8f3ffdccd28220e';
 // username = 'xjohnson@nasupport.com';
//  password = 'Pass123Word!'
  ngOnInit() {

    this.forgotForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
 //     'token': new FormControl(this.token),
  //    'username': new FormControl(this.username),
 //     'password': new FormControl(this.password)
    });
  }

  get f() {
    return this.forgotForm.controls;
  }

  onSubmit() {
//    console.log(this.forgotForm)
    if (this.forgotForm.valid) {
      this.IsvalidForm = true;
      this.authenticationService.requestForgotPassword(this.forgotForm.value).subscribe(
        data => {
          this.forgotForm.reset();
          this.successMessage = 'Forgot password link sent to email sucessfully.';
          this.alertService.success('We have just sent you a link to reset password', true);
          this.router.navigate(['login']);
        },
        err => {
          this.alertService.error(err);
        }
      );
    } else {
      this.IsvalidForm = false;
    }
  }

  goBack(): void {
    this.location.back();
  }
}
