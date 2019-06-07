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
  private roleSubscription: Subscription;

  nameSubscription: Subscription;

  constructor (
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
        this.roleSubscription = this.authenticationService.currentUser.subscribe(
        role => {
        this.currentProfile = role;
      }
    );
    }

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
}
