import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

import { Observable } from 'rxjs';

import { Profile } from '../models/profile';
import { Role } from 'src/app/types/role.enum';
import { Logo } from './../../logolist';

import { LogoList } from './../../logo-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title = 'Support Portal';
  currentProfile: Profile;
  role: Role;
  selectedLogo: Logo;

  logoList = LogoList;
  displayLo: Logo;
  logo: string;

  constructor (
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(
          name => {
            this.currentProfile = name;
          }
        );
        this.logo = this.displayLo.Logo;
      }

  ngOnInit() {
    // this.displayLogo();
  }

  logout() {
    localStorage.clear();
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

   displayLogo() {
    return this.displayLo = this.logoList.find(x => x.CompanyName === this.currentProfile?.partner);
  }


  dashLink() {
    const dash = this.authenticationService.currentUserValue.partner;
      switch (dash) {
        case 'NorthSmart (Northland)':
          this.router.navigate(['/northdash']);
        break;
        case 'Noble1 Solutions'  || 'Colwick Travel' || 'xByte Technologies':
          this.router.navigate(['/dashboard']);
        break;
        case 'Reliant Technology':
          this.router.navigate(['/reliantdash']);
        break;
        case 'Relus Technologies' || 'RAC King LLC' || 'BB&T':
          this.router.navigate(['/relusdash']);
        break;
        case 'Support':
          this.router.navigate(['/suppdash']);
          break;
        default:
          this.router.navigate(['/genericdash']);
      }
  }
}
