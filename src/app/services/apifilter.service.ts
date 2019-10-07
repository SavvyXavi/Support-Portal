import { AuthenticationService } from './../login/services/authentication.service';
import { Injectable } from '@angular/core';

import { Profile } from '../login/models/profile';
import { ProfileService } from '../login/services/profile.service';

import { Partner } from './../types/partner.enum';
import { Role } from '../types/role.enum';
@Injectable({
  providedIn: 'root'
})
export class ApifilterService {

  profile: Profile;

  constructor(
    private api: ProfileService,
    private auth: AuthenticationService
  ) { }

  profileFilter(name: string, role: string, partner: string) {
    // this.api.getAll().subscribe(
    // )

    name = this.auth.currentUserValue.firstName + ' ' + this.auth.currentUserValue.lastName;
    role = this.auth.currentUserValue.partnerRole;
    partner = this.auth.currentUserValue.partner;

    const params = {
      'name': name,
      'role': role,
      'partner': partner
    }
  }

}
