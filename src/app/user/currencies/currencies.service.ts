import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CURRENCIES, CURRENCY_IMAGE, CURRENCY } from './currencies.config';
import * as _ from 'lodash';

@Injectable()
export class CurrenciesService {
  constructor(private _http: HttpClient) {}

  getCurrencies(): CURRENCY[] {
    return CURRENCIES;
  }

  getCurrencyImage(currencyCode) {
    return `${CURRENCY_IMAGE}${currencyCode}.png`;
  }

  getCurrenciesTo(currency: string): Array<string> {
    const currencyObj = _.find(this.getCurrencies(), {
      code: currency
    });
    return currencyObj.to;
  }
}
