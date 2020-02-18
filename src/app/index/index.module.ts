import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './index/login/login.component';
import { AlertComponent } from './index/alert/alert.component';
import { ForgotpasswordComponent } from './index/forgotpassword/forgotpassword.component';
import { ResetComponent } from './index/reset/reset.component';
import { AlertService } from './index/services/alert.service';
import { AuthenticationService } from './index/services/authentication.service';

import { ErrorInterceptor } from './index/helpers/error-interceptor.service';
import { PortalModule } from '@angular/cdk/portal';


@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    AlertComponent,
    ForgotpasswordComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    PortalModule,
    IndexRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    AlertService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class IndexModule { }
