import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { Component, OnInit, ViewChild, Pipe } from '@angular/core';

import { Assets } from '../models/assets';
import { Partner } from '../../models/partner';
import { Profile } from '../../index/index/models/profile';

import { ApifilterService } from './../../services/apifilter.service';
import { AuthenticationService } from 'src/app/index/index/services/authentication.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.css']
})
export class AssetsTableComponent implements OnInit {
  assets: Assets;
  asArr: Assets[];
  currentProfile: Profile;

  displayedColumns: string[] = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];

  partnerArr: Partner[];

  assetDataSource: MatTableDataSource<Assets>;

  searchKey: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private authserv: AuthenticationService,
    ) {
      this.authserv.currentUser.subscribe(
        name => {
          this.currentProfile = name ;
        }
      );
    }

  ngOnInit() {
    this.getPartners();
    this.getAssets();
  }

  async genPdf() {
    await this.getAssets();
    const docDef = {
      content: [
        {
          text: 'CONTRACTS',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto'],
            body: [
              [
                {
                  text: 'Name',
                  style: 'tableHeader'
                },
                {
                  text: 'Location',
                  style: 'tableHeader'
                },
                {
                  text: 'Serial#',
                  style: 'tableHeader'
                },
                {
                  text: 'Asset Tag',
                  style: 'tableHeader'
                },
                {
                  text: 'Contract',
                  style: 'tableHeader'
                }
              ],
              ...this.asArr.map(
                a => {
                  return [a.Name, a.SiteAddress,
                    a.Identifier, a.Identifier,
                     a.Schedule];
                }
              )
            ]
          }
        }
      ],
      info: {
        title: 'ASSETS',
        subject: 'Assets',
        keywords: 'ASSETS, Assets, Online Assets, Online ASSETS',
        creator: 'Noble 1 Solutions',
        producer: 'Noble 1 Solutions'
      },
      styles: {
        tableHeader: {
          bold: true,
        }
      }
    };
    pdfMake.createPdf(docDef).open();
  }

  getPartners() {
    this.filter.getPartners()
    .subscribe(
      returnedPartners => this.partnerArr = returnedPartners
    );
  }

  filterPartner(partner: String) {
    return this.partnerArr.find(company => company.CompanyName === partner);
  }

  getAssets() {
    if (this.currentProfile.companypartner === 'Partner') {
      this.filter.partAssetsFilter(this.currentProfile)
      .subscribe(
        (returnedAssets: Assets[]) => {
          this.asArr = returnedAssets;
          this.assetDataSource = new MatTableDataSource(returnedAssets);
          this.assetDataSource.sort = this.sort;
          this.assetDataSource.paginator = this.paginator;
        }
      );
    } else {
      this.filter.custAssetsFilter(this.currentProfile)
      .subscribe(
        (returnedAsset: Assets[]) => {
          this.asArr = returnedAsset;
          this.assetDataSource = new MatTableDataSource(returnedAsset);
          this.assetDataSource.sort = this.sort;
          this.assetDataSource.paginator = this.paginator;
        }
      );
    }
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
}
