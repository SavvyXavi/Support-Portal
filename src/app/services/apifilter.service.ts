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

  assetsapi = 'https://prodharmony.azurewebsites.net/api/PartnerPullAssets?code=BmCsQrHGSIvMr1oFRw7T6kj7/a2H/x8GeOadWjmvZgSeaRwCqZGE9g==';
  ticketsapi = 'https://prodharmony.azurewebsites.net/api/TickersbyCustomer?code=2PgmwkpRzFu9ak1Stz6uRyGFa0LRwC61pWM9L5oSPzJLQkT33dlNvA==';

  constructor(
    private profileService: ProfileService,
    private auth: AuthenticationService,
    private http: HttpClient
  ) { }

  assetsFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };

    return this.http.post(this.assetsapi, params);
  }

  paginateAssets(filter: Filter, page: number): Observable<Assets> {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };

    return this.http.post<Assets>(this.assetsapi, params);
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

  getPartners( CompanyName: string ): Observable<Partner> {
    return of(this.partnerlist.find( partner =>  partner.CompanyName === CompanyName));
  }

  customerFilter(filter: Filter) {
    let params;
    if (filter.partnerRole === 'Admin') {
      params = {
        'partner': filter.partner,
        'admin': filter.partnerRole,
        'user': filter.firstName + ' ' + filter.lastName,
        'email': filter.email
      };
    } else if (filter.partnerRole === 'User' ) {
      params = {
        'partner': filter.partner,
        'user': filter.firstName + ' ' + filter.lastName,
        'email': filter.email
      };
    }
    return this.http.post(this.customerApi, params);
  }

  assetObersvable(filter: Filter): Observable<Assets[]> {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };

    return this.http.post<Assets[]>(this.assetsapi, params);
  }
}
