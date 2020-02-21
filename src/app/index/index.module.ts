import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './index/login/login.component';
import { AlertComponent } from './index/alert/alert.component';
import { ForgotpasswordComponent } from './index/forgotpassword/forgotpassword.component';
import { ResetComponent } from './index/reset/reset.component';
import { LogoutComponent } from './index/logout/logout.component';

import { AlertService } from './index/services/alert.service';
import { AuthenticationService } from './index/services/authentication.service';

import { ErrorInterceptor } from './index/helpers/error-interceptor.service';

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
