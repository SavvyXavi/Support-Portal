import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../login/services/profile.service';
import { AuthenticationService } from '../login/services/authentication.service';
import { Role } from '../types/role.enum';

import { first} from 'rxjs/operators'
import { Partner } from '../types/partner.enum';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Support Portal';
  @Input() loggedIn = false;
  private role: Role;
  loginForm: FormGroup;
  private adminHeader = false;
  partner: Partner;

  constructor (
    private router: Router,
    private profileService: ProfileService,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {}

  onLoad() {
    // this.loggedIn = true;
    // this.authenticationService.login(localStorage.getItem('username'),
    // localStorage.getItem('password'),
    // localStorage.getItem('partner'),
    // localStorage.getItem('partnerRole'))
    // .pipe(first())
    // .subscribe(
    //   data => {
    //     if (localStorage.getItem('partnerole') === 'Admin') {
    //       this.adminHeader = true;
    //     } else {
    //       return this.adminHeader;
    //     }
    //   }
    // );
 }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
