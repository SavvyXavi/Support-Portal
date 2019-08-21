import { Component, OnInit, ViewChild } from '@angular/core';

import { Profile } from '../../login/models/profile';
import { Tickets } from './../models/tickets';
import { TicketType } from '../../types/ticket-type.enum';
import { ApiCallService } from './../services/api-call.service';
import { AuthenticationService } from '../../login/services/authentication.service';

import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';

import { Subscription } from 'rxjs';
import { Partner } from '../../types/partner.enum';
// import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  // ticketData: MatTableDataSource<Tickets>;

  tickets: Tickets;
  ticketArray: Tickets[] = [];
  ticketForm: FormGroup;
  newTicket: Tickets;

  ticketType: TicketType;
  ticketTypeName: Partner;
  ticketTypeNameSubscription: Subscription;

  currentProfile: Profile;

  editable = false;

  constructor(
    private api: ApiCallService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.ticketForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      CustomerNameOrId: ['Portal Testing Company', Validators.required],
      TicketType: ['', Validators.required],
      TicketCategoryNameOrId: ['', Validators.required],
      TicketTypeNameOrId: [ this.authenticationService.currentUserValue.partner + ' Quotes', Validators.required]
    },

    );

    this.getTickets();

    this.ticketTypeNameSubscription = this.authenticationService.currentUser.subscribe(
      typeName => {
        this.currentProfile = typeName;
      }
    );
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

  getTickets() {
    this.api.getTickets()
    .subscribe(
      (returnedTickets: Tickets) => {
        this.tickets = returnedTickets;
      }
    );
  }

  // getTicketData() {
  //   this.api.getTickets()
  //   .subscribe(
  //   )
  // }

  getTicketTypeName() {
    if ( this.authenticationService.currentUserValue.partner === this.currentProfile.partner ) {
      return this.currentProfile.partner + ' Quotes';
    } else {
      return 'Support Quotes';
    }
  }

}
