import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const tempUrl = 'https://n1sapifunctest.azurewebsites.net/api/ServTicketCall?code=JHUfbJxsGVPGV7KqlKadkv1U9HQAYi1YWnYabKHM/GlxrnHfunuxSw==';

@Injectable({
  providedIn: 'root'
})
export class FuncappService {

  constructor( private http: HttpClient ) { }

  tempCall(name: any ): Observable<any> {
    return this.http.post( tempUrl, {'name': name });
  }
}
