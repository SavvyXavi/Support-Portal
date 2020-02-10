import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OemService {
  monApi = '?apikey=oP8HKeRjL6ejiZuqkbkRJWrG5ZqbGUTEkhUaSshWWrH3bnZDgvhqH8CFeXGkAZcV';
  oemPull = 'https://n1sharmonypull.azurewebsites.net/api/OEMPull?code=1d9quTWcruk3APk5NqxpPyN8Qez0flIun778ihBgIfB/QKj1eGDMyQ==';
  monPull = 'https://localmonitor.noble1it.com/nagiosxi/api/v1/objects/servicestatus';
  combPull = this.monPull + this.monApi;
  azureMonitor = 'https://prodharmonytwo.azurewebsites.net/api/NagiosCall?code=b99vLlCwafNeOtiqbk1VlJ6upDuWsCo06ox9oxr65sggj3KtLv2qFQ==';

  constructor( private http: HttpClient ) { }

  getOem() {
    return this.http.get(this.oemPull);
  }
  getMon() {
    return this.http.get(this.azureMonitor);
  }
}
