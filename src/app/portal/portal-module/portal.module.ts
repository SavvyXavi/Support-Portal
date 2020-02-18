import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortalRoutingModule } from './portal-routing.module';

import { HeaderComponent } from './../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

import { AuthGuard } from 'src/app/index/index/guards/auth.guard';
import { AuthenticationService } from 'src/app/index/index/services/authentication.service';

import { JwtInterceptor } from './../../index/index/helpers/jwt.service';
import { PortalComponent } from '../portal.component';

@NgModule({
  declarations: [
    PortalComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
})
export class PortalModule { }
