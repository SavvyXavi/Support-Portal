import { Component, OnInit } from '@angular/core';

import { Profile } from '../../login/models/profile';
import { Partner } from './../../models/partner';
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
  partnerArr: Partner[];

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
    this.ticketFilter();
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

  ticketFilter() {
    if (this.filterPartner(this.currentProfile.partner)) {
      this.filter.partTicketsFilter(this.currentProfile)
      .subscribe(
        (returnedTickets: Tickets) => this.tickets = returnedTickets
      );
    } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
      // this.filter.custAssetsFilter(this.currentProfile)
      // .subscribe(
      //   (returnedAssetLength: Assets[]) => this.assetLength = returnedAssetLength
      // );
    }
  }

  getTicketTypeName() {
    if ( this.authenticationService.currentUserValue.partner === this.currentProfile.partner ) {
      return this.currentProfile.partner + ' Quotes';
    } else {
      return 'Support Quotes';
    }
  }

}
