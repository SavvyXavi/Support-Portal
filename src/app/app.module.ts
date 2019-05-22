import { fakeBackendProvider } from './login/helpers/fake-backend.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';

import { JwtInterceptor } from './login/helpers/jwt.service';
import { ErrorInterceptor } from './login/helpers/error-interceptor.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { AlertComponent } from './login/alert/alert.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppdashComponent } from './suppdash/suppdash.component';
import { NorthComponent } from './north/north.component';
import { ReliantDashComponent } from './reliant-dash/reliant-dash.component';
import { RelusDashComponent } from './relus-dash/relus-dash.component';
import { GenericDashComponent } from './generic-dash/generic-dash.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    RegistrationComponent,
    DashboardComponent,
    SuppdashComponent,
    NorthComponent,
    ReliantDashComponent,
    RelusDashComponent,
    GenericDashComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
