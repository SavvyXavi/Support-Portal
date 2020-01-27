import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MustMatch } from '../helpers/must-match';
import { Router } from '@angular/router';
import { AlertService } from '../../login/services/alert.service';

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
    private authService: AuthenticationService,
    private router: Router,
    private alertService: AlertService,
   ) {

  }
  ngOnInit() {

    this.forgotForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    });
  }

  get f() {
    return this.forgotForm.controls;
  }

  onSubmit() {
    console.log(this.forgotForm)
    if (this.forgotForm.valid) {
      this.IsvalidForm = true;
      this.authService.requestForgotPassword(this.forgotForm.value).subscribe(
        data => {
          this.forgotForm.reset();
          this.successMessage = 'Forgot password link sent to email sucessfully.';
          this.alertService.success('We have just sent you a link to reset password', true);
        },
        err => {
          this.alertService.error(err);
        }
      );
    } else {
      this.IsvalidForm = false;
    }
  }
}
