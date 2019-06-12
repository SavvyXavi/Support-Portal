import { Component, OnInit } from '@angular/core';

import { Tickets } from './../models/tickets';
import { TicketType } from '../../types/ticket-type.enum';
import { ApiCallService } from './../services/api-call.service';

import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';

import { first } from 'rxjs/operators';

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

  constructor(
    private api: ApiCallService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.ticketForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      AssetRefOrId: ['', Validators.required],
      TicketType: ['', Validators.required],
      TicketCategoryNameOrId: ['New Quote'],
      TicketTypeNameOrId: ['NorthSmart Quotes']
    },

    );

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

  getTickets() {
    this.api.getTicket()
    .subscribe(
      (data: Tickets) => {
        this.tickets = data;
      }
    );
  }

  // getMovies() {
	// 	this.http.get<Movie[]>(this.moviesRoute).subscribe(movies => {
	// 		this.movies = movies;
	// 		console.log('Movies', this.movies);
	// 	});
	// }
}
