import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrenciesService } from '../currencies.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';
import { TICKER } from '../currencies.config';

@Component({
  selector: 'app-currency-info',
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.scss']
})
export class CurrencyInfoComponent implements OnInit, OnDestroy {
  currencyToList: Array<string>;
  currentCurrency: string;
  params$: Subscription;
  currencyTo = new FormControl('PLN');
  ticker: TICKER;

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
        .getTicker(this.currentCurrency, this.currencyTo.value)
        .then(data => {
          this.ticker = data;
        });
    });

    this.currencyTo.valueChanges.subscribe(value => {
      this._currenciesSrv.getTicker(this.currentCurrency, value).then(data => {
        this.ticker = data;
      });
    });
  }

  ngOnDestroy(): void {
    this.params$.unsubscribe();
  }
}
