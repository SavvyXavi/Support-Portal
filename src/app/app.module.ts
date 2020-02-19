import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './index/index/guards/auth.guard';
import { LoginpullsService } from './index/index/services/loginpulls.service';

import { AppComponent } from './app.component';
import { SuppdashComponent } from './suppdash/suppdash.component';

import { AccountsComponent } from './admin/accounts/accounts.component';
import { ListsComponent } from './manage-assets/lists/lists.component';
import { BudgetComponent } from './budget/budget.component';
import { SupportComponent } from './admin/support/support.component';
import { OemComponent } from './admin/oem/oem.component';
import { UsersComponent } from './admin/users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminComponent } from './admin/admin.component';
import { LocationDetailsComponent } from './locations/location-details/location-details.component';
import { RegisterComponent } from './admin/register/register.component';
import { LocalMonitorComponent } from './admin/local-monitor/local-monitor.component';

// Module Imports
import { IndexModule } from './index/index.module';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SuppdashComponent,
    AccountsComponent,
    ListsComponent,
    BudgetComponent,
    SupportComponent,
    OemComponent,
    UsersComponent,
    ProfileComponent,
    SettingsComponent,
    AdminComponent,
    LocationDetailsComponent,
    LocalMonitorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    IndexModule,
    PortalModule

  ],
  providers: [
    AuthGuard,
    LoginpullsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
