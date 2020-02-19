import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortalRoutingModule } from './portal-routing.module';

import { HeaderComponent } from './../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ManageAssetsComponent, TicketsComponent } from '../../manage-assets';
import { CompaniesComponent } from 'src/app/companies/companies.component';
import { CustomersComponent } from 'src/app/admin/customers/customers.component';
import { LocationsComponent } from 'src/app/locations/locations.component';

import { AuthGuard } from 'src/app/index/index/guards/auth.guard';
import { AuthenticationService } from 'src/app/index/index/services/authentication.service';

import { JwtInterceptor } from './../../index/index/helpers/jwt.service';
import { PortalComponent } from '../portal.component';

// Material Import
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// Module Import
import { ContractsModule } from '../../contracts/contracts/contracts.module';
import { AssetsModule } from 'src/app/manage-assets/assets/assets.module';

@NgModule({
  declarations: [
    PortalComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ManageAssetsComponent,
    TicketsComponent,
    CompaniesComponent,
    CustomersComponent,
    LocationsComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ContractsModule,
    AssetsModule,

    // Material Imports
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
})
export class PortalModule { }
