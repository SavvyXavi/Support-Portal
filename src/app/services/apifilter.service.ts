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
  'https://harmonyprodpartnersone.azurewebsites.net/api/ContractsByPartner?code=4QQzdPj2j4LgMuJ9wnzmomSadWCLJEpbSOKcJqhBPRDswDZUCq6NqA==';
  cContractsApi =
  'https://harmonyprodcustomersone.azurewebsites.net/api/ContractsByCustomer?code=bpca1PGS/szLyokaPXrzwhbTmpIv1NIC8St234Ce8anUtUKo8uUWkg==';
  refConApi = 'https://prodharmony.azurewebsites.net/api/SpecificContract?code=YcbG2hXdjXJa/o/b1nxRHhheVoY5l5AvHQ7AQGP9PhQUOppTFi3kig==';


  partassetsapi
   = 'https://prodharmonytwo.azurewebsites.net/api/PartnerPullAssets?code=jZK5Np57XB8xaTlNIlnyj9Pga9ar34hvOD4fkzGj/xTAlHNCemQvpw==';
  custassetsapi
  = 'https://harmonyprodcustomersone.azurewebsites.net/api/AssetByCustomer?code=srg4TRFO6Uvo2YxaFGKlpJ59714bHNlgBTtSXdxDvk7WwBfX8VkdTw==';
  schedassetsapi
  = 'https://prodharmony.azurewebsites.net/api/PullAssets?code=wZCo/nd961lZQyWL5EG8V6v9FFt9fiwk8m1x3cFekACWep3LQiipTA==';


  pTicketsApi
   = 'https://prodharmonytwo.azurewebsites.net/api/PartnerPullTickets?code=gQ1Dy1X0aUP27jaL/65LTEV3Pkxm3ptezl8a8/Rg5rhDOOCQblpmgA==';

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

  partTicketsFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };

    return this.http.post(this.pTicketsApi, params);
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
