import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../login/services/authentication.service';
import { ProfileService } from '../../login/services/profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      partner: [this.authenticationService.currentUserValue.partner, Validators.required],
      email: ['', Validators.email],
      partnerRole: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}
