import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OemService {

  oemPull = 'https://n1sharmonypull.azurewebsites.net/api/OEMPull?code=1d9quTWcruk3APk5NqxpPyN8Qez0flIun778ihBgIfB/QKj1eGDMyQ==';

  constructor( private http: HttpClient ) { }

  getOem() {
    return this.http.get(this.oemPull);
  }
}
