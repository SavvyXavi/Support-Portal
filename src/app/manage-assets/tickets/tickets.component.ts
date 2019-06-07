import { Tickets } from './../models/tickets';
import { ApiCallService } from './../services/api-call.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets: Tickets;
  ticketArray: Tickets[] = [];
  ticketForm: FormGroup;

  constructor(
    private api: ApiCallService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.ticketForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      serialNumber: ['', Validators.required],
      ticketType: ['', Validators.required]
    }
    );
  }

  // getTicket(): void {
  //   this.api.getTicket(this.tickets).subscribe(
  //     (returnedTicket: Tickets) => {
  //       this.tickets = returnedTicket;
  //     }
  //   );
  // }

  onSubmit() {
    this.api.addTicket(this.tickets);
  }
}
