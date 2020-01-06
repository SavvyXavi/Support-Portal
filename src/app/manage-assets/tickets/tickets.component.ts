import { Component, OnInit } from '@angular/core';

import { Profile } from '../../login/models/profile';
import { Filter } from '../../models/filter';
import { Tickets } from './../models/tickets';
import { TicketType } from '../../types/ticket-type.enum';
import { ApiCallService } from './../services/api-call.service';
import { AuthenticationService } from '../../login/services/authentication.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { ApifilterService } from '../../services/apifilter.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit {

  tickets: Tickets;
  ticketArray: Tickets[] = [];
  ticketForm: FormGroup;
  newTicket: Tickets;

  ticketType: TicketType;
  ticketTypeNameSubscription: Subscription;

  currentProfile: Profile;

  editable = false;
    filteredProfile: Filter;
    filterSubsciption: Subscription;

  constructor(
    private api: ApiCallService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private filter: ApifilterService,
    private authserv: AuthenticationService
  )  {
        this.filterSubsciption = this.authserv.currentUser.subscribe(
          name => {
            this.filteredProfile = name ;
          }
        );

    }

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

    this.ticketFilter();

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

  // getTickets() {
  //   this.api.getTickets()
  //   .subscribe(
  //     (returnedTickets: Tickets) => {
  //       this.tickets = returnedTickets;
  //     }
  //   );
  // }

  ticketFilter() {
    this.filter.ticketsFilter(this.filteredProfile)
      .subscribe(
      (returnedTickets: Tickets) => {
        this.tickets = returnedTickets;
      }
    );
  }

  getTicketTypeName() {
    if ( this.authenticationService.currentUserValue.partner === this.currentProfile.partner ) {
      return this.currentProfile.partner + ' Quotes';
    } else {
      return 'Support Quotes';
    }
  }

}
