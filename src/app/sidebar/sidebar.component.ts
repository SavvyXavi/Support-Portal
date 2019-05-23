import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/services/authentication.service';

import { Subscription } from 'rxjs';
import { Profile } from '../login/models/profile';
import { Role } from 'src/app/types/role.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
