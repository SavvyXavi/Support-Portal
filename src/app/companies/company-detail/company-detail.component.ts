import { Component, OnInit, ViewChild } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApifilterService } from '../../services/apifilter.service';
import { AuthenticationService } from '../../index/services/authentication.service';
import { Company } from '../model/company';
import { Contracts } from '../../contracts/models/contracts';
import { Assets } from '../../manage-assets/models/assets';
import { Tickets } from '../../tickets/models/tickets';
import { Filter } from '../../models/filter';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Profile } from '../../index/models/profile';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;
  currentProfile: Profile;
  assets: Assets[];
  assetLength: number;
  CompanyName: Company;
  contractLength: number;
  ticketLength: number;
  contracts: Contracts[];
  tickets: Tickets[];

  displayedColumns: string[] = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];
  assetDataSource: MatTableDataSource<Assets>;
  searchKey: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
      this.authenticationService.currentUser.subscribe(
        profile => {
          this.currentProfile = profile;
        });
  }

  ngOnInit(): void {
    this.getCompItems();
    this.GetCContracts();
    this.getCAssets();
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
          this.assetLength = returnedAssetLength.length;
          this.assetDataSource = new MatTableDataSource(returnedAssetLength);
          this.assetDataSource.sort = this.sort;
          this.assetDataSource.paginator = this.paginator;
          }
        );
        this.filter.locCustTicketsFilterTwo(this.company.CompanyName)
        .subscribe(
          (returnedAsset: Assets[]) => {
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

GetCContracts() {
  this.filter.custConFilter(this.currentProfile)
  .subscribe(
    (returnedCons: Contracts[]) => {
      this.contractLength = returnedCons.length;
      this.contracts = returnedCons;
    }
  );
  }

  getCAssets() {
    this.filter.locCustAssetsFilter(this.currentProfile)
    .subscribe(
      (returnedAssets: Assets[]) => {
        this.assetLength = returnedAssets.length;
        this.assets = returnedAssets;
    });
  }

  getCTicket() {
    this.filter.cusTicketsFilter(this.currentProfile.company)
    .subscribe(
      (tickets: Tickets[]) => {
        this.tickets = tickets;
        this.ticketLength = tickets.length;
    });
  }

  goToAssetDet(identifier: string) {
    this.router.navigate(['/portal/assets/assetdetail/' + identifier]);
  }

  goBack(): void {
    this.location.back();
  }
}
