// import { fakeBackendProvider } from './login/helpers/fake-backend.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { MaterialModule } from './materials/material/material.module';

import { JwtInterceptor } from './login/helpers/jwt.service';
import { ErrorInterceptor } from './login/helpers/error-interceptor.service';
import { AuthGuard } from './login/guards/auth.guard';
import { AuthenticationService } from './login/services/authentication.service';
import { AlertService } from './login/services/alert.service';
// import { ProfileService } from './login/services/profile.service';

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
import { ListsComponent } from './manage-assets/lists/lists.component';
import { BudgetComponent } from './budget/budget.component';
import { SupportComponent } from './admin/support/support.component';
import { OemComponent } from './admin/oem/oem.component';
import { ContractsComponent } from './manage-assets/contracts/contracts.component';
import { UsersComponent } from './admin/users/users.component';
import { AssetLocationsComponent } from './admin/asset-locations/asset-locations.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { CustomersComponent } from './admin/customers/customers.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';

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
    ListsComponent,
    BudgetComponent,
    SupportComponent,
    OemComponent,
    ContractsComponent,
    UsersComponent,
    AssetLocationsComponent,
    ProfileComponent,
    SettingsComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MaterialModule
    // NgbModule,
    // BrowserAnimationsModule,
    // MatButtonModule,
    // MatCheckboxModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
