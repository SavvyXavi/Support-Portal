import { Sidebar } from './model/sidebar';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/services/authentication.service';

import { Subscription } from 'rxjs';
import { Profile } from '../login/models/profile';
import { Role } from 'src/app/types/role.enum';

import { Sidebars } from './services/loadsidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  title = 'Support Portal';
  loggedIn = false;
  currentRole: Profile;
  selectedRole = Role;
  role = Role;

  menuOpen = false;

  sidebars = Sidebars;

  links: string;

  routerlink = this.sidebars;

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

  // For Button roles
  onSelect(role = Role): void {
    this.selectedRole = role;
  }

  onClick() {
    this.menuOpen = true;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
