import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

import { ApifilterService } from '../../services/apifilter.service';
import { AuthenticationService } from 'src/app/index/index/services/authentication.service';

import { Profile } from 'src/app/index/index/models/profile';
import { Partner } from 'src/app/models/partner';
import { Company } from '../model/company';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.css']
})
export class CompaniesTableComponent implements OnInit {
  currentProfile: Profile;

  partnerArr: Partner[];

  compArr: Company[];

  displayedColumns: string[] =
   ['Company Name', 'Account Manager', 'Street Address', 'City', 'State', 'Zip Code', 'Country', 'Primary Contact'];
  companyDataSource: MatTableDataSource<Company>;

  searchKey: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private authserv: AuthenticationService,
    private location: Location
  ) {
    this.authserv.currentUser.subscribe(
      profile => this.currentProfile = profile
    );
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  async genPdf() {
    await this.getCompanies();
    const docDef = {
      content: [
        {
          text: 'CONTRACTS REPORT',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
            body: [
              [
                {
                  text: 'Company Name',
                  style: 'tableHeader'
                },
                {
                  text: 'Account Manager',
                  style: 'tableHeader'
                },
                {
                  text: 'Street Address',
                  style: 'tableHeader'
                },
                {
                  text: 'City',
                  style: 'tableHeader'
                },
                {
                  text: 'State',
                  style: 'tableHeader'
                },
                {
                  text: 'Zip Code',
                  stlye: 'tableHeader'
                },
                {
                  text: 'Country',
                  style: 'tableHeader'
                },
                {
                  text: 'Primary Contact',
                  style: 'tableHeader'
                }
              ],
              ...this.compArr.map(
                c => {
                  return [c.CompanyName, c.AccountManager,
                    c.AddressLine1 , c.Town,
                    c.County, c.Postcode,
                    c.Country, c.PrimaryContactFullName];
                }
              )
            ]
          }
        }
      ],
      info: {
        title: 'COMPANIES',
        subject: 'Companies',
        keywords: 'COMPANIES, Companies, Companies Report, COMPANIES REPORT',
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

  getCompanies() {
      this.filter.customerFilter(this.currentProfile)
      .subscribe(
        (returnedLocations: Company[]) => {
          this.compArr = returnedLocations;
          this.companyDataSource = new MatTableDataSource(returnedLocations);
          this.companyDataSource.sort = this.sort;
          this.companyDataSource.paginator = this.paginator;
        }
      );
  }

  applyFilter() {
    this.companyDataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.companyDataSource.paginator) {
      this.companyDataSource.paginator.firstPage();
    }
  }

  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  goBack(): void {
    this.location.back();
  }
}
