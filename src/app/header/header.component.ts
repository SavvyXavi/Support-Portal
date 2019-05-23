import { Role } from 'src/app/types/role.enum';
import { LoginComponent } from './../login/login/login.component';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/services/authentication.service';

import { Subscription } from 'rxjs';
import { Profile } from '../login/models/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Support Portal';
  loggedIn = false;
  currentRole: Profile;
  role: Role;
  private roleSubscription: Subscription;

  constructor (
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
        this.roleSubscription = this.authenticationService.currentUser.subscribe(
        role => {
        this.currentRole = role;
      }
    );
    }

  ngOnInit() {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
