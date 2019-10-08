import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';

import { AlertService } from './../services/alert.service';
import { AuthenticationService } from './../services/authentication.service';
import { Role } from 'src/app/types/role.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  role: Role;
  @Output() adminHeader: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,

  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  // Determines which header to load
  onClickHeader() {
    this.adminHeader.emit(this.f.partnerRole.value);
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data => {
       const dash = this.authenticationService.currentUserValue.partner;
        switch (dash) {
          case 'NorthSmart':
            this.router.navigate(['/northdash']);
          break;
          case 'Noble1':
            this.router.navigate(['/dashboard']);
          break;
          case 'Reliant':
            this.router.navigate(['/reliantdash']);
          break;
          case 'Relus':
            this.router.navigate(['/relusdash']);
          break;
          case 'Generic':
            this.router.navigate(['/genericdash']);
          break;
          case 'Support':
            this.router.navigate(['/suppdash']);
            break;
          default:
            this.router.navigate(['/genericdash']);
        }
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }
}
