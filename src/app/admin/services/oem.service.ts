import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OemService {
  monApi = 'nagiosxi/api/v1/objects/servicestatus?apikey=oP8HKeRjL6ejiZuqkbkRJWrG5ZqbGUTEkhUaSshWWrH3bnZDgvhqH8CFeXGkAZcV';
  oemPull = 'https://n1sharmonypull.azurewebsites.net/api/OEMPull?code=1d9quTWcruk3APk5NqxpPyN8Qez0flIun778ihBgIfB/QKj1eGDMyQ==';
  monPull = 'https://localmonitor.noble1it.com/nagiosxi/api/v1/objects/servicestatus?apikey=';
  combPull = this.monPull + this.monApi;

  constructor( private http: HttpClient ) { }

  getOem() {
    return this.http.get(this.oemPull);
  }
  getMon() {
    return this.http.get(this.combPull);
  }
}
