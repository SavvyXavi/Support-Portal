import { Profile } from './login/models/profile';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './login/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Support Portal';
  loginusername = Profile;
  constructor (
    public router: Router,
    private authenticationService: AuthenticationService
    ) {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }

  ngOnInit() {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
