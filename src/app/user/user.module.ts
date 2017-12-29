import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { CurrenciesComponent } from './currencies/currencies.component';

@NgModule({
  imports: [SharedModule, UserRoutingModule],
  declarations: [
    UserComponent,
    DashboardComponent,
    SettingsComponent,
    CurrenciesComponent
  ]
})
export class UserModule {}
