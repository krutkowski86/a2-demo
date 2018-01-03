import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrenciesService } from '../currencies.service';
import { Subscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';
import { TICKER, TRADE } from '../currencies.config';

@Component({
  selector: 'app-currency-trades',
  templateUrl: './currency-trades.component.html',
  styleUrls: ['./currency-trades.component.scss']
})
export class CurrencyTradesComponent implements OnInit {
  currencyToList: Array<string>;
  currentCurrency: string;
  params$: Subscription;
  currencyTo = new FormControl('PLN');
  trades: Array<TRADE>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _currenciesSrv: CurrenciesService
  ) {}

  ngOnInit() {
    this.params$ = this._activatedRoute.parent.params.subscribe(params => {
      this.currentCurrency = params['currency'];
      this.currencyToList = this._currenciesSrv.getCurrenciesTo(
        this.currentCurrency
      );
      this._currenciesSrv
        .getTrades(this.currentCurrency, this.currencyTo.value)
        .then(data => {
          this.trades = data;
        });
    });

    this.currencyTo.valueChanges.subscribe(value => {
      this._currenciesSrv.getTrades(this.currentCurrency, value).then(data => {
        this.trades = data;
      });
    });
  }
}
