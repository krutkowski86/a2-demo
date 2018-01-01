import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';
import { CurrencyInfoComponent } from './currency-info/currency-info.component';
import { CurrencyPanelComponent } from './currency-panel/currency-panel.component';
import { CurrencyTradesComponent } from './currency-trades/currency-trades.component';
import { CurrencyOrdersComponent } from './currency-orders/currency-orders.component';

const routes: Routes = [
  {
    path: '',
    component: CurrenciesListComponent,
    children: [
      {
        path: ':currency',
        component: CurrencyPanelComponent,
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: CurrencyInfoComponent
          },
          {
            path: 'trades',
            component: CurrencyTradesComponent
          },
          {
            path: 'orders',
            component: CurrencyOrdersComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrenciesRoutingModule {}
