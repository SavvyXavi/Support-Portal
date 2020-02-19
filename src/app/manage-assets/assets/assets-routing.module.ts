import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageAssetsComponent } from '../manage-assets.component';

import { AuthGuard } from 'src/app/index/index/guards/auth.guard';

import { AssetsTableComponent } from '../assets-table/assets-table.component';
import { AssetDetailComponent } from '../asset-detail/asset-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ManageAssetsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AssetsTableComponent
      },
      {
        path: 'assetdetail/:identifier',
        component: AssetDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
