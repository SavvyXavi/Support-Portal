import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Profile } from '../index/models/profile';

import { Filter } from './../models/filter';
import { Contracts } from './../contracts/models/contracts';
import { HttpClient } from '@angular/common/http';

import { Partner } from '../models/partner';
import { PartnerList } from '../partner-list';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApifilterService {
  contracts: Contracts;
  profile: Profile;
  partner: Partner;
  partnerlist = PartnerList;

  nobleApi =
  'https://indvdlpartner.azurewebsites.net/api/Nobl1Assets?code=aWlhQda2pA0oJYMXmBpWvks9EwV8xFG5QV5WSeUcOL8SLakHXzTaFQ==';

reluApi =
  'https://indvdlpartner.azurewebsites.net/api/RelusAssets?code=kvN7GwMGY2KwuruqgWKPRFdpQwWBwnvsihvsSjws5paebYAqpiIe7A==';

reliApi =
  'https://indvdlpartner.azurewebsites.net/api/ReliantAssets?code=JA6YllcDUJQOTaMuJV8o0y17ZZaQYF3xTvvjyGKnGaFzMbYaYI017A==';

// assetsApi =
//   'https://harmonyprodpartnersone.azurewebsites.net/api/AssetsByPartner?code=7/NKrYdcf8OCvktozIiDED7X2KaMUQrvv7AkMQQKPeMPATj3aGTP6Q==';

  nobleTick =
  'https://indvdlpartner.azurewebsites.net/api/HttpTrigger1?code=fWS1UWW8xaY1j3dUMu0w2AB9JGc/SS1/6AmRWiUQc/HVgJNUaTeOKQ==';

  reluTick =
  'https://indvdlpartner.azurewebsites.net/api/Relustickets?code=7UUkBzs7TUButH9heEDa468UE9KgABhIDScGrQ4HhnOT/bdeptQ1jg==';

  reliTick =
  'https://indvdlpartner.azurewebsites.net/api/ReliantTickets?code=limYO/Q72TyX9DyJyBQPfb3s6HEgTxRYEDWwSZwYD1fI6Z4fCsa2Kw==';


  apiKey = '&api_key=81756df42a7f4766b58a4523357a8ed9';

  customerApi =
'https://harmonyprodcustomersone.azurewebsites.net/api/CompanyListByPartner?code=rhtQGzt22H6Z0VQb7iUNZYazTiZpKrCmkSEA71oORrDu/lUFysLEoA==';
  partnerApi =
'https://harmonyprodpartnersone.azurewebsites.net/api/PartnerList?code=6W5az23O1cyKatIJp7F/ayclp8hQal5rYbCywjOXN6kF5ZMzNluuVA==';


  pContractsApi =
  'https://harmonyprodpartnersone.azurewebsites.net/api/ContractsByPartner?code=4QQzdPj2j4LgMuJ9wnzmomSadWCLJEpbSOKcJqhBPRDswDZUCq6NqA==';
  cContractsApi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/ContractsByCustomer?code=bpca1PGS/szLyokaPXrzwhbTmpIv1NIC8St234Ce8anUtUKo8uUWkg==';
  refConApi =
   'https://harmonyprodpartnersone.azurewebsites.net/api/ContractByRefNumber?code=NU4mL4qSFBbCJm9JJYRL75iYb3jljdjT5gicDiZxy0sUz/HfI2DfHw==';
  nameConApi =
  'https://harmonyprodpartnersone.azurewebsites.net/api/ContractsByName?code=IZMBTTmJ5l7M3WPeKg46l/3lfEaAKMgKdagfNCM8T07vyO05QqqBSg==';
  pSchedDayCountApi =
  'https://prodharmonytwo.azurewebsites.net/api/getSchedDaysToGo?code=NxVHnZOpdgRSQCa35OBTA7g/r6wm3euGe0a8pWHG6hDNG7PTCkPJNQ==';
  cSchedDayCountApi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/SchedByDays?code=ohdQ0dVI3F2jeqDbl96uN1lO7WqvYkcH7OW41bYMeBekzFhb5bRFzw==';



   partassetsapi
   =   'https://harmonyprodpartnersone.azurewebsites.net/api/AssetsByPartner?code=7/NKrYdcf8OCvktozIiDED7X2KaMUQrvv7AkMQQKPeMPATj3aGTP6Q==';
  custassetsapi
  = 'https://harmonyprodcustomersone.azurewebsites.net/api/AssetByCustomer?code=srg4TRFO6Uvo2YxaFGKlpJ59714bHNlgBTtSXdxDvk7WwBfX8VkdTw==';
  schedassetsapi
  = 'https://harmonyprodpartnersone.azurewebsites.net/api/AssetsBySchedule?code=Q3Yjx/KXbuErLesg4oBVs5BJrdFdOMkXn0T/HoLO6hDrCavd45iN9A==';
  serialassetsapi
  = 'https://harmonyprodcustomersone.azurewebsites.net/api/AssetDrillDown?code=cwjoeQCF3Qx5PwX0xfLJDclqyxjEyW/gZppvvS6K/g07nFSOTfudrg==';
  assetlocationapi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/AssetsByLocation?code=aO2JTfqrHEJNatGh3FIlDHs90/fGncezd7CVxMfZX/lqR9ZoyHvIYw==';
  locassbypart
  = 'https://localapicall.noble1it.com/profile/asset/';
  locassbycust
  = 'https://localapicall.noble1it.com/profile/Part/';




  pTicketsApi
   = 'https://prodharmonytwo.azurewebsites.net/api/PartnerPullTickets?code=gQ1Dy1X0aUP27jaL/65LTEV3Pkxm3ptezl8a8/Rg5rhDOOCQblpmgA==';
  cTicketsApi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/TicketsByCustomer?code=wRFojwmWCLa85RKi5UtEg6VLQ1T8ENAdIMeCoRmaRQTaFwEEqGLHBw==';
  ticketsLocationapi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/TicketsByLocation?code=Dj9Nn0m5gd3RuNDO5E/xq9r7AqN7S0z34mrL2bsSwxkANwga/1iJyQ==';
  ticketRefApi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/TicketsByRefNumber?code=O1Sok3K9e4QIPE/IGmb7YPdn/WlwY97zxeufiVVCmD2iw5FN8/8jyg==';
  betterTicketApi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/GetServiceTicket?code=YUu0cxU6Y1jRblyChWMLvUDy3F8cl10JbzUanVr5ybcg4in3na0I2A==';


  pLocationsapi =
  'https://harmonyprodpartnersone.azurewebsites.net/api/LocationsByPartner?code=4rYRhjsKV710lRV0tXwOXlfMJkzwUp3mPnvpn2dpKA/FgbAYEPIxow==';
  cLocationsapi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/LocationsByCustomer?code=S5urk3EhAuuuMATbFA8E5/ixHQPJhcaC6wlLAP4GPxs4qN0tPsfuIA==';
  locationdescfilterapi =
'https://harmonyprodcustomersone.azurewebsites.net/api/LocationByDescription?code=LlWycAaW502tdZ9EMsNbkqapKMVLR7yfsFJRapYhwAlXuqwpnp9ELA==';

   getTicketDeets = 'https://nasupport.harmonypsa.com/webapi/v1/tickets/getcommentsbyticketreference?idOrRef='
    addon = '&resultType=Json';
    getAzTicketDeets =
    'https://harmonyprodcustomersone.azurewebsites.net/api/GetServiceTicket?code=YUu0cxU6Y1jRblyChWMLvUDy3F8cl10JbzUanVr5ybcg4in3na0I2A==';


  constructor(
    private http: HttpClient
  ) { }

  nobleAss() {
    return this.http.get(this.nobleApi);
  }

  reluAss() {
    return this.http.get(this.reluApi);
  }

  reliAss() {
    return this.http.get(this.reliApi);
  }


  nobleTicks() {
    return this.http.get(this.nobleTick);
  }

  reluTicks() {
    return this.http.get(this.reluTick);
  }

  reliTicks() {
    return this.http.get(this.reliTick);
  }





  partAssetsFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };
    return this.http.post(this.partassetsapi, params);
  }

  locpartAssetFilter(id: Filter) {
    return this.http.get(`${environment.AssetTest}/asset/${id.partner}`);
}

  custAssetsFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'company': filter.company
    };
    return this.http.post(this.custassetsapi, params);
  }

  assetsBySchedule(schedule: string) {
    const params = {
      'schedule': schedule
    };
    return this.http.post(this.schedassetsapi, params);
  }

  assetsBySerial(serial: string) {
    const params = {
      'serial': serial
    };
    return this.http.post(this.serialassetsapi, params);
  }

  assetsByLocation(filter: string) {
    const params = {
      'location': filter
    };
    return this.http.post(this.assetlocationapi, params);
  }

  cusTicketsFilter(filter: string) {
    const params = {
      'company': filter
    };
    return this.http.post(this.cTicketsApi, params);
  }

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

  locCustTicketsFilter(id: Filter) {
    return this.http.get(`${environment.AssetTest}/loc/${id.company}`);
}

  locCustAssetsFilter(id: Filter) {
    return this.http.get(`${environment.AssetTest}/part/${id.company}`);
}

  locCustlocatFilter(id: Filter) {
    return this.http.get(`${environment.AssetTest}/loc/${id.company}`);
}

  locTicketsFilter(id: Filter) {
  return this.http.get(`${environment.AssetTest}/assets/}`);
}

  ticketsLocationFilter(filter: string) {
    const params = {
      'location': filter
    };
    return this.http.post(this.ticketsLocationapi, params);
  }

  locpartLocatFilter(id: Filter) {
    return this.http.get(`${environment.AssetTest}/Partloc/${id.partner}`);
}

  getAzComments(filter: string) {
    const params = {
      'ref': filter,
    };
    return this.http.post(this.getAzTicketDeets, params);
  }

  getComments(filter: string) {
    const params = {
      'idOrRef': filter,
    };
    return this.http.get(this.getTicketDeets + '%23' + filter + this.apiKey );
  }

  ticketRefFilter(filter: string) {
    const params = {
      'refnumber': filter
    };
    return this.http.post(this.ticketRefApi, params);
  }

  betterTicketRefFilter(filter: string) {
    const params = {
      'refnumber': filter
    };
    return this.http.post(this.betterTicketApi, params);
  }


  partConFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };
      return this.http.post(this.pContractsApi, params);
    }

    conByRef(refNum: string) {
      const params = {
        'refnumber': refNum,
      };
      return this.http.post(this.refConApi, params);
    }

    conByName(name: string) {
      const params = {
        'schedName': name
      };
      return this.http.post(this.nameConApi, params);
    }

    custConFilter(filter: Filter) {
      const params = {
        'role': filter.partnerRole,
        'customer': filter.company
      };
      return this.http.post(this.cContractsApi, params);
    }

    pConByDays(filter: Filter) {
      const params = {
        'partner': filter.partner
      };
      return this.http.post(this.pSchedDayCountApi, params);
    }

    regGetPartner() {
      return this.http.get(this.partnerApi);
    }

    cConByDays(filter: Filter) {
      if (filter.company.includes('&')) {
        const customer = filter.company.replace('&', '%26');
        const params = {
          'customer': customer
        };
        return this.http.post(this.cSchedDayCountApi, params);
      } else {
        const params = {
          'customer': filter.company
        };
        return this.http.post(this.cSchedDayCountApi, params);
      }
    }


  getPartners() {
    return of(this.partnerlist);
  }

  customerFilter(filter: Filter) {
    const params = {
        'partner': filter.partner
      };
    return this.http.post(this.customerApi, params);
  }

  registerCustFilter(filter: string) {
    const params = {
      'partner': filter
    };
  return this.http.post(this.customerApi, params);
  }


  partLocationFilter(filter: Filter) {
    const params = {
      'partner': filter.partner
    };
    return this.http.post(this.pLocationsapi, params);
  }

  custLocationFilter(filter: Filter) {
    const params = {
      'company': filter.company
    };
    return this.http.post(this.cLocationsapi, params);
  }

  locationFilter(desc: string) {
    const params = {
      'description': desc
    };
    return this.http.post(this.locationdescfilterapi, params);
  }
}
