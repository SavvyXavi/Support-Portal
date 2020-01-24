import { Profile } from './../models/profile';
import { Injectable } from '@angular/core';
import { Filter } from '../../models/filter';
import { Role } from '../../types/role.enum';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable()

export class LoginpullsService {

  constructor(
    private http: HttpClient,
  ) { }
  code = '${environment.CusLoginPull}CompanyListByPartner?code=rhtQGzt22H6Z0VQb7iUNZYazTiZpKrCmkSEA71oORrDu/lUFysLEoA==';

  getPartnerList(): Observable<any> {
    return this.http.get(`${environment.LoginPull}PartnerList?code=6W5az23O1cyKatIJp7F/ayclp8hQal5rYbCywjOXN6kF5ZMzNluuVA==`);
  }
  getCompanyList(partner): Observable<any> {
    return this.http.get(this.code, partner);
  }

}
