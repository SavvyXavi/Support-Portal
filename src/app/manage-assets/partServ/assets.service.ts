import { Injectable } from '@angular/core';
import { AssetsModule } from '../assets/assets.module';

import { HttpClient } from '@angular/common/http';

import { Filter } from '../../models/filter';


@Injectable({
  providedIn: AssetsModule
})
export class AssetsService {
  nobleApi =
    'https://indvdlpartner.azurewebsites.net/api/Nobl1Assets?code=aWlhQda2pA0oJYMXmBpWvks9EwV8xFG5QV5WSeUcOL8SLakHXzTaFQ==';

  reluApi =
    'https://indvdlpartner.azurewebsites.net/api/RelusAssets?code=kvN7GwMGY2KwuruqgWKPRFdpQwWBwnvsihvsSjws5paebYAqpiIe7A==';

  reliApi =
    'https://indvdlpartner.azurewebsites.net/api/ReliantTickets?code=limYO/Q72TyX9DyJyBQPfb3s6HEgTxRYEDWwSZwYD1fI6Z4fCsa2Kw==';

  assetsApi =
    'https://harmonyprodpartnersone.azurewebsites.net/api/AssetsByPartner?code=7/NKrYdcf8OCvktozIiDED7X2KaMUQrvv7AkMQQKPeMPATj3aGTP6Q==';


  constructor(
    private http: HttpClient
  ) { }

  assetsFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };
    return this.http.post(this.assetsApi, params);
  }

  nobleAss() {
    return this.http.get(this.nobleApi);
  }

  reluAss() {
    return this.http.get(this.reluApi);
  }

  reliAss() {
    return this.http.get(this.reliApi);
  }
}
