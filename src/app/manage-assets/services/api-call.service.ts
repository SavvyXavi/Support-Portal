import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Tickets } from '../models/tickets';
import { Assets } from '../models/assets';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  postTicket = 'https://n1sharmonypull.azurewebsites.net/api/MakeHamonyQuote?code=PJLcheEaYAITwiQ2Juxi0PBHJp8PZJZgwAAA03n9rbBbqwJ2m4gRJw==';
  getTicket = 'https://n1sharmonypull.azurewebsites.net/api/HttpTrigger1?code=lsPvad3uQA6s/pe1imbqoK0egnysVrGlsZXvaFsZ1jc69X6OdKQHcw==';

  getAsset = 'https://n1sharmonypull.azurewebsites.net/api/AssetsPull?code=qQXwJm1YBabl4J8QlK6a2n2/JpY/mTacr66EYRdsZ2i3RfUkAucX4g==';

  constructor( private http: HttpClient) { }

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

// module.exports =  function (context, req) {
//   var request = require('request');
//   var baseAPIKey = '?api_key=81756df42a7f4766b58a4523357a8ed9';
//   if (req.body.TicketType === "Quote") {
//      var baseUrl = 'https://nasupporttest.harmonypsa.com/webapi/v1/tickets/createticket';
//       var OutData = {
//           "Title": req.body.Title,
//           "Description": req.body.Description,
//           "CustomerNameOrId": req.body.CustomerNameOrId,
//           "AssetRefOrId": req.body.AssetRefOrId,
//           "ContactEmailOrId": req.body.ContactEmailOrId,
//           "VisibleToCustomer": true,
//           "TicketTypeNameOrId": req.body.TicketTypeNameOrId,
//           "TicketCategoryNameOrId": req.body.TicketCategoryNameOrId
//           };
//       }
//   if (req.body.TicketType === "Add Comment") {
//      var baseUrl = 'https://nasupporttest.harmonypsa.com/webapi/v1/tickets/addcomment';
//      }
//       var OutData = {
//           "TicketRefOrId": req.body.TicketRefOrId,
//           "Comment": req.body.Comment
//       };
//   var wholeUrl = baseUrl + baseAPIKey ;
//   var OutOptions = {
//       method: 'post',
//       body: OutData,
//       json: true,
//       url: wholeUrl
//       };
//   request(OutOptions, function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//             context.res.body = {body};
//       }
//       else {
//            context.res.body = {body};
//       }
//       context.done();
//   }
