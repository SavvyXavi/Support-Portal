import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../index/services/authentication.service';

import { Profile } from '../index/models/profile';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiCallService } from '../tickets/services/api-call.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  currentProfile: Profile;
  ticketForm: FormGroup;
  assetForm: FormGroup;
  custOrPart: string;
  constructor (
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private api: ApiCallService
    ) {
      this.authenticationService.currentUser.subscribe(
        profile => this.currentProfile = profile
      );
      if ( this.currentProfile.companypartner === 'Partner' ) {
        this.custOrPart = this.currentProfile.partner;
      } else {
        this.custOrPart = this.currentProfile.company;
      }
    }

  ngOnInit() {
    this.ticketForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      CustomerNameOrId: [this.authenticationService.currentUserValue.partner, Validators.required],
      TicketType: ['', Validators.required],
      AssetId: ['', Validators.required],
      Location: ['', Validators.required],
      TicketCategoryNameOrId: ['', Validators.required],
      TicketTypeNameOrId: [ this.authenticationService.currentUserValue.partner + ' Quotes', Validators.required]
    });
    this.assetForm = this.formBuilder.group({
      TicketType: ['', Validators.required],
      Identifier: ['', Validators.required],
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      CustomerNameOrId: [this.custOrPart, Validators.required]
    });
  }


  createTicket() {
    this.api.addTicket(this.ticketForm.value)
     .subscribe(
       ticket => {
         let ticketData = this.ticketForm.value;
         ticketData = ticket;
       }
     );
   }

  createAsset() {
    this.api.addAsset(this.assetForm.value)
    .subscribe(
      asset => {
        let assetData = this.assetForm.value;
        assetData = asset;
      }
    );
  }
  // logout() {
  //   this.authenticationService.logout();
  //   this.router.navigate(['/login']);
  // }
}

