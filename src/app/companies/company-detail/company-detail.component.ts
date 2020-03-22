import { Component, OnInit, ViewChild } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApifilterService } from '../../services/apifilter.service';

import { Company } from '../model/company';
import { Assets } from '../../manage-assets/models/assets';
import { Filter } from '../../models/filter';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;
  assets: Assets;
  assetLength: Assets[];
  CompanyName: Company;
  contractLength: number;
  ticketLength: number;
  displayedColumns: string[] = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];
  assetDataSource: MatTableDataSource<Assets>;
  searchKey: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCompItems();
  }

  getCompItems() {
    const CompanyName =
    this.route.snapshot.paramMap.get('CompanyName');
    this.filter.custConFilterTwo(CompanyName)
    .subscribe(
      (returnedCompany: Company) => {
        this.company = returnedCompany;
        this.contractLength = this.company.length;
        this.filter.locCustAssetsFilterActtwo(this.company.CompanyName)
        .subscribe(
          (returnedAssetLength: Assets[]) => {
          this.assetLength = returnedAssetLength;
          this.assetDataSource = new MatTableDataSource(returnedAssetLength);
          this.assetDataSource.sort = this.sort;
          this.assetDataSource.paginator = this.paginator;
          }
        );
        this.filter.locCustTicketsFilterTwo(this.company.CompanyName)
        .subscribe(
          (returnedAsset: Assets) => {
            this.assets = returnedAsset;
            this.ticketLength = this.assets.length;
          }
        );
      }
    );
  }

  applyFilter() {
    this.assetDataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.assetDataSource.paginator) {
      this.assetDataSource.paginator.firstPage();
    }
  }

  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  goToAssetDet(identifier: string) {
    this.router.navigate(['/portal/assets/assetdetail/' + identifier]);
  }

  goBack(): void {
    this.location.back();
  }
}
