import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Tickets } from '../models/tickets';



@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

 apiUrl1 = 'https://n1sharmonypull.azurewebsites.net/api/';
 apiUrl2 = 'MakeHamonyQuote?code=PJLcheEaYAITwiQ2Juxi0PBHJp8PZJZgwAAA03n9rbBbqwJ2m4gRJw==';
 apiUrl = this.apiUrl1 + this.apiUrl2;

  constructor( private http: HttpClient) { }

  public getTicket(ticket: Tickets): Observable<any> {
    return this.http.post(`${this.apiUrl}/tickets/createtickets`, ticket);
  }
}
