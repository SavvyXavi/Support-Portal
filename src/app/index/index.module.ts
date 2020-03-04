import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetComponent } from './reset/reset.component';
import { LogoutComponent } from './logout/logout.component';

import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';

import { ErrorInterceptor } from './helpers/error-interceptor.service';

@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    AlertComponent,
    ForgotpasswordComponent,
    ResetComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class IndexModule { }
