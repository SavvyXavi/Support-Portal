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
  submitted = false;

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
      CustomerNameOrId: [this.custOrPart, Validators.required],
      TicketType: ['', Validators.required],
      AssetId: ['', Validators.required],
      Location: ['', Validators.required],
      TicketCategoryNameOrId: ['', Validators.required],
      TicketTypeNameOrId: [ this.custOrPart + ' Quotes', Validators.required]
    });
    this.assetForm = this.formBuilder.group({
      TicketType: ['', Validators.required],
      Identifier: ['', Validators.required],
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      CustomerNameOrId: [this.custOrPart, Validators.required]
    });
  }

  get ticketF() {
    return this.ticketForm.controls;
  }

  get assetF() {
    return this.assetForm.controls;
  }

  createTicket() {
    this.submitted = true;

    if (this.ticketF.invalid) {
      return;
    }

    this.api.addTicket(this.ticketForm.value)
     .subscribe(
       ticket => {
         let ticketData = this.ticketForm.value;
         ticketData = ticket;
       }
     );
   }

  createAsset() {
    this.submitted = true;

    if (this.assetF.invalid) {
      return;
    }

    this.api.addAsset(this.assetForm.value)
    .subscribe(
      asset => {
        let assetData = this.assetForm.value;
        assetData = asset;
      }
    );
  }

}

