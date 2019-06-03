import { Tickets } from './../models/tickets';
import { ApiCallService } from './../services/api-call.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets: Tickets;
  constructor(
    private api: ApiCallService
  ) { }

  ngOnInit() {
  }

  getTicket(): void {
    this.api.getTicket(this.tickets).subscribe(
      (returnedTicket: Tickets) => {
        this.tickets = returnedTicket;
      }
    );
  }
}
