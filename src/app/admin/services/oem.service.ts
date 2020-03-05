import { AssetFilter } from './../models/assetFilter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogoList } from '../../logo-list';
import { Logo } from '../../logolist';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { DataPull } from '../models/datapull';
import { Role } from '../../types/role.enum';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OemService {
  monApi = '?apikey=oP8HKeRjL6ejiZuqkbkRJWrG5ZqbGUTEkhUaSshWWrH3bnZDgvhqH8CFeXGkAZcV';
  oemPull = 'https://n1sharmonypull.azurewebsites.net/api/OEMPull?code=1d9quTWcruk3APk5NqxpPyN8Qez0flIun778ihBgIfB/QKj1eGDMyQ==';
  monPull = 'https://localmonitor.noble1it.com/nagiosxi/api/v1/objects/servicestatus';
  combPull = this.monPull + this.monApi;
  azureMonitor = 'https://prodharmonytwo.azurewebsites.net/api/NagiosCall?code=b99vLlCwafNeOtiqbk1VlJ6upDuWsCo06ox9oxr65sggj3KtLv2qFQ==';
  logolist: Logo[];
  datapull: DataPull;
  assetfilter: AssetFilter;


  constructor( private http: HttpClient ) { }

  getOem() {
    return this.http.get(this.oemPull);
  }
  getMon() {
    return this.http.get(this.azureMonitor);
  }
  getLogo(): Observable<Logo[]> {
    return of(LogoList);
  }
  getAllAssets(): Observable<DataPull[]> {
    return this.http.get<DataPull[]>(`${environment.serverUrl}/`);
  }
  testDataPull(): Observable<DataPull[]> {
    return this.http.get<DataPull[]>(`${environment.AssetTest}/profile`);
  }

  testTicketPull(): Observable<AssetFilter[]> {
    return this.http.get<AssetFilter[]>(`${environment.AssetTest}/profile`);
  }
  partTicketFilter() {
    return this.http.get<AssetFilter[]>(`${environment.AssetTest}/profile`);
  }







}
