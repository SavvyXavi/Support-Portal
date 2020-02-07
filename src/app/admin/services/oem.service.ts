import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OemService {
  monApi = '?apikey=ZKA6LZUGglahNSrnisEm2EoSj3qeee5kouo0W7aq4AlHTZpoCN5hLG98TW8uVN0I&pretty=1';
  oemPull = 'https://n1sharmonypull.azurewebsites.net/api/OEMPull?code=1d9quTWcruk3APk5NqxpPyN8Qez0flIun778ihBgIfB/QKj1eGDMyQ==';
  monPull = 'https://localmonitor.noble1it.com/nagiosxi/api/v1/objects/servicestatus';


  constructor( private http: HttpClient ) { }

  getOem() {
    return this.http.get(this.oemPull);
  }
  getMon() {
    return this.http.get(this.monPull + this.monApi);
  }
}
