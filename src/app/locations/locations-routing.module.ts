import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../index/guards/auth.guard';

import { LocationsComponent } from './locations.component';
import { LocationsTableComponent } from './locations-table/locations-table.component';
import { LocationDetailsComponent } from './location-details/location-details.component';



const routes: Routes = [
  {
    path: '',
    component: LocationsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: LocationsTableComponent
      },
      {
        path: 'locationdetail/:description',
        component: LocationDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
