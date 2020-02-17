import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login-component/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetComponent } from './reset/reset.component';
import { AlertComponent } from './alert/alert.component';

import { AlertService } from './services/alert.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/error-interceptor.service';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [
    LoginComponent,
    AlertComponent,
    ForgotpasswordComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]
})
export class LoginModule { }
