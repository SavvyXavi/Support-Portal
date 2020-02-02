import { Customer } from './../../admin/models/customer';
import { Company } from './../../companies/model/company';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Profile } from '../../login/models/profile';
import { Partner } from './../../models/partner';
import { Filter } from '../../models/filter';
import { Tickets } from './../models/tickets';
import { TicketType } from '../../types/ticket-type.enum';

import { AuthenticationService } from '../../login/services/authentication.service';
import { ApifilterService } from '../../services/apifilter.service';
import { ApiCallService } from './../services/api-call.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit {
  tickets: Tickets;
  ticketLength: Tickets[];
  ticketForm: FormGroup;
  newTicket: Tickets;

  companylist: Company[];
  company: Company;
  testin: string;


  ticketType: TicketType;
  ticketTypeNameSubscription: Subscription;

  currentProfile: Profile;
  displayedColumns: string[] =
   ['Case#', 'Name', 'Status', 'Description', 'Schedule', 'Asset ID', 'Customer', 'Update Date', 'Update Since'];

  partnerArr: Partner[];

  ticketDataSource: MatTableDataSource<Tickets>;

  searchKey: string;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

    filteredProfile: Filter;
    filterSubsciption: Subscription;

  constructor(
    private api: ApiCallService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private filter: ApifilterService,
  )  {
    this.authenticationService.currentUser.subscribe(
      typeName => {
        this.currentProfile = typeName;
      }
    );

    }

  ngOnInit() {
    this.ticketForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      CustomerNameOrId: [this.authenticationService.currentUserValue.partner, Validators.required],
      TicketType: ['', Validators.required],
      TicketCategoryNameOrId: ['', Validators.required],
      TicketTypeNameOrId: [ this.authenticationService.currentUserValue.partner + ' Quotes', Validators.required]
    },

    );
    this.getPartners();
    this.getTickets();
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
      this.filter.customerFilter(this.currentProfile)
      .subscribe(
        (returnedCustomers: Company) => {
            this.filter.ticketsFilter(returnedCustomers.CompanyName)
            .subscribe(
              (returnedTickets: Tickets[]) => {
                this.testin = 'still in the loop';
                this.ticketLength = returnedTickets;
                this.ticketDataSource = new MatTableDataSource(returnedTickets);
                this.ticketDataSource.sort = this.sort;
                this.ticketDataSource.paginator = this.paginator;
              }
            );

        }
      );
    } else {
      this.filter.ticketsFilter(this.currentProfile.company)
      .subscribe(
        (returnedTickets: Tickets[]) => {
          this.ticketLength = returnedTickets;
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




  // getCustomers() {
  //   this.filter.companyFilter(this.currentProfile.partner)
  //   .subscribe(
  //     (returnedCompanies: Customer)  => this.customerArr = returnedCompanies
  //   );
  // }


  // getTickets() {
  //   this.filter.ticketsFilter()
  //   .subscribe(
  //     (returnedTickets: Tickets[]) => {
  //       this.ticketLength = returnedTickets;
  //     }
  //   );
  // }

  // filterTickets(tickets: string) {
  //   return this.ticketLength.find(ticket => ticket.CustomerName === tickets);
  // }

  // displayTickets() {
  //  console.log(this.filterTickets(this.customerArr.companyName));
  // }

}
