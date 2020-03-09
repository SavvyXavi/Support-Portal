import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/index/services/authentication.service';
import { Profile } from '../index/models/profile';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  companyPartner: string;
  currentProfile: Profile;
  constructor(
    private authServ: AuthenticationService
  ) {
    this.authServ.currentUser.subscribe(
      profile => this.currentProfile = profile
    );
  }

  ngOnInit(): void {
    // this.displayCompany();
  }

  // displayCompany() {
  //   if ( this.currentProfile.companypartner  === 'Partner') {
  //     this.companyPartner = this.currentProfile.partner;
  //   } else {
  //     this.companyPartner = this.currentProfile.company;
  //   }
  // }

}
