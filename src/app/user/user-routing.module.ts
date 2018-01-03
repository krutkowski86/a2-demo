import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user.component';
import { SettingsComponent } from './settings/settings.component';
import { CurrenciesComponent } from './currencies/currencies.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'settings',
        component: SettingsComponent,
        loadChildren: 'app/user/settings/settings.module#SettingsModule'
      },
      {
        path: 'currencies',
        component: CurrenciesComponent,
        loadChildren: 'app/user/currencies/currencies.module#CurrenciesModule'
      },
      {
        path: 'forms',
        loadChildren: 'app/user/forms/forms.module#FormsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
