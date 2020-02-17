import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './index/index/guards/auth.guard';
import { LoginpullsService } from './index/index/services/loginpulls.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppdashComponent } from './suppdash/suppdash.component';

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
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Import
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ContractDetailComponent } from './manage-assets/contracts/contract-detail/contract-detail.component';
import { AssetDetailComponent } from './manage-assets/asset-detail/asset-detail.component';
import { AdminComponent } from './admin/admin.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationDetailsComponent } from './locations/location-details/location-details.component';
import { RegisterComponent } from './admin/register/register.component';
import { TicketDetailComponent } from './manage-assets/tickets/ticket-detail/ticket-detail.component';
import { CompaniesComponent } from './companies/companies.component';
import { AssetLocFilterPipe } from './manage-assets/contracts/contract-detail/assetlocfilter/asset-loc-filter.pipe';
import { LocalMonitorComponent } from './admin/local-monitor/local-monitor.component';
import { PortalComponent } from './portal/portal.component';

// Module Imports
import { IndexModule } from './index/index.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    SuppdashComponent,
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
    ProfileComponent,
    SettingsComponent,
    CustomersComponent,
    ContractDetailComponent,
    AssetDetailComponent,
    AdminComponent,
    LocationsComponent,
    LocationDetailsComponent,
    TicketDetailComponent,
    CompaniesComponent,
    AssetLocFilterPipe,
    LocalMonitorComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IndexModule,

    // Material Imports
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    AuthGuard,
    LoginpullsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
