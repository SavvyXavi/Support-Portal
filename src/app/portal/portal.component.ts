import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../index/services/authentication.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiCallService } from '../tickets/services/api-call.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  ticketForm: FormGroup;

  constructor (
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private api: ApiCallService
    ) { }

  ngOnInit() {
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

  // logout() {
  //   this.authenticationService.logout();
  //   this.router.navigate(['/login']);
  // }
}

