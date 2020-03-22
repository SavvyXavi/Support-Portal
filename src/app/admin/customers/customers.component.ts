import pdfMake from 'pdfmake-lite/build/pdfmake';
import pdfFonts from 'pdfmake-lite/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

import { DatePipe } from '@angular/common';

import { Customer } from '../models/customer';
import { Profile } from '../../index/models/profile';
import { Filter } from '../../models/filter';

import { ApifilterService } from '../../services/apifilter.service';
import { AuthenticationService } from '../../index/services/authentication.service';


import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  custArr: Customer[];
  currentProfile: Profile;

  pipe;

  filteredProfile: Filter;

  customerDataSource: MatTableDataSource<Customer>;
  displayedColumns: string[] =
   ['Account ID', 'Company Name', 'Account Manager', 'Primary Contact Name', 'Primary Contact Email', 'Created Date'];

  searchKey: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private filter: ApifilterService,
    private auth: AuthenticationService,
    private location: Location
  ) {
    this.auth.currentUser.subscribe(
      profile => {
        this.filteredProfile = profile;
      }
    );
    this.pipe = new DatePipe('en-us');
  }

  ngOnInit() {
    this.getCustomers();
  }

  async genPdf() {
    await this.getCustomers();
    const docDef = {
      content: [
        {
          text: 'CUSTOMERS REPORT',
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
                  text: 'Account ID',
                  style: 'tableHeader'
                },
                {
                  text: 'Company Name',
                  style: 'tableHeader'
                },
                {
                  text: 'Account Manager',
                  style: 'tableHeader'
                },
                {
                  text: 'Primary Contact Name',
                  style: 'tableHeader'
                },
                {
                  text: 'Primary Contact Email',
                  style: 'tableHeader'
                },
                {
                  text: 'Created Date',
                  style: 'tableHeader'
                }
              ],
              ...this.custArr.map(
                c => {
                  return [c.AccountID, c.CompanyName,
                    c.AccountManager, c.PrimaryContactFullName,
                     c.PrimaryContactEmail, this.pipe.transform(c.CreatedDate, 'short')];
                }
              )
            ]
          }
        }
      ],
      info: {
        title: 'CUSTOMERS',
        subject: 'Customers',
        keywords: 'CUSTOMERS, Customers, Customers Report, CUSTOMERS REPORT',
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

  getCustomers() {
    this.filter.customerFilter(this.filteredProfile)
    .subscribe(
      (returnedCustomers: Customer[]) => {
        this.custArr = returnedCustomers;
        this.customerDataSource = new MatTableDataSource(returnedCustomers);
        this.customerDataSource.sort = this.sort;
        this.customerDataSource.paginator = this.paginator;
      }
    );
  }

  applyFilter() {
    this.customerDataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.customerDataSource.paginator) {
      this.customerDataSource.paginator.firstPage();
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
