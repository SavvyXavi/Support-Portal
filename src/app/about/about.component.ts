import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/index/services/authentication.service';
import { Profile } from '../index/models/profile';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  version: string;
  currentProfile: Profile;
  constructor(
    private authServ: AuthenticationService
  ) {
    this.authServ.currentUser.subscribe(
      profile => this.currentProfile = profile
    );
  }

  ngOnInit(): void {
  }

}
