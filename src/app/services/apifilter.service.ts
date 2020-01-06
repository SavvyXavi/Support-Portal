import { AuthenticationService } from './../login/services/authentication.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Profile } from '../login/models/profile';
import { ProfileService } from '../login/services/profile.service';

import { Filter } from './../models/filter';
import { Role } from '../types/role.enum';
import { Assets } from '../manage-assets/models/assets';
import { Contracts } from './../manage-assets/models/contracts';

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

  // partnerListapi = 'https://prodharmony.azurewebsites.net/api/PartnerList?code=2e6AULJLQxO60bOdJxfX6oxo57jkNueQEn4nsCKixFMjoheKzBc48w==';

partner1 = 'https://nasupport.harmonypsa.com/webapi/v1/companies/getcustomers'
partner2 = '?filter=%7B%20%20%20%22pageno%22%3A%201%2C%20%20%20%22pagesize%22%3A%201000%2C%20%20%20%22filt';
partner3 = 'ers%22%3A%20%5B%20%20%20%20%20%7B%20%20%20%20%20%20%20%22field%22%3A%20%22';
partner4 = 'AccountID%22%2C%20%20%20%20%20%20%20%22op%22%3A%20%22cn%22%2C%20%20%20%20%20%20';
partner5 = '%20%22data%22%3A%20%22Part-%22%2C%20%20%20%20%20%7D%20%20%20%5D%2C%20%20%20%22filterop%22%3A%20%22';
partner6 = 'AND%22%2C%20%20%20%22sortcolumn%22%3A%20%22string%22%2C%20%20%20%22sortorder%22%3A%20%22Asc%22%2C%20%20%20%22';
partner7 = 'resulttype%22%3A%20%22Json%22%2C%20%20%20%22gridcolumns%22%3A%20%22CompanyName%22%20%7D&api_key=81756df42a7f4766b58a4523357'
partner8 = 'a8ed9';
partnerApi = this.partner1 + this.partner2 + this.partner3 + this.partner5 + this.partner6 + this.partner7 + this.partner8;


  customerApi = 'https://prodharmony.azurewebsites.net/api/CompanyByPartner?code=a7VaewYNOND36Oo0A85ezo9m4bvmkQAzZPtOIfp3dPO/SROa2pE/dA==';
// customersapi =
// 'https://n1sharmonypull.azurewebsites.net/api/GetCompanies?code=vQsPGD8KR7cHjSP0hENehP9P3v5LKn7eY4JsmO9ALdB4Bc0a99Nmhg==';
  // partnerApi = 'https://prodharmony.azurewebsites.net/api/PartnerList?code=2e6AULJLQxO60bOdJxfX6oxo57jkNueQEn4nsCKixFMjoheKzBc48w==';

  pContractsApi =
  'https://prodharmony.azurewebsites.net/api/ContractsByPartner?code=GCrRyi4Y8rxCQ6mKJzLXYhROqECUR1clXjK9AdqhMEXEdOFPCqK8WA==';
  cContractsApi =
  'https://prodharmony.azurewebsites.net/api/ContractsByCustomer?code=SQVrhe8b7rFFsPV0LS6dxBniJW8QqVoa4Jjzv5gwLVuiD/Tg8uIvbQ==';


  assetsapi = 'https://prodharmony.azurewebsites.net/api/PartnerPullAssets?code=BmCsQrHGSIvMr1oFRw7T6kj7/a2H/x8GeOadWjmvZgSeaRwCqZGE9g==';
// assetsapi = 'https://n1sharmonypull.azurewebsites.net/api/AssetsPull?code=qQXwJm1YBabl4J8QlK6a2n2/JpY/mTacr66EYRdsZ2i3RfUkAucX4g==';
  ticketsapi = 'https://n1sharmonypull.azurewebsites.net/api/HttpTrigger1?code=lsPvad3uQA6s/pe1imbqoK0egnysVrGlsZXvaFsZ1jc69X6OdKQHcw==';

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
      'partner': filter.partner
    };

    return this.http.post(this.ticketsapi, params);
  }

  contractsFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };
      return this.http.post(this.pContractsApi, params);
    }

    custConFilter(filter: Filter) {
      const params = {
        'role': filter.partnerRole,
        'partner': filter.partner
      };
      return this.http.post(this.cContractsApi, params);
    }

  partnerCheck(filter: Filter) {
    const params = {
      'partner': filter.partner
    };
    return this.http.post(this.partnerApi, params);
  }

  // async partnerCheck() {
  //   const response = await fetch(this.partnerApi);
  //   const data: Partner = await response.json();
  // }

  customerFilter(filter: Filter) {
    let params;
    if (filter.partnerRole === 'Admin') {
      params = {
        'partner': '',
        'admin': '',
        'user': '',
        'email': ''
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
