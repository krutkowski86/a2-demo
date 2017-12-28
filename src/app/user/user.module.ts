import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [SharedModule, UserRoutingModule],
  declarations: [UserComponent, DashboardComponent, UserProfileComponent]
})
export class UserModule {}
