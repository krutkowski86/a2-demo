import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CURRENCIES, CURRENCY_IMAGE } from './currencies.config';

@Injectable()
export class CurrenciesService {
  constructor(private _http: HttpClient) {}

  getCurrencies() {
    return CURRENCIES;
  }

  getCurrencyImage(currencyCode) {
    return `${CURRENCY_IMAGE}${currencyCode}.png`;
  }
}
