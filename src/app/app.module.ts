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
import { HeaderComponent } from './login/header/header.component';
import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { TicketsComponent } from './manage-assets/tickets/tickets.component';
import { AssetsComponent } from './manage-assets/assets/assets.component';
import { ListsComponent } from './manage-assets/lists/lists.component';
import { BudgetComponent } from './budget/budget.component';
import { SupportComponent } from './admin/support/support.component';
import { OemComponent } from './admin/oem/oem.component';
import { ContractsComponent } from './manage-assets/contracts/contracts.component';

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
    HeaderComponent,
    ManageAssetsComponent,
    SidebarComponent,
    AccountsComponent,
    TicketsComponent,
    AssetsComponent,
    ListsComponent,
    BudgetComponent,
    SupportComponent,
    OemComponent,
    ContractsComponent
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
