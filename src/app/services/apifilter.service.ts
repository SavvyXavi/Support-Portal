import { AuthenticationService } from './../login/services/authentication.service';
import { Injectable } from '@angular/core';

import { Profile } from '../login/models/profile';
import { ProfileService } from '../login/services/profile.service';

import { Filter } from './../models/filter';

import { Partner } from './../types/partner.enum';
import { Role } from '../types/role.enum';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ApifilterService {

  profile: Profile;
  customersapi = 'https://n1sharmonypull.azurewebsites.net/api/GetCompanies?code=vQsPGD8KR7cHjSP0hENehP9P3v5LKn7eY4JsmO9ALdB4Bc0a99Nmhg==';
  contractsapi = 'https://n1sharmonypull.azurewebsites.net/api/ContractsPull?code=exD/Xcz5HraenO9WyxGEyB7HloKBbOO2GJ5Xo1CwVO6T6pv9Q/Fl8A==';
  assetsapi = 'https://n1sharmonypull.azurewebsites.net/api/AssetsPull?code=qQXwJm1YBabl4J8QlK6a2n2/JpY/mTacr66EYRdsZ2i3RfUkAucX4g==';
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

  ticketsFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };

    return this.http.post(this.ticketsapi, params);
  }

  contractsFilter(filter: Filter) {
    const params = {
      'partner': filter.partner
    };
    return this.http.post(this.contractsapi, params);
  }

  customerFilter(filter: Filter) {
    let params;
    if (filter.partnerRole === 'Admin') {
      params = {
        'partner': filter.partner,
        'admin': filter.firstName + ' ' + filter.lastName
      };
    } else if (filter.partnerRole === 'User' ) {
      params = {
        'partner': filter.partner,
        'name': filter.firstName + ' ' + filter.lastName,
        'email': filter.email
      };
    }
    return this.http.post(this.customersapi, params);
  }
}
