import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { UserSettingsComponent } from './user-settings/user-settings.component';


@NgModule({
  declarations: [UserSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
