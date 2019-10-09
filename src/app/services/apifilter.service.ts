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
  assetsapi = 'https://n1sharmonypull.azurewebsites.net/api/AssetsPull?code=qQXwJm1YBabl4J8QlK6a2n2/JpY/mTacr66EYRdsZ2i3RfUkAucX4g==';
  constructor(
    private profileService: ProfileService,
    private auth: AuthenticationService,
    private http: HttpClient
  ) { }

  profileFilter(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'partner': filter.partner
    };

    return this.http.post(this.assetsapi, params);
  }
}
