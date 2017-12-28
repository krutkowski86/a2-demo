import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { PolicyComponent } from './policy/policy.component';
import { SettingsListComponent } from './settings-list/settings-list.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsListComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: 'policy',
    component: PolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
