import { NgModule } from '@angular/core';

import { CurrenciesRoutingModule } from './currencies-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';
import { CurrencyInfoComponent } from './currency-info/currency-info.component';
import { CurrenciesService } from './currencies.service';
import { CurrencyPanelComponent } from './currency-panel/currency-panel.component';
import { CurrencyTradesComponent } from './currency-trades/currency-trades.component';
import { CurrencyOrdersComponent } from './currency-orders/currency-orders.component';

@NgModule({
  imports: [SharedModule, CurrenciesRoutingModule],
  declarations: [
    CurrenciesListComponent,
    CurrencyInfoComponent,
    CurrencyPanelComponent,
    CurrencyTradesComponent,
    CurrencyOrdersComponent
  ],
  providers: [CurrenciesService]
})
export class CurrenciesModule {}
