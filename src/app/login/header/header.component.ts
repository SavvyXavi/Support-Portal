import { Role } from 'src/app/types/role.enum';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

import { first } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title = 'Support Portal';
  currentProfile: Profile;
  role: Role;

  nameSubscription: Subscription;

  constructor (
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {
    this.nameSubscription = this.authenticationService.currentUser.subscribe(
      name => {
        this.currentProfile = name;
      }
    );
  }

  logout() {
    localStorage.clear();
    this.authenticationService.logout();
    this.router.navigate(['/login']);
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
