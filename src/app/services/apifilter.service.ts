import { AuthenticationService } from './../login/services/authentication.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Profile } from '../login/models/profile';
import { ProfileService } from '../login/services/profile.service';

import { Filter } from './../models/filter';
import { Role } from '../types/role.enum';
import { Assets } from '../manage-assets/models/assets';
import { Contracts } from './../manage-assets/models/contracts';
import { SpecContract } from './../manage-assets/models/spec-contract';
import { HttpClient } from '@angular/common/http';

import { Customer } from './../admin/models/customer';
import { Partner } from '../models/partner';
import { PartnerList } from '../partner-list';

// import { DataSource } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})

export class ApifilterService {
  contracts: Contracts;
  profile: Profile;
  partner: Partner;
  partnerlist = PartnerList;

  customerApi = 'https://prodharmony.azurewebsites.net/api/CompanyByPartner?code=a7VaewYNOND36Oo0A85ezo9m4bvmkQAzZPtOIfp3dPO/SROa2pE/dA==';
  partnerApi = 'https://prodharmony.azurewebsites.net/api/PartnerList?code=2e6AULJLQxO60bOdJxfX6oxo57jkNueQEn4nsCKixFMjoheKzBc48w==';

  pContractsApi =
  'https://prodharmony.azurewebsites.net/api/ContractsByPartner?code=GCrRyi4Y8rxCQ6mKJzLXYhROqECUR1clXjK9AdqhMEXEdOFPCqK8WA==';
  cContractsApi =
  'https://prodharmony.azurewebsites.net/api/ContractsByCustomer?code=SQVrhe8b7rFFsPV0LS6dxBniJW8QqVoa4Jjzv5gwLVuiD/Tg8uIvbQ==';
  refConApi = 'https://prodharmony.azurewebsites.net/api/SpecificContract?code=YcbG2hXdjXJa/o/b1nxRHhheVoY5l5AvHQ7AQGP9PhQUOppTFi3kig==';


  partassetsapi
   = 'https://prodharmony.azurewebsites.net/api/PartnerPullAssets?code=BmCsQrHGSIvMr1oFRw7T6kj7/a2H/x8GeOadWjmvZgSeaRwCqZGE9g==';
  custassetsapi
  = 'https://prodharmony.azurewebsites.net/api/CompanyPullAssets?code=qyUMwbo49BKruYRYNRlQnseFOATgwD/e9zJeIyk4ZBIO0xbOmvcVlQ==';
  schedassetsapi
  = 'https://prodharmony.azurewebsites.net/api/PullAssets?code=wZCo/nd961lZQyWL5EG8V6v9FFt9fiwk8m1x3cFekACWep3LQiipTA==';


  ticketsapi = 'https://prodharmony.azurewebsites.net/api/TickersbyCustomer?code=2PgmwkpRzFu9ak1Stz6uRyGFa0LRwC61pWM9L5oSPzJLQkT33dlNvA==';

  locationsapi =
  'https://prodharmony.azurewebsites.net/api/LocationsByCustomer?code=lOUnhasaC78wc6wyFKiG/loAC7aa0blBIca91Y/BdexlvkqGyEGMXw==';

  constructor(
    private profileService: ProfileService,
    private auth: AuthenticationService,
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
      'partner': filter.partner
    };

    return this.http.post(this.custassetsapi, params);
  }

  paginateAssets(filter: Filter, page: number): Observable<Assets> {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };

    return this.http.post<Assets>(this.partassetsapi, params);
  }

  assetsBySchedule(filter: Contracts) {
    const params = {
      'schedule': filter.scheduleName
    };
    return this.http.post(this.schedassetsapi, params);
  }

  ticketsFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'company': filter.partner
    };

    return this.http.post(this.ticketsapi, params);
  }

  partConFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };
      return this.http.post(this.pContractsApi, params);
    }

    partConFilterSelect(customer: Customer) {
      const params = {
        'partner': customer.companyName
      };
        return this.http.post<Contracts[]>(this.pContractsApi, params);
    }

    conByRef(refNum: string, schedname: string) {
      const params = {
        'ref': refNum,
        'schedname': schedname
      };
      return this.http.post(this.refConApi, params);
    }

    custConFilter(filter: Filter) {
      const params = {
        'role': filter.partnerRole,
        'partner': filter.partner
      };
      return this.http.post(this.cContractsApi, params);
    }

  getPartners() {
    return of(this.partnerlist);
  }

  // getCompanies(filter: Filter) {
  //   const Params = {
  //     'partner'
  //   }
  // }

  customerFilter(filter: Filter) {
    const params = {
        'partner': filter.partner,
        'user': filter.firstName + ' ' + filter.lastName,
        'email': filter.email
      };
    return this.http.post(this.customerApi, params);
  }

  locationFilter(filter: Filter) {
    const params = {
      'company': filter.partner
    };
    return this.http.post(this.locationsapi, params);
  }

  assetObersvable(filter: Filter): Observable<Assets[]> {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };

    return this.http.post<Assets[]>(this.partassetsapi, params);
  }
}
