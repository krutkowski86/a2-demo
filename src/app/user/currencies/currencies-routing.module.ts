import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';
import { CurrencyInfoComponent } from './currency-info/currency-info.component';

const routes: Routes = [
  {
    path: '',
    component: CurrenciesListComponent
  },
  {
    path: ':cur1/:cur2',
    component: CurrencyInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrenciesRoutingModule {}
