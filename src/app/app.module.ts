import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './index/guards/auth.guard';

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

// Module Imports
import { IndexModule } from './index/index.module';
import { PortalModule } from './portal/portal-module/portal.module';

@NgModule({
  declarations: [
    AppComponent,
    SuppdashComponent,
    AccountsComponent,
    ListsComponent,
    BudgetComponent,
    SupportComponent,
    OemComponent,
    UsersComponent,
    ProfileComponent,
    SettingsComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
