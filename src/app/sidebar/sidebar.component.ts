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

  ngOnInit() {}

  // // For Button roles
  // onSelect() {
  //   this.admin = !this.admin;
  // }

  // w3_open() {
  //   document.getElementById("").style.marginLeft = "25%";
  //   document.getElementById("mySidebar").style.width = "25%";
  //   document.getElementById("mySidebar").style.display = "block";
  //   document.getElementById("openNav").style.display = 'none';
  // }

  // w3_close() {
  //   document.getElementsByClassName('col-md-10').style.marginLeft = "0%";
  //   document.getElementById("mySidebar").style.display = "none";
  //   document.getElementById("openNav").style.display = "inline-block";
  // }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
