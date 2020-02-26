import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

import * as jsPDF from 'jspdf';
import { UserOptions } from 'jspdf-autotable'
import { Contracts } from '../models/contracts';
import { Profile } from '../../index/index/models/profile';
import { Partner } from '../../models/partner';
import { Customer } from '../../models/customer';

import { ApifilterService } from './../../services/apifilter.service';
import { AuthenticationService } from 'src/app/index/index/services/authentication.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { takeUntil } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

// interface tableplugin extends jsPDF {
//   autotable: (options: UserOptions) => jsPDF;
// }

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.css']
})
export class ContractTableComponent implements OnInit {
  contracts: Contracts;
  conArr: Contracts[];
  currentProfile: Profile;

  pipe;

  partner: Partner;
  partnerArr: Partner[];
  company: Customer;

  contractDataSource: MatTableDataSource<Contracts>;
  displayedColumns: string[] = ['Contract#', 'Contract Name', 'Start Date', 'Renewal Date', 'Customer', 'Status'];

  searchKey: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private filter: ApifilterService,
    private authserv: AuthenticationService,
  ) {
    this.authserv.currentUser.subscribe(
      name => {
        this.currentProfile = name;
      }
    );
      this.pipe = new DatePipe('en-us');
  }

  ngOnInit() {
    this.getPartners();
    this.getContracts();
    // this.getCompanies();
  }

  async genPdf() {
    await this.getContracts();
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
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
            body: [
              [
                {
                  text: 'Contract#',
                  style: 'tableHeader'
                },
                {
                  text: 'Contract Name',
                  style: 'tableHeader'
                },
                {
                  text: 'Start Date',
                  style: 'tableHeader'
                },
                {
                  text: 'Renewal Date',
                  style: 'tableHeader'
                },
                {
                  text: 'Customer',
                  style: 'tableHeader'
                },
                {
                  text: 'Status',
                  stlye: 'tableHeader'
                }
              ],
              ...this.conArr.map(
                c => {
                  return [c.RefNumber, c.ScheduleName,
                    this.pipe.transform(c.StartDate, 'short') , this.pipe.transform(c.RenewalDate, 'short'),
                     c.EndCustomerName, c.Status];
                }
              )
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(docDef).open();
  }

  getPartners() {
    this.filter.getPartners()
    .subscribe(
      returnedPartners => this.partnerArr = returnedPartners
    );
  }

  getCompanies() {
    this.filter.customerFilter(this.currentProfile)
    .subscribe(
      (companies: Customer) => {
        this.company = companies;
      }
    );
  }

  filterPartner(partner: String) {
    return this.partnerArr.find(company => company.CompanyName === partner);
  }

  getContracts() {
    if (this.currentProfile.companypartner === 'Partner') {
      this.filter.partConFilter(this.currentProfile)
      .subscribe(
        (returnedContracts: Contracts[]) => {
          this.conArr = returnedContracts;
          this.contractDataSource = new MatTableDataSource(returnedContracts);
          this.contractDataSource.sort = this.sort;
          this.contractDataSource.paginator = this.paginator;
        }
      );
    } else {
      this.filter.custConFilter(this.currentProfile)
      .subscribe(
        (returnedContracts: Contracts[]) => {
          this.conArr = returnedContracts;
          this.contractDataSource = new MatTableDataSource(returnedContracts);
          this.contractDataSource.sort = this.sort;
          this.contractDataSource.paginator = this.paginator;
        }
      );
    }
  }

  applyFilter() {
    this.contractDataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.contractDataSource.paginator) {
      this.contractDataSource.paginator.firstPage();
    }
  }

  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
}
