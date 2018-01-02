import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrenciesService } from '../currencies.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';

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
    });

    this.currencyTo.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.params$.unsubscribe();
  }
}
