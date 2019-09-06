import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../login/services/authentication.service';

import { Subscription } from 'rxjs';
import { Profile } from '../login/models/profile';

import { Sidebars } from './services/loadsidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  title = 'Support Portal';
  currentRole: Profile;
  admin = true;

  sidebars = Sidebars;

  private roleSubscription: Subscription;
  private sidebarSubscription: Subscription;

  constructor (
    public router: Router,
    private authenticationService: AuthenticationService,
    ) {
        this.roleSubscription = this.authenticationService.currentUser.subscribe(
        role => {
        this.currentRole = role;
          }
        );
      }

  ngOnInit() { }

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
          this.router.navigate(['/login']);
      }
  }

  // // For Button roles
  // onSelect() {
  //   this.admin = !this.admin;
  // }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
