import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Role } from '../../types/role.enum';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: Profile;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${environment.serverUrl}/profile`);
  }

  getById(id: string) {
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
