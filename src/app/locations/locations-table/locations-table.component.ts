import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { Component, OnInit, ViewChild } from '@angular/core';

import { ApifilterService } from '../../services/apifilter.service';
import { AuthenticationService } from '../../index/index/services/authentication.service';

import { Profile } from '../../index/index/models/profile';
import { CustomerLocation } from '../models/location';
import { Partner } from '../../models/partner';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-locations-table',
  templateUrl: './locations-table.component.html',
  styleUrls: ['./locations-table.component.css']
})
export class LocationsTableComponent implements OnInit {
  locations: CustomerLocation;
  locArr: CustomerLocation[];

  currentProfile: Profile;

  partnerArr: Partner[];

  locationDataSource: MatTableDataSource<CustomerLocation>;
  displayedColumns: string[] = ['Description', 'Street', 'City', 'Zip Code', 'Country', 'Company'];

  searchKey: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private authserv: AuthenticationService
  ) {
    this.authserv.currentUser.subscribe(
      profile => this.currentProfile = profile
    );
  }

  ngOnInit(): void {
    this.getPartners();
    this.getLocations();
  }

  async genPdf() {
    await this.getLocations();
    const docDef = {
      content: [
        {
          text: 'LOCATIONS REPORT',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
            body: [
              [
                {
                  text: 'Description',
                  style: 'tableHeader'
                },
                {
                  text: 'Street',
                  style: 'tableHeader'
                },
                {
                  text: 'City',
                  style: 'tableHeader'
                },
                {
                  text: 'Zip Code',
                  style: 'tableHeader'
                },
                {
                  text: 'Country',
                  style: 'tableHeader'
                },
                {
                  text: 'Company',
                  stlye: 'tableHeader'
                }
              ],
              ...this.locArr.map(
                l => {
                  return [l.Description, l.Address1,
                    l.Town, l.Postcode,
                     l.Country, l.CompanyName];
                }
              )
            ]
          }
        }
      ],
      info: {
        title: 'LOCATIONS',
        subject: 'Locations',
        keywords: 'LOCATIONS, Locations, Locations Report, LOCATIONS REPORT',
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



  getLocations() {
    if (this.currentProfile.companypartner === 'Partner') {
      this.filter.partLocationFilter(this.currentProfile)
      .subscribe(
        (returnedLocations: CustomerLocation[]) => {
          this.locArr = returnedLocations;
          this.locationDataSource = new MatTableDataSource(returnedLocations);
          this.locationDataSource.sort = this.sort;
          this.locationDataSource.paginator = this.paginator;
        }
      );
    } else {
      this.filter.custLocationFilter(this.currentProfile)
      .subscribe(
        (returnedLocations: CustomerLocation[]) => {
          this.locArr = returnedLocations;
          this.locationDataSource = new MatTableDataSource(returnedLocations);
          this.locationDataSource.sort = this.sort;
          this.locationDataSource.paginator = this.paginator;
        }
      );
    }
  }

  applyFilter() {
    this.locationDataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.locationDataSource.paginator) {
      this.locationDataSource.paginator.firstPage();
    }
  }

  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

}
