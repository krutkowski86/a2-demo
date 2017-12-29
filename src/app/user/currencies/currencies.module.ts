import { NgModule } from '@angular/core';

import { CurrenciesRoutingModule } from './currencies-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';
import { CurrencyInfoComponent } from './currency-info/currency-info.component';
import { CurrenciesService } from './currencies.service';

@NgModule({
  imports: [SharedModule, CurrenciesRoutingModule],
  declarations: [CurrenciesListComponent, CurrencyInfoComponent],
  providers: [CurrenciesService]
})
export class CurrenciesModule {}
