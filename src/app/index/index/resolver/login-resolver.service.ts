import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';

import { Profile } from './../models/profile';
import { Observable } from 'rxjs';

import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginResolverService implements Resolve<Profile>{
  CurrentProfile: Profile;
  constructor(
    private auth: AuthenticationService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Profile | Promise<Profile> {
    // return CurrentProfile = JSON.parse(localStorage.getItem('currentUser'));
    // )
  }


}
