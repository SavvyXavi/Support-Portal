import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Mat Import
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AssetsRoutingModule } from './assets-routing.module';
import { ManageAssetsComponent } from './../manage-assets.component';
import { AssetsTableComponent } from './../assets-table/assets-table.component';
import { AssetDetailComponent } from '../asset-detail/asset-detail.component';
import { ContractsModule } from 'src/app/contracts/contracts/contracts.module';

@NgModule({
  declarations: [
    ManageAssetsComponent,
    AssetsTableComponent,
    AssetDetailComponent
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ContractsModule,

    // Mat Imports
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class AssetsModule { }
