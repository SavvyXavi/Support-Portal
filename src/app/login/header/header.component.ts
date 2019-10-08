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
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  dashLink() {
    const dash = this.authenticationService.currentUserValue.partner;
      switch (dash) {
        case 'NorthSmart':
          this.router.navigate(['/northdash']);
        break;
        case 'Noble1':
          this.router.navigate(['/dashboard']);
        break;
        case 'Reliant':
          this.router.navigate(['/reliantdash']);
        break;
        case 'Relus':
          this.router.navigate(['/relusdash']);
        break;
        case 'Generic':
          this.router.navigate(['/genericdash']);
        break;
        case 'Support':
          this.router.navigate(['/suppdash']);
          break;
        default:
          this.router.navigate(['/genericdash']);
      }
  }
}
