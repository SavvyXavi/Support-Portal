import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Import
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AssetLocFilterPipe } from '../contract-detail/assetlocfilter/asset-loc-filter.pipe';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from '../contracts.component';
import { ContractDetailComponent } from '../contract-detail/contract-detail.component';
import { ContractTableComponent } from '../contract-table/contract-table.component';


@NgModule({
  declarations: [
    ContractsComponent,
    ContractTableComponent,
    ContractDetailComponent,
    AssetLocFilterPipe
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
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
  ]
})
export class ContractsModule { }
