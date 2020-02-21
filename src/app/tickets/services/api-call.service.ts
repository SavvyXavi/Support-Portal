import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Tickets } from '../models/tickets';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

 postTicket = 'https://n1sharmonypull.azurewebsites.net/api/MakeHamonyQuote?code=PJLcheEaYAITwiQ2Juxi0PBHJp8PZJZgwAAA03n9rbBbqwJ2m4gRJw==';
 getTicket = 'https://n1sharmonypull.azurewebsites.net/api/HttpTrigger1?code=lsPvad3uQA6s/pe1imbqoK0egnysVrGlsZXvaFsZ1jc69X6OdKQHcw==';

  oldgetAsset = 'https://n1sharmonypull.azurewebsites.net/api/AssetsPull?code=qQXwJm1YBabl4J8QlK6a2n2/JpY/mTacr66EYRdsZ2i3RfUkAucX4g==';
  getassetUrl = 'https://harmonyprodpartnersone.azurewebsites.net/api/AssetsByPartner';
  getassetFilter = '?code=7/NKrYdcf8OCvktozIiDED7X2KaMUQrvv7AkMQQKPeMPATj3aGTP6Q==';
  getAsset = 'getassetUrl + getassetFilter';

  constructor( private http: HttpClient ) { }

  getTickets() {
    return this.http.get(this.getTicket);
  }

  addTicket(ticket: Tickets): Observable<Tickets> {
     return this.http.post<Tickets>(this.postTicket, ticket);
  }

  getAssets() {
    return this.http.get(this.getAsset);
  }

}