import { Injectable } from '@angular/core';
import {
  CURRENCIES,
  CURRENCY_IMAGE,
  CURRENCY,
  TICKER,
  TRADE
} from './currencies.config';
import find from 'lodash/find';
import { RestApiService } from '../../core/services/rest-api.service';

@Injectable()
export class CurrenciesService {
  constructor(private _http: RestApiService) {}

  getCurrencies(): CURRENCY[] {
    return CURRENCIES;
  }

  getCurrencyImage(currencyCode) {
    return `${CURRENCY_IMAGE}${currencyCode}.png`;
  }

  getCurrenciesTo(currency: string): Array<string> {
    const currencyObj = find(this.getCurrencies(), {
      code: currency
    });
    return currencyObj.to;
  }

  getTicker(currency: string, currencyTo: string) {
    const url = `https://bitbay.net/API/Public/${currency}${currencyTo}/ticker.json`;
    return this._http.get<TICKER>(url);
  }

  getTrades(currency: string, currencyTo: string) {
    const url = `https://bitbay.net/API/Public/${currency}${currencyTo}/trades.json`;
    return this._http.get<Array<TRADE>>(url);
  }
}
