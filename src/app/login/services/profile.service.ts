import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Profile[]>(`${environment.serverUrl}/profile`);
  }

  getById(id: number) {
    return this.http.get(`${environment.serverUrl}/profile/${id}`);
  }

  getByRole( profile: Profile) {
    return this.http.get(`${environment.serverUrl}/profile/${profile.partnerRole}`);
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
