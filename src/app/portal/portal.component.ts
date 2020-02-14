import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/services/authentication.service';
import { Profile } from '../login/models/profile';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  title = 'Support Portal';
  loginusername = Profile;
  constructor (
    public router: Router,
    private authenticationService: AuthenticationService
    ) {
      this.authenticationService.logout();
 //     this.router.navigate(['/login']);
    }

  ngOnInit() {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

