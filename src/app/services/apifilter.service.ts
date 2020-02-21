import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Profile } from '../index/index/models/profile';

import { Filter } from './../models/filter';
import { Contracts } from './../contracts/models/contracts';
import { HttpClient } from '@angular/common/http';

import { Partner } from '../models/partner';
import { PartnerList } from '../partner-list';

@Injectable({
  providedIn: 'root'
})

export class ApifilterService {
  contracts: Contracts;
  profile: Profile;
  partner: Partner;
  partnerlist = PartnerList;

  customerApi =
'https://harmonyprodcustomersone.azurewebsites.net/api/CompanyListByPartner?code=rhtQGzt22H6Z0VQb7iUNZYazTiZpKrCmkSEA71oORrDu/lUFysLEoA==';
  partnerApi = 'https://prodharmony.azurewebsites.net/api/PartnerList?code=2e6AULJLQxO60bOdJxfX6oxo57jkNueQEn4nsCKixFMjoheKzBc48w==';


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


  oldpartassetsapi
   = 'https://prodharmonytwo.azurewebsites.net/api/PartnerPullAssets?code=jZK5Np57XB8xaTlNIlnyj9Pga9ar34hvOD4fkzGj/xTAlHNCemQvpw==';
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


  pTicketsApi
   = 'https://prodharmonytwo.azurewebsites.net/api/PartnerPullTickets?code=gQ1Dy1X0aUP27jaL/65LTEV3Pkxm3ptezl8a8/Rg5rhDOOCQblpmgA==';
  cTicketsApi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/TicketsByCustomer?code=wRFojwmWCLa85RKi5UtEg6VLQ1T8ENAdIMeCoRmaRQTaFwEEqGLHBw==';
  ticketsLocationapi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/TicketsByLocation?code=Dj9Nn0m5gd3RuNDO5E/xq9r7AqN7S0z34mrL2bsSwxkANwga/1iJyQ==';
  ticketRefApi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/TicketsByRefNumber?code=O1Sok3K9e4QIPE/IGmb7YPdn/WlwY97zxeufiVVCmD2iw5FN8/8jyg==';


  pLocationsapi =
  'https://harmonyprodpartnersone.azurewebsites.net/api/LocationsByPartner?code=4rYRhjsKV710lRV0tXwOXlfMJkzwUp3mPnvpn2dpKA/FgbAYEPIxow==';
  cLocationsapi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/LocationsByCustomer?code=S5urk3EhAuuuMATbFA8E5/ixHQPJhcaC6wlLAP4GPxs4qN0tPsfuIA==';
  locationdescfilterapi =
'https://harmonyprodcustomersone.azurewebsites.net/api/LocationByDescription?code=LlWycAaW502tdZ9EMsNbkqapKMVLR7yfsFJRapYhwAlXuqwpnp9ELA==';

  constructor(
    private http: HttpClient
  ) { }

  partAssetsFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };
    return this.http.post(this.partassetsapi, params);
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

  ticketsLocationFilter(filter: string) {
    const params = {
      'location': filter
    };
    return this.http.post(this.ticketsLocationapi, params);
  }

  ticketRefFilter(filter: string) {
    const params = {
      'refnumber': filter
    };
    return this.http.post(this.ticketRefApi, params);
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
