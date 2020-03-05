import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../index/services/authentication.service';
import { ApifilterService } from './../services/apifilter.service';

import { Subscription } from 'rxjs';
import { Profile } from '../index/models/profile';
import { Partner } from './../models/partner';

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

  partnerArr: Partner[];

  private roleSubscription: Subscription;
  private sidebarSubscription: Subscription;

  constructor (
    public router: Router,
    private authenticationService: AuthenticationService,
    private filter: ApifilterService
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
      return document.getElementById('container').style.width = '40%';
    } else {
      return document.getElementById('container').style.width = '100%';
    }
  }

  getPartners() {
    this.filter.getPartners()
    .subscribe(
      returnedPartners => this.partnerArr = returnedPartners
    );
  }

  filterPartner(partner: String) {
    return this.partnerArr.find(company => company.CompanyName === partner);
  }

  dropdownMA() {
    if (document.getElementById('dropdown').style.display === 'none') {
      document.getElementById('dropdown').style.display = 'block';
    } else {
      document.getElementById('dropdown').style.display = 'none';
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
