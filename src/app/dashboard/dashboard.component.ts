import { AuthenticationService } from './../login/services/authentication.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FuncappService } from '../services/funcapp.service';
import { Info } from '../models/info';
import { Profile } from '../login/models/profile';
import { ProfileService } from '../login/services/profile.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  selectedInfo: Info;
  returnedInfo: Info;
  getInfo: Info;


  currentProfile: Profile;
  currentProfileSubscription: Subscription;
  profiles: Profile[] = [];

  constructor(
    private funcapp: FuncappService,
    private authenticationService: AuthenticationService,
    private profileService: ProfileService
    ) {
      this.currentProfileSubscription = this.authenticationService.currentUser.subscribe(
        profile => {
          this.currentProfile = profile;
        }
      );
     }

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy() {
    this.currentProfileSubscription.unsubscribe();
  }

  deleteProfile(id: number) {
     this.profileService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers() {
    this.profileService.getAll().pipe(first()).subscribe( profiles => {
      this.profiles = profiles;
    });
  }
  onClick(): void {
    this.funcapp.tempCall(this.selectedInfo).subscribe((returnedInfo: Info) => {
      this.getInfo = returnedInfo;
    });
  }

}
