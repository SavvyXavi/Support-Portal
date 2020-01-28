import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from './authentication.service';

import { Profile } from '../../login/models/profile';
import { Filter } from '../../models/filter';
import { Role } from '../../types/role.enum';
import { Partner } from '../../models/partner';
import { PartnerList } from '../../partner-list';

@Injectable({
  providedIn: 'root'
})


 export class LoginpullsService {
  profile: Profile;
  partner: Partner;
  partnerlist = PartnerList;

  code = 
  '$https://harmonyprodpartnersone.azurewebsites.net/api/CompanyListByPartner?code=rhtQGzt22H6Z0VQb7iUNZYazTiZpKrCmkSEA71oORrDu/lUFysLEoA==';
  locationsapi =
  'https://prodharmony.azurewebsites.net/api/LocationsByCustomer?code=lOUnhasaC78wc6wyFKiG/loAC7aa0blBIca91Y/BdexlvkqGyEGMXw==';

  constructor(
    private auth: AuthenticationService,
    private http: HttpClient
  ) { }


  getPartnerList(): Observable<any> {
    return this.http.get(`${environment.LoginPull}PartnerList?code=6W5az23O1cyKatIJp7F/ayclp8hQal5rYbCywjOXN6kF5ZMzNluuVA==`);
  }
//  oldgetCompanyList(filter: Filter): Observable<any> {
//     return this.http.get(this.code, filter.partner);
//  }
  getCompanyList(filter: Filter) {
    const params = {
      'role': filter.partnerRole,
      'partner': this.partner
    };
    return this.http.post(this.code, this.partner);
  }

}
