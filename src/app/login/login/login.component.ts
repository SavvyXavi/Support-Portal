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
        this.router.navigate(['/dashboard']);
      //  const dash = this.authenticationService.currentUserValue.partner;
      //  switch (dash) {
      //   case 'NorthSmart (Northland)':
      //     this.router.navigate(['/northdash']);
      //   break;
      //   case 'Noble1 Solutions' || 'Colwick Travel' || 'xByte Technologies':
      //     this.router.navigate(['/dashboard']);
      //   break;
      //   case 'Reliant Technology':
      //     this.router.navigate(['/reliantdash']);
      //   break;
      //   case 'Relus Technologies' || 'RAC King LLC':
      //     this.router.navigate(['/relusdash']);
      //   break;
      //   case 'BB&T':
      //     this.router.navigate(['/relusdash']);
      //   break;
      //   case 'Support':
      //     this.router.navigate(['/suppdash']);
      //     break;
      //   default:
      //     setTimeout(() => {
      //   this.router.navigate(['/genericdash']);
      //     }, 5000);
      // }
  },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }
}
