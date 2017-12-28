import { NgModule } from '@angular/core';

import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { PolicyComponent } from './policy/policy.component';
import { SharedModule } from '../../shared/shared.module';
import { SettingsListComponent } from './settings-list/settings-list.component';

@NgModule({
  imports: [SharedModule, SettingsRoutingModule],
  declarations: [
    SettingsListComponent,
    ProfileComponent,
    PasswordComponent,
    PolicyComponent
  ]
})
export class SettingsModule {}
