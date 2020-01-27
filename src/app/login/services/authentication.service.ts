import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile';

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

   login(username: string, password: string) {
     return this.http.post<Profile>(`${environment.serverUrl}/profile/authenticate`, {username, password})
     .pipe(map( profile => {
       if (profile && profile.token) {
         localStorage.setItem('currentUser', JSON.stringify(profile));
         this.currentUserSubject.next(profile);
       }

       return profile;
     }));
   }
   
   requestForgotPassword(body): Observable<any> {
    return this.http.post(`${environment.serverUrl}/profile/forgotpassword`, body);
  }

  newPassword(body): Observable<any> {
    return this.http.post(`${environment.serverUrl}/profile/new-password`, body);
  }

  validResetToken(body): Observable<any> {
    return this.http.post(`${environment.serverUrl}/profile/valid-reset-token`, body);
  }

   logout() {
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(null);
   }
}
