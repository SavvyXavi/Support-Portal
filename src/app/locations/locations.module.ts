import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from '../index/guards/auth.guard';
import { ApifilterService } from '../services/apifilter.service';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsTableComponent } from './locations-table/locations-table.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationsComponent } from './locations.component';

// Material Import
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    LocationsTableComponent,
    LocationsComponent,
    LocationDetailsComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,

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
    ApifilterService
  ]
})
export class LocationsModule { }
