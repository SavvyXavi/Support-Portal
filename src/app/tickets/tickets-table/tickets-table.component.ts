import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/index/index/services/authentication.service';
import { ApifilterService } from './../../services/apifilter.service';
import { ApiCallService } from '../services/api-call.service';

import { Partner } from '../../models/partner';
import { Company } from '../../companies/model/company';
import { Profile } from '../../index/index/models/profile';
import { Tickets } from '../models/tickets';
import { TicketType } from '../../types/ticket-type.enum';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tickets-table',
  templateUrl: './tickets-table.component.html',
  styleUrls: ['./tickets-table.component.css']
})
export class TicketsTableComponent implements OnInit {
  tickets: Tickets;
  ticketCustomer: string[];

  pipe;

  tickArr: Tickets[];
  ticketForm: FormGroup;
  newTicket: Tickets;

  companylist: Company[];
  company: Company;

  ticketType: TicketType;

  currentProfile: Profile;
  displayedColumns: string[] =
   ['Case#', 'Name', 'Status', 'Description', 'Schedule', 'Asset ID', 'Customer', 'Update Date'];

  partnerArr: Partner[];

  ticketDataSource: MatTableDataSource<Tickets>;

  searchKey: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private api: ApiCallService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private filter: ApifilterService,
  ) {
    this.authenticationService.currentUser.subscribe(
      typeName => {
        this.currentProfile = typeName;
      }
    );
    this.pipe = new DatePipe('en-us');
  }

  ngOnInit(): void {
    this.ticketForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      CustomerNameOrId: [this.authenticationService.currentUserValue.partner, Validators.required],
      TicketType: ['', Validators.required],
      AssetId: ['', Validators.required],
      Location: ['', Validators.required],
      TicketCategoryNameOrId: ['', Validators.required],
      TicketTypeNameOrId: [ this.authenticationService.currentUserValue.partner + ' Quotes', Validators.required]
    },

    );
    this.getPartners();
    this.getTickets();
  }

  async genPdf() {
    await this.getTickets();
    const docDef = {
      content: [
        {
          text: 'TICKETS REPORT',
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
                  text: 'Case Number',
                  style: 'tableHeader'
                },
                {
                  text: 'Name',
                  style: 'tableHeader'
                },
                {
                  text: 'Status',
                  style: 'tableHeader'
                },
                {
                  text: 'Description',
                  style: 'tableHeader'
                },
                {
                  text: 'Contract',
                  style: 'tableHeader'
                },
                {
                  text: 'Serial#',
                  stlye: 'tableHeader'
                },
                {
                  text:'Customer',
                  style: 'tableHeader'
                },
                {
                  text: 'Updated',
                  style: 'tableHeader'
                }
              ],
              ...this.tickArr.map(
                t => {
                  return [t.RefNumber, t.Name,
                    t.Status, t.Body,
                    t.Schedule, t.AssetIdentifier,
                    t.CustomerName, this.pipe.transform(t.UpdatedDate, 'short')];
                }
              )
            ]
          }
        }
      ],
      info: {
        title: 'TICKETS',
        subject: 'Tickets',
        keywords: 'TICKETS, Tickets, Tickets Report, TICKETS REPORT',
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

  createTicket() {
    this.api.addTicket(this.ticketForm.value)
     .subscribe(
       ticket => {
         let ticketData = this.ticketForm.value;
         ticketData = ticket;
       }
     );
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

   getTickets() {
     if (this.currentProfile.companypartner === 'Partner') {
       this.filter.partTicketsFilter(this.currentProfile)
       .subscribe(
         (returnedTickets: Tickets[]) => {
           this.tickArr = returnedTickets;
           this.ticketDataSource = new MatTableDataSource(returnedTickets);
           this.ticketDataSource.sort = this.sort;
           this.ticketDataSource.paginator = this.paginator;
         }
       );
     } else {
       this.filter.cusTicketsFilter(this.currentProfile.company)
       .subscribe(
         (returnedTickets: Tickets[]) => {
           this.tickArr = returnedTickets;
           this.ticketDataSource = new MatTableDataSource(returnedTickets);
           this.ticketDataSource.sort = this.sort;
           this.ticketDataSource.paginator = this.paginator;
         }
       );
     }
   }

   applyFilter() {
     this.ticketDataSource.filter = this.searchKey.trim().toLowerCase();
     if (this.ticketDataSource.paginator) {
       this.ticketDataSource.paginator.firstPage();
     }
   }

   searchClear() {
     this.searchKey = '';
     this.applyFilter();
   }

   getTicketTypeName() {
     if ( this.authenticationService.currentUserValue.partner === this.currentProfile.partner ) {
       return this.currentProfile.partner + ' Quotes';
     } else {
       return 'Support Quotes';
     }
   }
}
