import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Filter } from '../../models/filter';
import { PortalModule } from '@angular/cdk/portal';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: PortalModule
})
export class DashService {

  pTicketsApi =
   'https://prodharmonytwo.azurewebsites.net/api/PartnerPullTickets?code=gQ1Dy1X0aUP27jaL/65LTEV3Pkxm3ptezl8a8/Rg5rhDOOCQblpmgA==';
  cTicketsApi =
    'https://harmonyprodcustomersone.azurewebsites.net/api/TicketsByCustomer?code=wRFojwmWCLa85RKi5UtEg6VLQ1T8ENAdIMeCoRmaRQTaFwEEqGLHBw==';

  constructor(
    private http: HttpClient
  ) { }

  partTicketsFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };
    return this.http.post(this.pTicketsApi, params);
  }
  locpartTicketsFilter(id: Filter) {
    return this.http.get(`${environment.AssetTest}/Partick/${id.partner}`);
}

locCustAssetsFilter(id: Filter) {
  return this.http.get(`${environment.AssetTest}/part/${id.company}`);
}

locCustTicketsFilter(id: string) {
  return this.http.get(`${environment.AssetTest}/loc/${id}`);
}

  cusTicketsFilter(filter: string) {
    const params = {
      'company': filter
    };
    return this.http.post(this.cTicketsApi, params);
  }


}
