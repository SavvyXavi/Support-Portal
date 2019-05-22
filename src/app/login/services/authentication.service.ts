import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile';
import { Role } from '../../types/role.enum';
import { Partner } from '../../types/partner.enum';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Profile>;
  public currentUser: Observable<Profile>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Profile>(
      JSON.parse(
        localStorage.getItem('currentUser')
      )
    );
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): Profile {
     return this.currentUserSubject.value;
   }

   login(username: string, password: string, partner: Partner, partnerRole: Role) {
     return this.http.post<any>(`${environment.serverUrl}/profile/authenticate`, {username, password, partner, partnerRole})
     .pipe(map( profile => {
       if (profile && profile.token) {
         localStorage.setItem('currentUser', JSON.stringify(profile));
         this.currentUserSubject.next(profile);
       }

       return profile;
     }));
   }

   logout() {
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(null);
   }
}
