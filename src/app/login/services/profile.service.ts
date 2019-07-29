import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Role } from '../../types/role.enum';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: Profile;

  constructor(private http: HttpClient) {}

  // private request(method: 'post'|'get', type: 'login'|'register'|'profile', profile?: Profile): Observable<any> {
  //   let base;

  //   if (method === 'post') {
  //     base = this.http.post(`${environment.serverUrl}/${type}`, profile);
  //   } else {
  //     base = this.http.get(`${environment.serverUrl}/${type}`, { headers: { Authorization: `Bearer ${this.authenticationService.currentUserValue.token}` }});
  //   }
  //   const request = base.pipe(
  //     map((data: Profile) => {
  //       if (data.token) {
  //         localStorage.setItem('Authorization', data.token);
  //       }
  //       return data;
  //     })
  //   );

  //   return request;
  // }

  getAll(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${environment.serverUrl}/profile`);
  }

  getById(id: number) {
    return this.http.get(`${environment.serverUrl}/profile/${id}`);
  }

  getByRole(role: Role) {
    return this.http.get(`${environment.serverUrl}/profile/${role}`);
  }

  register(profile: Profile) {
    return this.http.post(`${environment.serverUrl}/profile/register`, profile);
  }

  update(profile: Profile) {
    return this.http.put(`${environment.serverUrl}/profile/${profile.id}`, profile);
  }

  delete(id: number) {
   return this.http.delete(`${environment.serverUrl}/profile/${id}`);
  }
}
