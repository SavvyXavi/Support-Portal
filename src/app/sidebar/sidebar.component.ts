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

  collapseMenu() {
    if (document.getElementById('container').style.width = '100%') {
      document.getElementById('container').style.width = '40%';
    }
  }

  dropdownMA() {
    if (document.getElementById('dropdown').style.display === 'none') {
      document.getElementById('dropdown').style.display = 'block';
    } else {
      document.getElementById('dropdown').style.display = 'none';
    }
  }

  dashLink() {
    const dash = this.authenticationService.currentUserValue.partner;
    switch (dash) {
      case 'NorthSmart (Northland)':
        this.router.navigate(['/northdash']);
      break;
      case 'Noble1 Solutions':
        this.router.navigate(['/dashboard']);
      break;
      case 'Reliant Technology':
        this.router.navigate(['/reliantdash']);
      break;
      case 'Relus Technologies':
        this.router.navigate(['/relusdash']);
      break;
      // case 'Generic':
      //   this.router.navigate(['/genericdash']);
      // break;
      case 'Support':
        this.router.navigate(['/suppdash']);
        break;
      default:
        this.router.navigate(['/genericdash']);
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
